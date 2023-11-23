import React from "react";
import { NavLink } from "react-router-dom";

const NavBtn = ({ name, svg }) => {
  return (
    <>
      <NavLink className="group border border-slate-600 p-2 rounded-full hover:bg-slate-700 relative bg-transparent  duration-500">
        {svg}
        <div className="group-hover:opacity-100 pointer-events-none opacity-0 top-[8px] absolute z-10 inline-block px-2 py-1 text-xs text-blue-100 transition-opacity duration-500 bg-slate-600 rounded-lg shadow-sm left-[46px]">
          {name}
        </div>
      </NavLink>
    </>
  );
};

export default NavBtn;
