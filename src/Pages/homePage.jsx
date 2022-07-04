import IndexBanner from "../components/Banner/IndexBanner";
import Main from "../components/Main/Main";
const HomePage = ({ data, userId }) => {
  return (
    <>
      <IndexBanner blogData={data.blog} />
      <Main data={data} userId={userId} />
    </>
  );
};

export default HomePage;
