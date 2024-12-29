export interface LoginResponseBody {
  jwt?: string;
}

export interface JwtClaims {
  sub: string;
  email: string;
  iat: number;
  iss: string;
  exp: number;
}

export interface ValidationSuccess {
  valid: boolean;
}