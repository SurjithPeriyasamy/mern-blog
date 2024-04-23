import { FaMoon } from "react-icons/fa";
import { IoSearchSharp, IoSunny } from "react-icons/io5";
import SearchBar from "./SearchBar";
import { RxHamburgerMenu } from "react-icons/rx";
import { useState } from "react";
import NavList from "./NavList";
import { IoMdClose } from "react-icons/io";
import Logo from "./Logo";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <div className="flex bg-white top-0 fixed w-full justify-between items-center py-2 px-5 border-b-4">
      <div className="lg:text-xl text-base ">
        <Logo />
      </div>
      <div className="w-1/6 sm:inline hidden">
        <SearchBar />
      </div>
      <div className="sm:hidden border border-gray-500  py-2 px-3 rounded-lg bg-gray-200">
        <IoSearchSharp />
      </div>
      <ul className="flex justify-between w-1/5 max-lg:hidden">
        <NavList />
      </ul>
      <div className="flex items-center justify-around gap-2">
        <div className="border lg:text-base text-xs border-gray-400 rounded-xl px-4 py-2">
          <FaMoon className="" />
          {/* <IoSunny size={10} className="text-yellow-500" /> */}
        </div>
        <button className="bg-gradient-to-tr from-cyan-600 to-purple-600 max-md:p-1 md:h-10 md:w-20 rounded-lg">
          <span className="bg-white md:py-[7px] md:px-3 px-[7px] py-[3px]  rounded-md hover:bg-transparent hover:text-white font-medium transition-colors duration-150">
            Sign In
          </span>
        </button>
        <div
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          className={
            (isMenuOpen ? "rotate-90" : "rotate-0") +
            " lg:hidden text-2xl duration-150 cursor-pointer"
          }
        >
          {!isMenuOpen ? <RxHamburgerMenu /> : <IoMdClose />}
        </div>
      </div>
      <div
        className={
          (isMenuOpen ? "right-0" : "-right-full") +
          " absolute duration-150 lg:hidden flex flex-col items-center p-5 space-y-3 top-14 w-full  bg-white list-none"
        }
      >
        <NavList />
      </div>
    </div>
  );
};
export default Header;
