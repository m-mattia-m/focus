import {useDatabase} from "nitropack/runtime";

// const config = useRuntimeConfig()

export default defineEventHandler(async (event) => {

  const db = useDatabase()

  const {rows} = await db.sql`SELECT id, email FROM user;`

  return rows
})