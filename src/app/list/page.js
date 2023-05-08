import { connectDB } from "../../../util/database"
import Link from 'next/link';
import Detail from "../detail/[id]/page";
import DetailLink from "./DetailLink.js"

export default async function List(){

    const db = (await connectDB).db("fourm")
    let result = await db.collection("post").find().toArray()
    console.log(result)

    return(
        <div className="list-bg">
            {result.map((post,i) => (
                <div className="list-item" key={i}>
                    <h4><Link href={`/detail/${post._id}`}>{post.title}</Link></h4>
                    <p>{post.content}</p>
                    <DetailLink />
                    <p>1월 1일</p>
                  </div>
            ))}
        {/* <div className="list-item">
          <h4>글제목</h4>
          <p>1월 1일</p>
        </div>
        <div className="list-item">
          <h4>글제목</h4>
          <p>1월 1일</p>
        </div>
        <div className="list-item">
          <h4>글제목</h4>
          <p>1월 1일</p>
        </div> */}
      </div>
    )
}
