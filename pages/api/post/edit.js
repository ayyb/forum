import { connectDB } from "../../../util/database.js"
import { ObjectId } from "mongodb";

export default async function handler(req, res) {
  if (req.method == 'POST'){
    console.log('받는정보',req.body)
    let changeData = {title: req.body.title, content: req.body.content}
    let db = (await connectDB).db("fourm")
    let result = await db.collection("post").updateOne(
        {_id : new ObjectId(req.body._id)}, { $set : changeData} );
    console.log('결과',result)
    res.redirect(302, '/list')
  }
}