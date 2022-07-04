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
      <img src={user.profileImg} alt="" className="user-profile" />
      <p className="user-name">{user.name}</p>
      <p className="user-description">{user.userInfo} </p>
      <h3>Categories</h3>
      <ul className="categories">
        {user.category.map((category, i) => {
          return (
            <li key={i}>
              <a href="#">{category}</a>
            </li>
          );
        })}
      </ul>
      <h3>Follow</h3>
      <ul className="sns">
        {Object.keys(user.sns).map((sns, i) => {
          return (
            <li key={i}>
              <a href="#">
                <img src={snsImages[sns]} alt={sns} />
              </a>
            </li>
          );
        })}
      </ul>
    </aside>
  );
}

export default About;
