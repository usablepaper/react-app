import { useState } from "react";
import { Link } from "react-router-dom";
import "./header.css";
import "./button.css";
import logo from "../../assets/Logo.svg";

import Logined from "./Logined";
import Logouted from "./Logouted";

const Header = ({ usersData, userId }) => {
  const user = usersData[userId];
  const [isLogin, setIsLogin] = useState(false);
  function handleClick() {
    setIsLogin(!isLogin);
  }
  return (
    <header>
      <div className="max-width">
        <h1>
          <Link to="./">
            <img src={logo} alt="My Blog" />
          </Link>
        </h1>
        <ul>
          {isLogin ? (
            <Logined
              user={user}
              isLogin={isLogin}
              setIsLogin={setIsLogin}
              handleIsLogin={handleClick}
            />
          ) : (
            <Logouted
              isLogin={isLogin}
              setIsLogin={setIsLogin}
              handleIsLogin={handleClick}
            />
          )}
        </ul>
      </div>
    </header>
  );
};

export default Header;
