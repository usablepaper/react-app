import { useLocation } from "react-router-dom";
import PostBanner from "../components/Banner/PostBanner";
import Author from "../components/Main/author/Author";
import Category from "../components/Main/category/Category";
import ViewPost from "../components/Main/post/ViewPost";

const PostView = ({ postsData }) => {
  const location = useLocation();
  const postIndex = location.state.post;
  const postData = postsData[postIndex - 1];
  return (
    <>
      <PostBanner postsData={postData} />
      <div className="view">
        <div className="max-width">
          <section className="wrap-box">
            <div className="inner">
              <Author
                created={postData.created}
                profileImg={postData.profileImg}
                userName={postData.userName}
              />
              <Category category={postData.category} />
              <ViewPost postsData={postData} />
            </div>
          </section>
        </div>
      </div>
    </>
  );
};

export default PostView;
