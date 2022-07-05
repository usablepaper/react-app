import { Link } from "react-router-dom";
import modifyIcon from "../../assets/icon-modify-white.svg";
import logOutIcon from "../../assets/icon-logout.svg";

function Logined({ user, isLogin, setIsLogin, handleIsLogin }) {
  return (
    <>
      <li className="profile-img">
        <Link to="./">
          <img src={user.profileImg} alt="My Page" />
        </Link>
      </li>
      <li>
        <Link to="./" className="button">
          <img src={modifyIcon} alt="" />
          <span>Write</span>
        </Link>
      </li>
      <li>
        <button className="button white" onClick={handleIsLogin}>
          <img src={logOutIcon} alt="" />
          <span>Logout</span>
        </button>
      </li>
    </>
  );
}

export default Logined;
