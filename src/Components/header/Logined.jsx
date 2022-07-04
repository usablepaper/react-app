import modifyIcon from "../../assets/icon-modify-white.svg";
import logOutIcon from "../../assets/icon-logout.svg";

function Logined({ user, isLogin, setIsLogin, handleIsLogin }) {
  return (
    <>
      <li className="profile-img">
        <a href="#">
          <img src={user.profileImg} alt="My Page" />
        </a>
      </li>
      <li>
        <a href="#" class="button">
          <img src={modifyIcon} alt="" />
          <span>Write</span>
        </a>
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
