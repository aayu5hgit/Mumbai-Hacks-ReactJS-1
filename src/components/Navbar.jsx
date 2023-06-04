import React, { useContext, useState } from "react";
import { AiOutlineMail, AiOutlineMenu, AiOutlineClose } from "react-icons/ai";
import { FaLinkedinIn, FaGithub } from "react-icons/fa";
import { BsFillPersonLinesFill } from "react-icons/bs";
import { AuthContext } from "../context/UserContext";
import Logo from "../assets/lOGO.gif"
const Navbar = () => {
  let token = localStorage.getItem("token");
  const { userAuth, setUserAuth } = useContext(AuthContext);

  const [nav, setNav] = useState(false);
  const handleNav = () => {
    setNav(!nav);
  };

  if (token) {
    setUserAuth(true);
  }

  return (
    <div className="fixed w-full h-16 shadow-xl bg-[#161b22] text-white tracking-wide mb-0  z-50">
      <div className="flex justify-between items-center w-full h-full px-7 2xl:px-16">
      <img src={Logo} className="flex flex-wrap w-14 h-14" />
        <h1 className="flex flex-wrap px-7 text-2xl sm:text-2xl md:text-2xl cursor-pointer pl-0 font-bold text-[#c9d1d9]">
           BOMBAY BULLETIN
        </h1>
        <div>
          <ul className="hidden md:flex ">
            {/* <Link href='/' className='invisible ml-10 text-md font-bold uppercase'>
                        Home
                    </Link> */}
            <a href="/home" className="hover:text-[#babbbd]">
              <li className="font-semibold ml-10 text-md cursor-pointer">
                Home
              </li>
            </a>
            <a href="/posts" className="hover:text-[#babbbd]">
              <li className="font-semibold ml-10 text-md cursor-pointer">
                Posts
              </li>
            </a>
            <a href="/blogs" className="hover:text-[#babbbd]">
              <li className="font-semibold ml-10 text-md cursor-pointer">
                Blogs
              </li>
            </a>
            <a href="/maps" className="hover:text-[#babbbd]">
              <li className="font-semibold ml-10 text-md cursor-pointer">
                Maps
              </li>
            </a>
            <a href="/chat" className="hover:text-[#babbbd]">
              <li className="font-semibold ml-10 text-md cursor-pointer">
                Chat
              </li>
            </a>
            <a href="/profile" className="hover:text-[#babbbd]">
              <li className="font-semibold ml-10 text-md cursor-pointer">
                Profile
              </li>
            </a>
            <a href="/logout" className="hover:text-[#babbbd]">
              <li className="font-semibold ml-10 text-md cursor-pointer">
                Logout
              </li>
            </a>
          </ul>
          <div onClick={handleNav} className="md:hidden">
            <AiOutlineMenu size={25} />
          </div>
        </div>
      </div>
      <div
        className={nav ? "fixed left-0 top-0 w-full h-screen bg-gray/60" : ""}
      >
        <div
          className={
            nav
              ? "fixed left-0 top-0 w-[75%] sm:w-[60%] md:w-[45%] h-screen bg-[#161B22] py-10 px-6 ease-in duration-500"
              : "hidden"
          }
        >
          <div>
            <div className="flex w-full items-center justify-between">
              <h1 className="text-4xl font-bold bg-clip-text text-white">
                Mumbai
              </h1>
              <div
                onClick={handleNav}
                className="rounded-full shadow-lg shadow-gray-400 p-3 cursor-pointer"
              >
                <AiOutlineClose size={15} />
              </div>
            </div>
            <div className="border-gray-300 my-4">
              {/* <p className="w-[100%] md:w-[90%] py-2">
                Let's build something legendary
              </p> */}
            </div>
          </div>
          <div className="mt-10">
            <ul className="uppercase font-bold">
              <a href="/home">
                <li className="py-4 text-md cursor-pointer hover:text-[#babbbd]">
                  Home
                </li>
              </a>
              <a href="/posts">
                <li className="py-4 text-md cursor-pointer hover:text-[#babbbd]">
                  Posts
                </li>
              </a>
              <a href="/">
                <li className="py-4 text-md cursor-pointer hover:text-[#babbbd]">
                  Skills
                </li>
              </a>
              <a href="/maps">
                <li className="py-4 text-md cursor-pointer hover:text-[#babbbd]">
                  Maps
                </li>
              </a>
              <a href="/profile">
                <li className="py-4 text-md cursor-pointer hover:text-[#babbbd]">
                  Profile
                </li>
              </a>
              <a href="/logout">
                <li className="py-4 text-md cursor-pointer hover:text-[#babbbd]">
                  Logout
                </li>
              </a>
            </ul>
            <div className="pt-[99%]">
              <div className="flex items-center justify-between my-4 w-full sm:w-[80%]">
                <a
                  href="https://www.linkedin.com/in/japneetrajput/"
                  className="rounded-full shadow-lg shadow-gray-400 p-3 cursor-pointer hover:scale-105 ease-in duration-300"
                >
                  <FaLinkedinIn size={18} />
                </a>
                <a
                  href="https://github.com/JapneetRajput"
                  className="rounded-full shadow-lg shadow-gray-400 p-3 cursor-pointer hover:scale-105 ease-in duration-300"
                >
                  <FaGithub size={18} />
                </a>
                <a
                  href="mailto:japneetrajput2804@gmail.com"
                  className="rounded-full shadow-lg shadow-gray-400 p-3 cursor-pointer hover:scale-105 ease-in duration-300"
                >
                  <AiOutlineMail size={18} />
                </a>
                <a
                  href="tel:+918104235686"
                  className="rounded-full shadow-lg shadow-gray-400 p-3 cursor-pointer hover:scale-105 ease-in duration-300"
                >
                  <BsFillPersonLinesFill size={18} />
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
