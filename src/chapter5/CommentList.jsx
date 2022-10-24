import React from "react";
import Comment from "./Comment";



const comments = [
    {
        name : "홍길동",
        comment : "안녕하세요 리액트 수업입니다. ",
    },
    {
        name : "신사임당",
        comment : "훌륭한 사람이 되면, 지폐에도 나올수 있어요 ~~ ",
    },
    {
        name : "강감찬",
        comment : "이번주에는 props를 배웠어요",
    },
]

function CommentList() {
    return (
        <div>
            {comments.map((comment) => {
                return <Comment name={comment.name} comment = {comment.comment}/>;
            })}
        </div>
    )
}

export default CommentList;