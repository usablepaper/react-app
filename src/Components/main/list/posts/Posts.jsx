import React from "react";
import Post from "../post/Post";
import "./posts.css";

function Posts() {
    return (
        <ul className="posts">
            <Post />
            <Post />
            <Post />
            <Post />
            <Post />
            <Post />
        </ul>
    );
}

export default Posts;
