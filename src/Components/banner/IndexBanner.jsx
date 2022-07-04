import "./banner.css";

function IndexBanner({ blogData }) {
  return (
    <div class="banner">
      <div class="max-width">
        <div class="banner-contents">
          <p class="sub-text">{blogData.mainTitle}</p>
          <p class="main-text">{blogData.subTitle}</p>
          <p class="description">{blogData.description} </p>
        </div>
      </div>
    </div>
  );
}

export default IndexBanner;
