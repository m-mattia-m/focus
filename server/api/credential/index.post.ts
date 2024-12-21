import {useDatabase} from "nitropack/runtime";
import {type CredentialRequest} from "~/server/types/credential";

export default defineEventHandler(async (event) => {
  const credentialRequest: CredentialRequest = await readBody(event) as CredentialRequest

  const db = useDatabase()

  await db.sql`
      CREATE TABLE IF NOT EXISTS credential
      (
          id            TEXT PRIMARY KEY DEFAULT (lower(hex(randomblob(4)) || '-' ||
                                                        hex(randomblob(2)) || '-' ||
                                                        '4' || substr(hex(randomblob(2)), 2) || '-' ||
                                                        substr('89ab', abs(random() % 4) + 1, 1) ||
                                                        substr(hex(randomblob(2)), 2) || '-' ||
                                                        hex(randomblob(6)))),
          title         TEXT NOT NULL,
          api_token     TEXT NOT NULL,
          refresh_token TEXT NOT NULL
      );
  `


  const response = await db.sql`
      INSERT INTO credential (title, api_token, refresh_token)
      VALUES (${credentialRequest.title}, 'api_token_12345', 'refresh_token_67890');
  `

  return {}
})
