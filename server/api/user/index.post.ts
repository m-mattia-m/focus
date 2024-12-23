import { useDatabase } from "nitropack/runtime";
import {type UserRequest, type UserResponse} from "~/server/types/user";
import {hashSync} from 'bcrypt';

export default defineEventHandler(async (event): Promise<UserResponse> => {
  const userBody: UserRequest = await readBody(event) as UserRequest

  const db = useDatabase()

  await db.sql`
      CREATE TABLE IF NOT EXISTS user
      (
          id
                   TEXT
              PRIMARY
                  KEY
              DEFAULT (
                  lower(
                          hex(
                                  randomblob
                                  (
                                          4
                                  )) || '-' ||
                          hex
                          (
                                  randomblob
                                  (
                                          2
                                  )) || '-' ||
                          '4' || substr
                                 (
                                  hex(
                                          randomblob
                                          (
                                                  2
                                          )), 2) || '-' ||
                          substr
                          (
                                  '89ab',
                                  abs(
                                          random
                                          (
                                          ) % 4) + 1, 1) ||
                          substr
                          (
                                  hex(
                                          randomblob
                                          (
                                                  2
                                          )), 2) || '-' ||
                          hex
                          (
                                  randomblob
                                  (
                                          6
                                  )))),
          email    TEXT NOT NULL UNIQUE,
          password TEXT NOT NULL
      );
  `

  const response = await db.sql`
      INSERT INTO user (email, password)
      VALUES (${userBody.email}, ${hashPassword(userBody.password)});
  `

  return response.rows as unknown as UserResponse
})

function hashPassword(password: string): string {
  return hashSync(password, 10)
}