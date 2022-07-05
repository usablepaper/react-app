import { Link } from "react-router-dom";
import React from "react";
import Post from "../post/Post";
import "./posts.css";

function Posts({ postsData }) {
  return (
    <ul className="posts">
      {postsData.map((post) => (
        <li key={post.id}>
          <Link to={"./PostPage/" + post.id} className="post">
            <Post
              category={post.category}
              contents={post.contents}
              created={post.created}
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
