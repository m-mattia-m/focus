export interface CredentialRequest {
  title: string
  o_auth_code: string
}

export interface CredentialResponse {
  id: string
  title: string
  // apiToken: string
  // refreshToken: string
}