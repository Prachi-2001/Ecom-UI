import React, { useState } from "react";
import MegaMenu from "./MegaMenu";
import { tabs } from "../assets/data";
import { IoIosSearch, IoMdMenu } from "react-icons/io";
import { RxCross2 } from "react-icons/rx";

const Navbar = ({ sidebarContent }) => {
  const [sidebarOpen, setSidebarOpen] = useState(false);

  const toggleSidebar = () => {
    setSidebarOpen(!sidebarOpen);
  };

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
          <div className="flex w-[60%] justify-between items-center mx-5">
            <div className="md:hidden">
              <IoMdMenu
                size={24}
                className="text-gray-500 cursor-pointer"
                onClick={toggleSidebar}
              />
            </div>
            <img
              src="https://cdn.faire.com/static/logo.svg"
              alt=""
              className="cursor-pointer w-[80px] sm:w-[80px] md:w-[90px]"
            />
            <div className="relative md:w-[75%] sm:w-[65%] sm:block hidden">
              <input
                type="text"
                placeholder="Search products or brands"
                className="md:px-4 md:py-2 px-1  py-1 w-full rounded-full outline selection:none"
              />
              <IoIosSearch
                size={20}
                className="absolute top-0 right-3 mt-3 text-gray-400 cursor-pointer"
              />
            </div>
          </div>
          <div className="flex justify-between items-center ml-2 w-[40%]">
            <div className="hidden lg:block w-[60%]">
              <div className="flex justify-between">
                <div>EN-US</div>
                <div>|</div>
                <div>Blog</div>
                <div>Sell on Faire</div>
                <div>Sign In</div>
              </div>
            </div>
            <div></div>
            {/* Hidden on screens smaller than md */}
            <div className=" bg-black text-white px-1 py-1 sm:px-4 sm:py-2">
              <button className=" text-sm">Sign Up to Shop</button>
            </div>
          </div>
        </div>
        <div className="hidden md:block">
          {/* Show MegaMenu on medium and larger screens */}
          <div className="flex justify-center">
            <MegaMenu tabs={tabs} />
          </div>
        </div>
      </div>
      {/* Sidebar */}
      {sidebarOpen && (
        <div className="fixed inset-0 bg-gray-800 bg-opacity-75 z-50">
          <div className="flex flex-col items-start h-full w-64 bg-white shadow-lg">
            {/* Close button */}
            <button
              className="p-3 ml-auto mt-2 mr-2 rounded-md"
              onClick={toggleSidebar}
            >
              <RxCross2 />
            </button>
            {/* Sidebar content */}
            <div className="flex flex-col px-2 py-4 h-[20%] justify-between">
              <img
                src="https://cdn.faire.com/static/logo.svg"
                alt=""
                className="cursor-pointer w-[80px] py-4 sm:w-[80px] md:w-[90px]"
              />
              <div>
                <a href="" className="underline py-2">
                  Sign up to shop
                </a>
              </div>
              <div>
                <a href="" className="underline py-2">
                  Sign in
                </a>
              </div>
              <div>
                <a href="" className="underline py-2">
                  Sell on Faire
                </a>
              </div>
              <div>
                <a href="" className="underline py-2">
                  Blog
                </a>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Navbar;
