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
            path="/PostView"
            element={<PostView postsData={data.posts} />}
          />
        </Routes>
        <Footer />
      </BrowserRouter>
    </>
  );
}

export default App;
