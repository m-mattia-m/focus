import {type UserResponse} from "~/server/types/user";
import { PrismaClient } from '@prisma/client';

export default defineEventHandler(async (event) => {
  const userId: string = event.context.params?.id as string
  const prisma = new PrismaClient({

  });

  const user = await prisma.user.findFirst({
    where: {
      id: userId
    }
  })

  return user as unknown as UserResponse
})