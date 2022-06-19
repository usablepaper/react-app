import React from "react";
import "./author.css";
import image from "../../../../Assets/image/profile.jpg";

function Author() {
    return (
        <dl className="author-wrap">
            <dt className="a11y-hidden">Author</dt>
            <dd className="author">
                <img src={image} alt="" />
                Chilli
            </dd>
            <dt className="a11y-hidden">Created</dt>
            <dd className="created">2022.05.25</dd>
        </dl>
    );
}

export default Author;
