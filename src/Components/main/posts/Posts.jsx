import { Link } from "react-router-dom";
import React from "react";
import Post from "../post/Post";
import "./posts.css";

function Posts({ postsData }) {
  return (
    <ul className="posts">
      {postsData.map((post) => (
        <li>
          <Link to={"./PostView/" + post.id} className="post">
            <Post
              key={post.id}
              category={post.category}
              contents={post.contents}
              created={post.created}
              mainBg={post.mainBg}
              profileImg={post.profileImg}
              thumbnail={post.thumbnail}
              title={post.title}
              userName={post.userName}
            />
          </Link>
        </li>
      ))}
    </ul>
  );
}

export default Posts;
