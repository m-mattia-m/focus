// import {useDatabase} from "nitropack/runtime";
import {drizzle} from "drizzle-orm/libsql";
import {migrate} from "drizzle-orm/libsql/migrator";


export default defineNitroPlugin(async (nitroApp) => {
  // useDatabase()
  // const db = createDatabase();

  console.log("here in database.ts to create tables")

  const temp = drizzle(useDatabase());

  const temp2 = migrate(temp, {migrationsFolder: "server/database/migrations"})

  console.log(temp2)


  // await drizzle(useDatabase(), {migrationsFolder: "server/database/migrations"})
  //   .then(() => {
  //     console.log("Database migrations complete.");
  //   })
  //   .catch((error) => {
  //     console.error("Database migrations failed:", error);
  //   });


  // const db = createDatabase(useDatabase());
  //
  // // Use simple db0 API to make queries
  // await db.sql`create table if not exists test (
  //   id integer primary key autoincrement,
  //   full_name text
  // )`;

  // And then leverage drizzle typed API to make more advanced ones
  //   const drizzleDb = drizzle(db);
  //   await drizzleDb.select().from(users).all();


})

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
