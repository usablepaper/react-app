import Posts from "./posts/Posts";
import About from "./about/About";
import "./main.css";

const Main = ({ data, userId }) => {
  return (
    <main>
      <div className="max-width">
        <h2 className="a11y-hidden">Post</h2>
        <Posts postsData={data.posts} />
        <About usersData={data.users} userId={userId} />
      </div>
    </main>
  );
};

export default Main;
