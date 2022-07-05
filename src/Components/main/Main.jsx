import { useContext } from "react";
import UserContext from "../../context/UserContext";
import Posts from "./posts/Posts";
import About from "./about/About";
import "./main.css";

const Main = ({ data, userId }) => {
  const { isLogin } = useContext(UserContext);
  return (
    <main>
      <div className="max-width">
        <h2 className="a11y-hidden">Post</h2>
        <Posts postsData={data.posts} />
        {isLogin ? <About usersData={data.users} userId={userId} /> : null}
      </div>
    </main>
  );
};

export default Main;
