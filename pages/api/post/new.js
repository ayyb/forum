import { connectDB } from "../../../util/database.js";

export default async function handler(req,res){
    if(req.method == 'POST'){
        console.log('POST요청')
        console.log(req.body)
        if(req.body.title == '' || req.body.content == ''){
            return res.status(400).json({message : '제목이나 내용이 없습니다.'})
        }
        try {
            const db = (await connectDB).db("fourm")
            let result = await db.collection('post').insertOne(req.body);
            return res.status(200).redirect('/') //리다이렉트
        } catch (error) {
            console.log(error)
        }
            
        
    }
    
}