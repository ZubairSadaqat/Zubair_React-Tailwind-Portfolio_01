import { useState } from "react";
import { AiOutlineClose, AiOutlineMenu } from "react-icons/ai";
import logo from "../assets/name.png";

const Navbar = () => {
  const [nav, setnav] = useState(false);

  const handleNav = () => {
    setnav(!nav);
  };

  return (
    <div className="bg-black h-[100px] text-gray-400 max-w-[1200px] mx-auto flex justify-between items-center ">
      {/* <h1 className="text-3xl font-bold primary-color ml-4"> Zubair</h1> */}
      <img
        className="my-auto pt-3"
        src={logo}
        width={100}
        height={100}
        alt=""
      />
      <ul className="hidden md:flex text-md font-medium	">
        <li className="p-6 hover:text-pink-500 hover:transition-colors hover:duration-500 hover:ease-in-out">
          {" "}
          <a href="#about"> About </a>{" "}
        </li>
        <li className="p-6   hover:text-pink-500 hover:transition-colors hover:duration-500 hover:ease-in-out ">
          {" "}
          <a href="#work"> Work </a>{" "}
        </li>
        <li className="p-6   hover:text-pink-500 hover:transition-colors hover:duration-500 hover:ease-in-out">
          {" "}
          <a href="#contact"> Contact </a>{" "}
        </li>
      </ul>

      <div onClick={handleNav} className="block md:hidden cursor-pointer mr-6 ">
        {nav ? <AiOutlineClose size={20} /> : <AiOutlineMenu />}
      </div>

      <div
        className={
          nav
            ? " z-10 fixed h-full left-0 top-0 w-[60%] bg-[#202121] ease-in-out duration-500"
            : "fixed left-[-100%]"
        }
      >
        <img
          className="my-auto pt-3"
          src={logo}
          width={150}
          height={150}
          alt=""
        />

        <ul className="p-8 text-2xl">
          <li className="p-2  hover:text-pink-500 hover:transition-colors hover:duration-500 hover:ease-in-out">
            {" "}
            <a href="#about"> About </a>{" "}
          </li>
          <li className="p-2  hover:text-pink-500 hover:transition-colors hover:duration-500 hover:ease-in-out">
            {" "}
            <a href="#work"> Work </a>{" "}
          </li>
          <li className="p-2  hover:text-pink-500 hover:transition-colors hover:duration-500 hover:ease-in-out">
            {" "}
            <a href="#contact"> Contact </a>{" "}
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Navbar;
