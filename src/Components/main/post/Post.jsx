import "./post.css";
import Author from "../author/Author";
import Category from "../category/Category.jsx";

function Post({
  category,
  contents,
  created,
  mainBg,
  profileImg,
  thumbnail,
  title,
  userName,
}) {
  return (
    <article>
      <img src={thumbnail} alt="" />
      <div className="contents-wrap">
        <Category category={category} />
        <h3>{title}</h3>
        <Author created={created} profileImg={profileImg} userName={userName} />
        <p className="post-description">{contents[0].text}</p>
      </div>
    </article>
  );
}

export default Post;
