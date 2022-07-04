import "./banner.css";

function PostBanner({ postsData }) {
  const backgroundImage = {
    backgroundImage: `url(${postsData.mainBg})`,
    backgroundPosition: "50% 50%",
    backgroundSize: "cover",
    backgroundRepeat: "repeat",
  };

  return (
    <div className="banner" style={backgroundImage}>
      <div className="max-width">
        <div className="banner-contents">
          <p className="today"></p>
        </div>
      </div>
    </div>
  );
}

export default PostBanner;
