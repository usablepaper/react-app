import PostBanner from "../components/Banner/PostBanner";
// import Category from "../components/Main/category/Category";
const PostView = ({ postsData }) => {
  return (
    <>
      <div className="view">
        <div className="max-width">
          <section className="wrap-box">
            <div className="inner">
              <PostBanner postsData={postsData} />
              {/* <Author />
              <Category />
              <Post /> */}
            </div>
          </section>
        </div>
      </div>
    </>
  );
};

export default PostView;
