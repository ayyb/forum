import { connectDB } from "../../../util/database.js"
import { ObjectId } from "mongodb";
export default async function handler(req, res) {
    if (req.method == 'POST') {
        try {
            let db = (await connectDB).db("fourm")
            let result = await db.collection("post").deleteOne(
                { _id: new ObjectId(req.body) });
            // res.status(200).json('complete')
            res.redirect(302, '/list')
        } catch (error) {
            res.status(200).json(error)
        }
    }
}