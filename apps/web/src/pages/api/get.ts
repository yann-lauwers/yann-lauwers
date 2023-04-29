// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import { Todo, db, todos } from 'database'
import type { NextApiRequest, NextApiResponse } from 'next'

export default async function handler( req: NextApiRequest,
  res: NextApiResponse<Todo[]>) {
  if (req.method !== "GET") {
    res.status(403).end({
      message: "Only supports GET method!",
    })
  }

  // Fetching tasks from ‘todos’ table
  try {
    const result = await db.select().from(todos).limit(2).all()
    res.status(200).json(result)
  } catch (err) {
    // Handle query error
    console.error(err)
    res.status(500).end("Internal Server Error")
  }
}

