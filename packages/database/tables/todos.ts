import { integer, sqliteTable, text } from "drizzle-orm/sqlite-core";

const todos = sqliteTable("todos", {
  id: integer("id").primaryKey(),
  text: text("text"),
});

export { todos };
