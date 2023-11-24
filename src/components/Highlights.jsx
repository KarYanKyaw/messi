import React from "react";
import { Link } from "react-router-dom";

const Highlights = () => {
  return (
    <div className="flex min-h-screen justify-center items-center">
      <Link
        className="border border-red-600 hover:opacity-90 bg-red-600 text-slate-50 px-4 py-1"
        to={"/"}
      >
        မပြီးသေးဘူး ဒီကိုနှိပ်ပြီး အိမ်ပြန်သွား
      </Link>
    </div>
  );
};

export default Highlights;
