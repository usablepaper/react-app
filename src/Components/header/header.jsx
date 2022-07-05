import { useContext } from "react";
import { Link } from "react-router-dom";
import "./header.css";
import "./button.css";
import logo from "../../assets/Logo.svg";
import UserContext from "../../context/UserContext";
import Logined from "./Logined";
import Logouted from "./Logouted";

const Header = ({ data, userId, setUserId }) => {
  const usersData = data.users;
  const mainTitle = data.blog.mainTitle;
  const { isLogin } = useContext(UserContext);
  const user = usersData[userId];
  return (
    <header>
      <div className="max-width">
        <h1>
          <Link to="./">
            <img src={logo} alt={mainTitle} />
          </Link>
        </h1>
        <ul>
          {isLogin ? (
            <Logined user={user} />
          ) : (
            <Logouted setUserId={setUserId} />
          )}
        </ul>
      </div>
    </header>
  );
};

export default Header;
