import {type UserRequest, type UserResponse} from "~/server/types/user";
import {Prisma, PrismaClient} from '@prisma/client';
import {hashPassword} from "~/server/utils/hashing";

export default defineEventHandler(async (event): Promise<UserResponse> => {
  const userBody: UserRequest = await readBody(event) as UserRequest
  const prisma = new PrismaClient();

  if (userBody.password !== userBody.passwordVerify) {
    throw createError({
      statusCode: 400,
      statusMessage: 'Passwords do not match',
    })
  }

  const user = await prisma.user.findUnique({
    where: {
      email: userBody.email
    }
  })
  if (user) {
    throw createError({
      statusCode: 400,
      statusMessage: 'User already exists',
    })
  }

  const createdUser = await prisma.user.create({
    data: {
      email: userBody.email,
      password: hashPassword(userBody.password)
    } as Prisma.UserCreateInput
  })

  return createdUser as unknown as UserResponse
})
