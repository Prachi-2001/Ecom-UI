import React from "react";
import MegaMenu from "./MegaMenu";
import { tabs } from "../assets/data";

const Navbar = () => {
  return (
    <div>
      <div className="flex flex-col font-graphik">
        <div
          className="p-4 flex items-center justify-center"
          style={{ backgroundColor: "rgb(251, 248, 246)" }}
        >
          <div className="text-[#333333] text-sm	">
            Shop wholesale online from over 1,00,000 brands.{" "}
            <span className="cursor-pointer underline">
              <a href="/">Sign up</a>
            </span>
          </div>
        </div>

        <div className="flex justify-between w-[100%] p-4 items-center">
          <div className="flex w-[60%] justify-between mx-5">
            <img src="https://cdn.faire.com/static/logo.svg" alt="" />
            <input type="text" className="w-[80%] p-2 rounded-2xl outline" />
          </div>
          <div className="flex justify-between ml-2 w-[40%]">
            <div>EN-US</div>
            <div>|</div>
            <div>Blog</div>
            <div>Sell on Faire</div>
            <div>Sign In</div>
            <div>
              <button>Sign Up to Shop</button>
            </div>
          </div>
        </div>
        <div className="flex justify-center">
          <MegaMenu tabs={tabs} />
        </div>
      </div>
    </div>
  );
};

export default Navbar;
