import {useDatabase} from "nitropack/runtime";
import {type UserResponse} from "~/server/types/user";

// const config = useRuntimeConfig()

export default defineEventHandler(async (event) => {
  const id: string = event.context.params?.id as string

  const db = useDatabase()

  // console.log(config.spotifyAccessToken)

  // const response = await db.sql`SELECT * FROM credential  WHERE id = ${id};`

  return {}
})
