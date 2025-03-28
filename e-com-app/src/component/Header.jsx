import React from "react";
import { Link } from "react-router-dom";
const Header = () => {
  return (
    <>
      {/* use square brackets in styling when yu want to import your style like
      color or padding in vw or vh */}

      {/* px/py=1 === 4px */}
      <header className="flex justify-between common-padding items-center bg-blue-700 ">
        <Link
          to="/"
          className="text-4xl font-extrabold text-blue-300 hover:text-violet-400 "
        >
          E-Commerc
        </Link>
        <input
          type="search"
          placeholder="Search"
          className="border-2 border-b-black hover:to-blue-500"
        ></input>
      </header>
    </>
  );
};

export default Header;
