import { Link } from "react-router-dom";
import "./viewPost.css";
import "./wrapbox.css";

function ViewPost({ postsData }) {
  return (
    <>
      <div className="title-wrap">
        <h2>{postsData.title}</h2>
        <button className="btn-like">Like</button>
      </div>
      <hr />
      <div className="view-contents">
        {postsData.contents.map((content, i) => {
          if (content.type === "p") {
            return <p key={i}>{content.text}</p>;
          } else if (content.type === "img") {
            return <img key={i} src={content.src} alt="p" />;
          }
        })}
      </div>
      <div className="btn-group">
        <a href="#" className="btn-modify">
          <span className="a11y-hidden">modify</span>
        </a>
        <button type="button" className="btn-delete">
          <span className="a11y-hidden">delete</span>
        </button>
      </div>
      <Link to="../" className="btn-back">
        <span className="a11y-hidden">Back</span>
      </Link>
    </>
  );
}

export default ViewPost;
