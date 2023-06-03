import "./App.css";
import { Routes, Route, Outlet, Navigate } from "react-router-dom";

// PAGES
import Login from "./pages/Login";
import Register from "./pages/Register";
import Home from "./pages/Home";
import Profile from "./pages/Profile";
import Blogs from "./pages/Blogs";
import Addblogs from "./pages/Addblogs";
import Editblogs from "./pages/Editblogs";
import Logout from "./pages/Logout";
import { useContext } from "react";
import { AuthContext } from "./context/UserContext";
import Error404 from "./pages/Error404";
import AddPost from "./pages/AddPost";
import Posts from "./pages/Posts";

const Privateroute = () => {
  const auth = localStorage.getItem("token");
  const { userAuth } = useContext(AuthContext);
  return <>{userAuth || auth ? <Outlet /> : <Navigate replace to={"/"} />}</>;
};

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route element={<Privateroute />}>
          <Route path="/home" element={<Home />} />
          <Route path="/posts" element={<Posts />} />
          <Route path="/profile" element={<Profile />} />
          <Route path="/blogs" element={<Blogs />} />
          <Route path="/blogs/add" element={<Addblogs />} />
          <Route path="/blogs/edit" element={<Editblogs />} />
          <Route path="/logout" element={<Logout />} />
          <Route path="/addPost" element={<AddPost />} />
        </Route>
        <Route path="*" element={<Error404 />} />
      </Routes>
    </div>
  );
}

export default App;
