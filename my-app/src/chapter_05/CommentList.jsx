import React from "react";
import Comment from "./Comment";

const comments = [
    {
        name: "seobin",
        comment: "Hello",
    },
    {
        name: "bang",
        comment: "World"
    }

]
    

function CommentList(props) {
    return (
        <div>
            {comments.map((comment) => {
                return(
                    <Comment name={comment.name} comment={comment.comment} />
                );
            })}
        </div>
    );
}

export default CommentList;