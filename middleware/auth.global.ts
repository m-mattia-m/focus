import Interceptors from "undici-types/interceptors";
import {isLoggedIn} from "~/utils/auth";

export default defineNuxtRouteMiddleware(async (to, from) => {
  if (import.meta.server) return

  if (to.path.includes('/settings') && !await isLoggedIn()) {
    return navigateTo('/login')
  }
})