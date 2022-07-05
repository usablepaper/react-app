import { Link } from "react-router-dom";
import loginIcon from "../../assets/icon-login.svg";
import registerIcon from "../../assets/icon-register.svg";

function Logouted({ isLogin, setIsLogin, handleIsLogin }) {
  return (
    <>
      <li>
        <Link to="./" className="button gray">
          <img src={loginIcon} alt="" />
          <span onClick={handleIsLogin}>Login</span>
        </Link>
      </li>
      <li className="only-pc">
        <Link to="./" className="button gray">
          <img src={registerIcon} alt="" />
          <span>Register</span>
        </Link>
      </li>
    </>
  );
}

export default Logouted;
