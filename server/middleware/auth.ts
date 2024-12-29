import {isLoggedIn} from "~/utils/auth";

export default defineEventHandler(async (event) => {
  const path: string = getRequestURL(event).pathname


  if (
    (path.includes('/api/credential') || path.includes('/api/music') || path.includes('/api/auth/verify')) &&
    !await isLoggedIn()
  ) {
    return event.respondWith(new Response('Unauthorized', {status: 401}))
  }
})