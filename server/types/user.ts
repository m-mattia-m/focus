export interface UserRequest {
  email: string
  password: string
  passwordVerify: string
}

export interface UserResponse {
  id: string
  email: string
}