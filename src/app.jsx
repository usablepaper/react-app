import { useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";
import HomePage from "./pages/homePage";
import PostPage from "./pages/PostPage";
import data from "./data.json";
import "./app.css";

function App() {
  const [userId, setuserId] = useState(0);
  return (
    <>
      <BrowserRouter>
        <Header usersData={data.users} userId={userId} />
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
      </BrowserRouter>
    </>
  );
}

export default App;
