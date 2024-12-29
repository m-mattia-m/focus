// It will be available as randomEntry() (camelCase of file name without extension)
import type {JwtClaims} from "#shared/types/auth";
import {SpotifyApi} from "@spotify/web-api-ts-sdk";

export function setAuthToken(token: string): void {
  if (import.meta.server) return

  localStorage.setItem('authToken', token);
  return
}

export function getAuthToken(): string {
  if (import.meta.server) return ''

  return localStorage.getItem('authToken') || '';
}

export function clearAuthToken(): void {
  if (import.meta.server) return

  localStorage.removeItem('authToken');
  return
}

export async function isLoggedIn(): Promise<boolean> {
  if (import.meta.server) return false

  if (!localStorage.getItem('authToken')) return false;

  try {
    const verification = await $fetch('/api/auth/verify', {
      method: "POST",
      headers: {
        'Authorization': `Bearer ${localStorage.getItem('authToken')}`
      }
    })
    if (!verification.valid) return false;
  } catch (e) {
    return false
  }


  // TODO check if expired
  const token = localStorage.getItem('authToken');

  return true
}

export function getAuthClaims(): JwtClaims | undefined {
  if (import.meta.server) return undefined

  const token = localStorage.getItem('authToken');
  if (!token) return undefined

  const payloadBase64 = token.split('.')[1] as string;
  const payloadString = atob(payloadBase64);
  return JSON.parse(payloadString) as JwtClaims;
}
