import PostBanner from "../components/Banner/PostBanner";
import Author from "../components/Main/author/Author";
import Category from "../components/Main/category/Category";
import ViewPost from "../components/Main/post/ViewPost";

const PostView = ({ postsData }) => {
  return (
    <>
      <PostBanner postsData={postsData} />
      <div className="view">
        <div className="max-width">
          <section className="wrap-box">
            <div className="inner">
              <Author
                created={postsData.created}
                profileImg={postsData.profileImg}
                userName={postsData.userName}
              />
              <Category category={postsData.category} />
              <ViewPost postsData={postsData} />
            </div>
          </section>
        </div>
      </div>
    </>
  );
};

export default PostView;
