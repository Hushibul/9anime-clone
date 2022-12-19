import React, { useState, useContext } from "react";
import { GiHamburgerMenu } from "react-icons/gi";
import { HiSearch } from "react-icons/hi";
import { FaRandom } from "react-icons/fa";
import { RiHeartAddFill } from "react-icons/ri";
import { HiArrowNarrowRight } from "react-icons/hi";
import { ImCross } from "react-icons/im";

import logo from "../../assets/images/logos/logo.png";
import Modal from "../popper/Modal";
import { LoginContext } from "../../contexts/LoginContext";
import { Link } from "react-router-dom";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const { showModal, setShowModal } = useContext(LoginContext);
  const { loginData, setLoginData } = useContext(LoginContext);
  const { query, setQuery } = useContext(LoginContext);

  return (
    <nav className="flex bg-secondary-color py-2 items-center justify-between z-10">
      <section className="flex">
        {/* logo  */}
        <div name="logos" className="flex items-center">
          {menuOpen ? (
            <ImCross
              onClick={() => setMenuOpen(!menuOpen)}
              className="text-gray-300 text-5xl cursor-pointer px-2"
            />
          ) : (
            <GiHamburgerMenu
              onClick={() => setMenuOpen(!menuOpen)}
              className="text-gray-300 cursor-pointer text-5xl px-2"
            />
          )}
          <Link to="/">
            {" "}
            <img src={logo} alt="logo" className="w-[150px] px-2" />
          </Link>
        </div>
        {/* searchbar  */}
        <div className="hidden md:flex items-center bg-primary-color rounded-lg px-2">
          <HiSearch className=" text-gray-300 text-2xl hover:text-white" />
          <input
            type="text"
            className="text-gray-400 w-[500px] bg-primary-color px-2 py-2 placeholder:text-gray-600 placeholder:text-xs"
            placeholder="Search anime..."
            value={query}
            onChange={(e) => setQuery(e.target.value)}
          />
        </div>

        {/* sub-list  */}
        <div name="heading" className="hidden md:flex">
          <h5 className="text-sm text-gray-300 flex items-center px-2 hover:text-white">
            <Link to="watch2gather">Watch2gather</Link>
          </h5>
          <h5 className="text-sm text-gray-300 flex items-center px-2 hover:text-white">
            <FaRandom />
            Random
          </h5>
          <h5 className="text-sm text-gray-300 flex items-center px-2 hover:text-white">
            <RiHeartAddFill />
            <Link to="/donate">Donate</Link>
          </h5>
          <div className="flex rounded-md px-2 items-center">
            <h5 className="text-base text-secondary-color bg-gray-300 px-1 cursor-pointer">
              EN
            </h5>
            <h5 className="text-base text-gray-300 bg-secondary-color px-1 cursor-pointer hover:bg-purple-600">
              JP
            </h5>
          </div>
        </div>
      </section>
      {/* sign in  */}
      <div className="flex items-center mr-3">
        <HiSearch className=" text-gray-300 text-2xl hover:text-white mr-2 md:hidden" />

        {loginData !== "" ? (
          <div className="flex gap-1 items-center">
            <p className="text-white">{loginData.name}</p>
            <button
              className="flex items-center py-1 px-2 rounded text-[14px] md:px-5 md:py-1"
              onClick={() => setLoginData("")}
            >
              Logout
            </button>
          </div>
        ) : (
          <button
            className="flex items-center py-1 px-2 rounded text-[14px] md:px-5 md:py-1"
            onClick={() => setShowModal(true)}
          >
            Sign In
            <HiArrowNarrowRight className="hidden text-white mx-1 text-2xl md:block" />
          </button>
        )}
      </div>
      <Modal showModal={showModal} setShowModal={setShowModal} />

      {/* main list  */}
      <div
        className={
          menuOpen
            ? "absolute top-[68px] left-0 w-72 bg-secondary-color rounded-lg z-10 md:w-28"
            : "hidden"
        }
      >
        <ul className=" flex flex-col text-gray-400 text-base">
          <li className="py-2 w-full px-5 hover:text-gray-200 hover:bg-primary-color">
            <Link to="/"> Home</Link>
          </li>
          <li className="py-2 w-full px-5 hover:text-gray-200 hover:bg-primary-color">
            Genre
          </li>
          <li className="py-2 w-full px-5 hover:text-gray-200 hover:bg-primary-color">
            <Link to="/types"> Types</Link>
          </li>
          <li className="py-2 w-full px-5 hover:text-gray-200 hover:bg-primary-color">
            <Link to="/newest"> Newest</Link>
          </li>
          <li className="py-2 w-full px-5 hover:text-gray-200 hover:bg-primary-color">
            <Link to="/updated"> Updated</Link>
          </li>
          <li className="py-2 w-full px-5 hover:text-gray-200 hover:bg-primary-color">
            <Link to="/ongoing">Ongoing</Link>
          </li>
          <li className="py-2 w-full px-5 hover:text-gray-200 hover:bg-primary-color">
            <Link to="/added"> Added</Link>
          </li>
          <li className="py-2 w-full px-5 hover:text-gray-200 hover:bg-primary-color">
            Request
          </li>
          <li className="py-2 w-full px-5 hover:text-gray-200 hover:bg-primary-color md:hidden">
            <Link to="/watch2gather"> Watch2gather</Link>
          </li>
          <li className="py-2 w-full px-5 hover:text-gray-200 hover:bg-primary-color md:hidden">
            <Link to="/random">Random</Link>
          </li>
          <li className="py-2 w-full px-5 hover:text-gray-200 hover:bg-primary-color md:hidden">
            <Link to="/donate">Donate</Link>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
