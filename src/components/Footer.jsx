import React from "react";
import Qna from "./Qna";
import { nav, listItems } from "../assets/data";

const Footer = () => {
  return (
    <>
      <div className="flex flex-col px-[6%]">
        <div className="flex items-center justify-center">
          <div className="font-['nantes'] font-[400] text-3xl text-[#333333]">
            You may be wondering
          </div>
        </div>
        <div className="py-[5%]">
          {" "}
          <hr />
          <Qna />
        </div>
      </div>
      <div className="bg-[#595540]  text-[#FFFFFF] py-[4%] px-4 flex flex-col h-[35%] justify-between items-center">
        <div className="font-['nantes'] flex flex-col item-center justify-center font-[400] text-[45px] leading-snug tracking-normal	">
          <div> Ready to start buying</div>
        </div>

        <div className="font-['nantes'] flex flex-col item-center justify-center font-[400]  text-[45px] leading-snug tracking-normal	">
          <div>wholesale online?</div>
        </div>

        <div className="py-4">
          <ul>
            <li className="flex items-center ">
              <img
                src="./icons8-check-24.png"
                className="w-8 h-8 text-white pr-2"
                alt=""
              />
              <span>60-day payment terms</span>
            </li>
            <li className="flex items-center ">
              <img
                src="./icons8-check-24.png"
                className="w-8 h-8 text-white pr-2"
                alt=""
              />
              <span>Free returns on all opening orders</span>
            </li>
            <li className="flex items-center ">
              <img
                src="./icons8-check-24.png"
                className="w-8 h-8 text-white pr-2"
                alt=""
              />
              <span>Unique products curated for your store</span>
            </li>
          </ul>
        </div>
        <div>
          <button className="bg-white text-[#333333] px-5 py-2 sm:px-10 sm:py-3 mt-2">
            Sign up to Shop
          </button>
        </div>
      </div>
      <div className="px-[6%] py-[4%]">
        <div className="py-2">
          Discover products for your store on the Faire wholesale marketplace
        </div>
        <p>
          At Faire, we're empowering small business owners and independent
          brands to buy and sell wholesale goods online. If you're a retailer
          shopping for wholesale products, Faire offers you straight-forward
          financial terms and logistics that were previously only available to
          large retail chains. We also provide powerful sales, marketing, and
          analytics tools for brands, so sellers can simplify their wholesale
          businesses and expand their reach of independent shop owners.
        </p>
      </div>
      <hr />
      <div className="flex md:flex-row flex-col py-[4%] px-[6%] justify-between">
        <div className="flex sm:flex-row flex-col">
          {Object.keys(nav).map((section, index) => (
            <div key={index} className="flex flex-col mr-8">
              <h4 className="font-semibold mb-4">{section}</h4>
              <ul>
                {nav[section].map((link, i) => (
                  <li key={i} className="mb-2">
                    <a href="#">{link}</a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
        <div className="flex flex-col justify-between">
          <div className="font-['nantes'] text-2xl">Get the Faire app</div>
          <div>
            <p>Shop on the go, message brands, and track</p>
            <p>orders with the Faire app.</p>
          </div>
          <div className="flex items-center">
            <div>
              <a href="">
                <img
                  src="https://cdn.faire.com/static/download-badges/app-store-en.svg"
                  alt=""
                  className="w-15 h-10"
                />
              </a>
            </div>
            <div className="px-2">
              <a href="">
                <img
                  className="w-32 h-14"
                  src="	https://cdn.faire.com/static/download-badges/google-play-en.png"
                  alt=""
                />
              </a>
            </div>
          </div>
        </div>
      </div>
      <hr />
      <div className="py-[4%] px-[6%]">
        <span>&copy;2024 </span> Faire Wholesale, Inc.
        <div>
          <ul className="flex flex-wrap">
            {listItems.map((item, index) => (
              <a href={item.url} key={index}>
                <li className={index > 0 ? "list-disc ml-6" : ""}>
                  {item.text}
                </li>
              </a>
            ))}
          </ul>
        </div>
      </div>
    </>
  );
};

export default Footer;
