import { useContext } from "react";
import { Link } from "react-router-dom";
import UserContext from "../../context/UserContext";
import modifyIcon from "../../assets/icon-modify-white.svg";
import logOutIcon from "../../assets/icon-logout.svg";

function Logined({ user }) {
  const { setIsLogin } = useContext(UserContext);
  function handleClick() {
    setIsLogin(false);
  }
  return (
    <>
      <li className="profile-img">
        <Link to=".">
          <img src={user.profileImg} alt="My Page" />
        </Link>
      </li>
      <li>
        <Link to="." className="button">
          <img src={modifyIcon} alt="Modify" />
          <span>Write</span>
        </Link>
      </li>
      <li>
        <button className="button white" onClick={handleClick}>
          <img src={logOutIcon} alt="Logout" />
          <span>Logout</span>
        </button>
      </li>
    </>
  );
}

export default Logined;
