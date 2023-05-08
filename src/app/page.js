import { connectDB } from "../../util/database.js"


export default async function Home () {
  const client = await connectDB
  const db = client.db("fourm")
  let result = await db.collection("post").find().toArray()
  console.log(result)
  

  return (
    <div>
      <h1>안녕!</h1>
    </div>
  )
}
