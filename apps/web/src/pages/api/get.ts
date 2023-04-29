// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import { db, todos } from 'database'
import type { NextApiRequest, NextApiResponse } from 'next'

// type Data = {
//   name: string
// }

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<any>
) {

  console.log("hiiii")

    const data = await db.select().from(todos).limit(2).all()
    console.log(data)

  res.status(200).json(data)
}
