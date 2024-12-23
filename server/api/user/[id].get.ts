import {useDatabase} from "nitropack/runtime";
import {type UserResponse} from "~/server/types/user";

// const config = useRuntimeConfig()

export default defineEventHandler(async (event) => {
  const userId: string = event.context.params?.id as string

  const db = useDatabase()

  const response = await db.sql`SELECT id, email FROM user  WHERE id = ${userId};`

  return response.rows as unknown as Array<UserResponse>
})