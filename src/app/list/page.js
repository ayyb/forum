import { connectDB } from "../../../util/database"
import Link from 'next/link';
import Detail from "../detail/[id]/page";
import DetailLink from "./DetailLink.js"
import ListItem from "./ListItem.js"

export default async function List(){

    const db = (await connectDB).db("fourm")
    let result = await db.collection("post").find().toArray()
    console.log('정보',result)

    return(
        <div className="list-bg">
          <ListItem result={result}/>
            {/* {result.map((post,i) => (
                <div className="list-item" key={i}>
                    <h4><Link href={`/detail/${post._id}`}>{post.title}</Link></h4>
                    <p>{post.content}</p>
                    <DetailLink />
                    <Link href={`/edit/${post._id}`}>✏️</Link>
                    <p>1월 1일</p>
                  </div>
            ))} */}
      </div>
    )
}
