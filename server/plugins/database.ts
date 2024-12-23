import {useDatabase} from "nitropack/runtime";
import {createDatabase} from "db0";

// const config = useRuntimeConfig();
// export default async () => {
//   console.log("here in database.ts to create tables")
//
//
//   const db = useDatabase()
//
//   // create users table
//   await db.sql`
//       CREATE TABLE IF NOT EXISTS user
//       (
//           id       TEXT PRIMARY KEY DEFAULT (lower(hex(randomblob(4)) || '-' ||
//                                                    hex(randomblob(2)) || '-' ||
//                                                    '4' || substr(hex(randomblob(2)), 2) || '-' ||
//                                                    substr('89ab', abs(random() % 4) + 1, 1) ||
//                                                    substr(hex(randomblob(2)), 2) || '-' ||
//                                                    hex(randomblob(6)))),
//           email    TEXT NOT NULL UNIQUE,
//           password TEXT NOT NULL
//       );
//   `
//
//   // create credentials table
//   await db.sql`
//       CREATE TABLE IF NOT EXISTS credential
//       (
//           id            TEXT PRIMARY KEY DEFAULT (lower(hex(randomblob(4)) || '-' ||
//                                                         hex(randomblob(2)) || '-' ||
//                                                         '4' || substr(hex(randomblob(2)), 2) || '-' ||
//                                                         substr('89ab', abs(random() % 4) + 1, 1) ||
//                                                         substr(hex(randomblob(2)), 2) || '-' ||
//                                                         hex(randomblob(6)))),
//           title         TEXT NOT NULL,
//           api_token     TEXT NOT NULL,
//           refresh_token TEXT NOT NULL
//       );
//   `
//
// };


// export default defineNitroPlugin(async (nitroApp) => {
//   const db = useDatabase()
//
//   // create users table
//   await db.sql`
//       CREATE TABLE IF NOT EXISTS user
//       (
//           id       TEXT PRIMARY KEY DEFAULT (lower(hex(randomblob(4)) || '-' ||
//                                                    hex(randomblob(2)) || '-' ||
//                                                    '4' || substr(hex(randomblob(2)), 2) || '-' ||
//                                                    substr('89ab', abs(random() % 4) + 1, 1) ||
//                                                    substr(hex(randomblob(2)), 2) || '-' ||
//                                                    hex(randomblob(6)))),
//           email    TEXT NOT NULL UNIQUE,
//           password TEXT NOT NULL
//       );
//   `
//
//   // create credentials table
//   await db.sql`
//       CREATE TABLE IF NOT EXISTS credential
//       (
//           id            TEXT PRIMARY KEY DEFAULT (lower(hex(randomblob(4)) || '-' ||
//                                                         hex(randomblob(2)) || '-' ||
//                                                         '4' || substr(hex(randomblob(2)), 2) || '-' ||
//                                                         substr('89ab', abs(random() % 4) + 1, 1) ||
//                                                         substr(hex(randomblob(2)), 2) || '-' ||
//                                                         hex(randomblob(6)))),
//           title         TEXT NOT NULL,
//           api_token     TEXT NOT NULL,
//           refresh_token TEXT NOT NULL
//       );
//   `
//
// })
