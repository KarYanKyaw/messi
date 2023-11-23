import React from "react";

const ExploreBtn = () => {
  return (
    <button className="relative px-8 py-2 rounded-md bg-transparent text-blue-400 hover:text-slate-50 duration-1000 isolation-auto z-10 border-2 border-blue-400 before:absolute before:w-full before:transition-all before:duration-700 before:hover:w-full before:-left-full before:hover:left-0 before:rounded-full before:bg-blue-400 before:-z-10 before:aspect-square before:hover:scale-150 overflow-hidden before:hover:duration-700">
      More About Leo
    </button>
  );
};

export default ExploreBtn;
