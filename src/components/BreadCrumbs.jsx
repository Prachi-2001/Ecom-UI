import React from "react";
import { Link, useLocation } from "react-router-dom";

const BreadCrumbs = () => {
  const location = useLocation();
  const pathnames = location.pathname.split("/").filter((x) => x);

  return (
    <nav className="text-gray-500 my-4 px-2">
      <ol className="flex">
        <li className="">
          <Link to="/" className="hover:text-gray-700 hover:underline">
            Home
          </Link>
        </li>
        {pathnames.map((value, index) => {
          const last = index === pathnames.length - 1;
          const to = `/${pathnames.slice(0, index + 1).join("/")}`;
          const title = value;
          return (
            <li key={to}>
              <div className="">
                <span className="mx-2">/</span>
                {last ? (
                  <span className="text-gray-700">{title}</span>
                ) : (
                  <Link to={to} className="hover:text-gray-700 hover:underline">
                    {title}
                  </Link>
                )}
              </div>
            </li>
          );
        })}
      </ol>
    </nav>
  );
};

export default BreadCrumbs;
