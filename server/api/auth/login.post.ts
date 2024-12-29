import {PrismaClient} from '@prisma/client';
import {SignJWT} from 'jose';
import {type UserRequest} from "~/server/types/user";
import {comparePassword} from "~/server/utils/hashing";
import {createPrivateKey} from 'crypto';
import type {LoginResponseBody} from "~/shared/types/auth";

const prisma = new PrismaClient();
const config = useRuntimeConfig();

export default defineEventHandler(async (event) => {
  const requestBody = await readBody(event) as UserRequest;

  const user = await prisma.user.findUnique({
    where: {email: requestBody.email}
  });
  if (!user) {
    throw createError({
      statusCode: 400,
      statusMessage: 'Invalid username or password',
    })
  }

  const validPassword = comparePassword(requestBody.password, user.password);
  if (!validPassword) {
    throw createError({
      statusCode: 400,
      statusMessage: 'Invalid username or password',
    })
  }

  const privateKey = createPrivateKey(config.jwtSecretCert?.replace(/\\n/g, '\n') ?? '');
  const payload = {
    'sub': user.id,
    'email': user.email
  }

  const jwt = await new SignJWT(payload)
    .setProtectedHeader({alg: 'ES256'})
    .setIssuedAt()
    .setIssuer(config.host)
    .setExpirationTime('12h')
    .sign(privateKey);

  return {
    statusCode: 200,
    body: {
      jwt
    } as LoginResponseBody
  };
});
