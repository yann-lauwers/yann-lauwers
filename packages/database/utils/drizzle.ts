import { Config, createClient } from "@libsql/client";
import { drizzle, LibSQLDatabase } from "drizzle-orm/libsql";

const config: Config = {
  url: process.env.NEXT_PUBLIC_DB_URL || "",
  authToken: process.env.NEXT_PUBLIC_DB_AUTH_TOKEN,
};

const client = createClient(config);
export const db: LibSQLDatabase = drizzle(client);
