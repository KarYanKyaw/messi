import React from "react";
import { NavLink, useLocation } from "react-router-dom";
import { useMessi } from "../MessiContext";

const NavBtnGp = () => {
  const { navBtnData } = useMessi();

  return (
    <>
      <div className="flex gap-5 md:flex-col justify-between text-end md:items-end">
        {navBtnData.map(({ name, svg }) => {
          return (
            <NavLink
              key={name}
              to={`${
                name.toLowerCase() === "home" ? "/" : `/${name.toLowerCase()}`
              }`}
              className={`group navBtn flex justify-center items-center border w-11 h-11 border-slate-600 p-2 rounded-full hover:bg-slate-700 relative bg-transparent  duration-500`}
            >
              {svg}
              <div className="group-hover:opacity-100 pointer-events-none opacity-0 top-[8px] absolute z-10 inline-block px-2 py-1 text-xs text-blue-100 transition-opacity duration-500 bg-slate-600 rounded-lg shadow-sm left-[46px]">
                {name}
              </div>
            </NavLink>
          );
        })}
      </div>
    </>
  );
};

export default NavBtnGp;
