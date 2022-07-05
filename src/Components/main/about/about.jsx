import { Link } from "react-router-dom";
import "./about.css";
import Facebook from "../../../assets/Facebook.svg";
import Twitter from "../../../assets/Twitter.svg";
import Instagram from "../../../assets/Instagram.svg";
import GitHub from "../../../assets/Github.svg";

function About({ usersData, userId }) {
  const user = usersData[userId];
  const snsImages = {
    Facebook: Facebook,
    Twitter: Twitter,
    Instagram: Instagram,
    GitHub: GitHub,
  };

  return (
    <aside className="about">
      <h2>About Me</h2>
      <img src={user.profileImg} alt={user.name} className="user-profile" />
      <p className="user-name">{user.name}</p>
      <p className="user-description">{user.userInfo} </p>
      <h3>Categories</h3>
      <ul className="categories">
        {user.category.map((category, i) => {
          return (
            <li key={i}>
              <Link to="./">{category}</Link>
            </li>
          );
        })}
      </ul>
      <h3>Follow</h3>
      <ul className="sns">
        {Object.keys(user.sns).map((sns, i) => {
          return (
            <li key={i}>
              <Link to="./">
                <img src={snsImages[sns]} alt={sns} />
              </Link>
            </li>
          );
        })}
      </ul>
    </aside>
  );
}

export default About;
