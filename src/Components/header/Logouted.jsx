import { useContext } from "react";
import { Link } from "react-router-dom";
import UserContext from "../../context/UserContext";
import loginIcon from "../../assets/icon-login.svg";
import registerIcon from "../../assets/icon-register.svg";

function Logouted({ setUserId }) {
  const { setIsLogin } = useContext(UserContext);
  function handleClick() {
    setIsLogin(true);
    setUserId(Math.floor(Math.random() * 2));
  }
  return (
    <>
      <li>
        <Link to="./" className="button gray" onClick={handleClick}>
          <img src={loginIcon} alt="Login" />
          <span>Login</span>
        </Link>
      </li>
      <li className="only-pc">
        <Link to="./" className="button gray">
          <img src={registerIcon} alt="Register" />
          <span>Register</span>
        </Link>
      </li>
    </>
  );
}

export default Logouted;
