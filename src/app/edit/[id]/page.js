import { ObjectId } from "mongodb";
import { connectDB } from "../../../../util/database";

export default async function Edit(props) {
    const db = (await connectDB).db("fourm")
    let result = await db.collection('post').findOne({_id : new ObjectId(props.params.id)});

    return (<div>
        <div className="p-20">
            <h4>글 수정</h4>
            <form action="/api/post/edit" method="POST">
                <input name="title" defaultValue={result.title}/>
                <input name="content" defaultValue={result.content} />
                <input style={{display:'none'}} name="_id" defaultValue={result._id.toString()} />
                <button type="submit">버튼</button>
            </form>
        </div>
    </div>)
}