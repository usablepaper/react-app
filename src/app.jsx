import { useState } from "react";
import { Routes, Route } from "react-router-dom";
import UserContext from "./context/UserContext";
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";
import HomePage from "./pages/homePage";
import PostPage from "./pages/PostPage";
import data from "./data.json";
import "./app.css";

function App() {
  const [userId, setUserId] = useState(0);
  const [isLogin, setIsLogin] = useState(true);
  return (
    <>
      <UserContext.Provider value={{ isLogin, setIsLogin }}>
        <Header data={data} userId={userId} setUserId={setUserId} />
        <Routes>
          <Route path="/" element={<HomePage data={data} userId={userId} />} />
          {data.posts.map((post) => {
            return (
              <Route
                key={post.id}
                path={"/PostPage/" + post.id}
                element={<PostPage postsData={post} />}
              />
            );
          })}
        </Routes>
        <Footer />
      </UserContext.Provider>
    </>
  );
}

export default App;
