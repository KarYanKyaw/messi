import React from "react";
import { Link } from "react-router-dom";

const ExploreBtn = () => {
  return (
    <Link
      to={"/stats"}
      className="relative text-center px-8 py-1 flex justify-center items-center rounded-md bg-transparent text-blue-400 hover:text-slate-50 duration-1000 isolation-auto z-10 border-2 border-blue-400 before:absolute before:w-full before:transition-all before:duration-700 before:hover:w-full before:-left-full before:hover:left-0 before:rounded-full before:bg-blue-400 before:-z-10 before:aspect-square before:hover:scale-150 overflow-hidden before:hover:duration-700"
    >
      More About Leo
    </Link>
  );
};

export default ExploreBtn;
