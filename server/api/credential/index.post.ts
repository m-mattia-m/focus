import {useDatabase} from "nitropack/runtime";
import {type CredentialRequest} from "~/server/types/credential";

export default defineEventHandler(async (event) => {
  const credentialRequest: CredentialRequest = await readBody(event) as CredentialRequest

  const db = useDatabase()

  const response = await db.sql`
      INSERT INTO credential (title, api_token, refresh_token)
      VALUES (${credentialRequest.title}, 'api_token_12345', 'refresh_token_67890');
  `

  return {}
})
