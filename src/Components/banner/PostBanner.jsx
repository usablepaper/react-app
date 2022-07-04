import "./banner.css";

function PostBanner({ postsData }) {
  const backgroundImage = {
    backgroundImage: `url(${postsData.mainBg})`,
    backgroundPosition: "50% 50%",
    backgroundSize: "cover",
    backgroundRepeat: "repeat",
  };

  let day = new Date(postsData.created);

  const weekNames = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednsday",
    "Thursday",
    "Friday",
    "Saturday",
  ];

  function getWeekName(day) {
    return weekNames[day.getDay()];
  }

  const monthNames = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
  ];

  function getMonthName(day) {
    return monthNames[day.getMonth()];
  }

  return (
    <div className="banner" style={backgroundImage}>
      <div className="max-width">
        <div className="banner-contents">
          <p className="today">
            {getMonthName(day)} <em>{day.getDate() + " "}</em>
            {" " + getWeekName(day)}
          </p>
        </div>
      </div>
    </div>
  );
}

export default PostBanner;
