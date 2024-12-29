import type {ValidationSuccess} from "~/shared/types/auth";
import {jwtVerify} from "jose";
import {createPrivateKey} from "crypto";

const config = useRuntimeConfig();

export default defineEventHandler(async (event): Promise<ValidationSuccess> => {
  const token = event.headers.get('authorization')
  if (!token || token === "" || token.split(' ').length !== 2) {
    throw createError({
      statusCode: 401,
      statusMessage: 'Unauthorized',
    })
  }

  const privateKey = createPrivateKey(config.jwtSecretCert?.replace(/\\n/g, '\n') ?? '');
  const jwt: string = token.split(' ')[1] as string;

  try {
    await jwtVerify(jwt, privateKey, {
      issuer: config.host,
    });
  } catch (e: any) {
    throw createError({
      statusCode: 401,
      statusMessage: 'Unauthorized',
    })
  }

  return {
    valid: true
  } as ValidationSuccess;
});
