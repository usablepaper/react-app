import { useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";
import HomePage from "./pages/homePage";
import PostView from "./pages/PostView";

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
          <Route
            path="/PostView/1"
            element={<PostView postsData={data.posts[0]} />}
          />
          <Route
            path="/PostView/2"
            element={<PostView postsData={data.posts[1]} />}
          />
          <Route
            path="/PostView/3"
            element={<PostView postsData={data.posts[2]} />}
          />
          <Route
            path="/PostView/4"
            element={<PostView postsData={data.posts[3]} />}
          />
          <Route
            path="/PostView/5"
            element={<PostView postsData={data.posts[4]} />}
          />
          <Route
            path="/PostView/6"
            element={<PostView postsData={data.posts[5]} />}
          />
        </Routes>
        <Footer />
      </BrowserRouter>
    </>
  );
}

export default App;
