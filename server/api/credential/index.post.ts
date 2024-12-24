import {useDatabase} from "nitropack/runtime";
import {type CredentialRequest} from "~/server/types/credential";

export default defineEventHandler(async (event) => {
  const credentialRequest: CredentialRequest = await readBody(event) as CredentialRequest

  return {}
})
