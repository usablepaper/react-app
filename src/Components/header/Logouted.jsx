import loginIcon from "../../assets/icon-login.svg";
import registerIcon from "../../assets/icon-register.svg";

function Logouted({ isLogin, setIsLogin, handleIsLogin }) {
  return (
    <>
      <li>
        <a href="#" className="button gray">
          <img src={loginIcon} alt="" />
          <span onClick={handleIsLogin}>Login</span>
        </a>
      </li>
      <li className="only-pc">
        <a href="#" className="button gray">
          <img src={registerIcon} alt="" />
          <span>Register</span>
        </a>
      </li>
    </>
  );
}

export default Logouted;
