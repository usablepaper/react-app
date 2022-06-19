import React from "react";
import "./post.css";
import Author from "../author/Author";
import Category from "../category/Category.jsx";
import image from "../../../../Assets/image/post-img3.jpg";

function Post() {
    return (
        <li>
            <a href="post-view.html" class="post">
                <article>
                    <img src={image} alt="" />
                    <div className="contents-wrap">
                        <Category />
                        <h3>
                            Lorem, ipsum dolor sit amet consectetur adipisicing
                            elit
                        </h3>
                        <Author />
                        <p className="post-description">
                            Lorem ipsum dolor sit amet consectetur, adipisicing
                            elit. Inventore illum nostrum perferendis voluptas,
                            voluptate soluta corrupti dolore quidem. Placeat,
                            eaque!
                        </p>
                    </div>
                </article>
            </a>
        </li>
    );
}

export default Post;
