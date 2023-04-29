import { todos } from "../../../tables/users"
import { db } from "../../../utils/drizzle"

export default async function handler(req, res) {
  if (req.method !== "POST") {
    res.status(403).json({
      message: "Only supports POST method!",
    })
    return
  }

  const { text } = req.body

  if (!text) {
    res.status(400).json({
      message: "Fields cannot be empty",
    })
    return
  }

  // Inserting tasks into ‘todos’ table
  try {
    const todo = await db
      .insert(todos)
      .values({
        id: Math.floor(Math.random() * 1000),
        text: text,
      })
      .returning()
      .get()

    res.status(201).json({ todo })
  } catch (err) {
    // Handle query error
    console.error(err)
    res.status(500).send("Internal Server Error")
  }
}
