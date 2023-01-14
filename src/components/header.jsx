import React from "react";
import { Link, Outlet } from "react-router-dom";

export const Header = () => {
  return (
    <div>
      <header className="text-gray-600 body-font">
        <div className="container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center">
          <nav className="md:ml-auto flex flex-wrap items-center text-base justify-center">
            <Link to="/" className="mr-5 hover:text-gray-900">
              Home
            </Link>
            <Link to="login/" className="mr-5 hover:text-gray-900">
              Login
            </Link>
            {/*<a className="mr-5 hover:text-gray-900">Third Link</a>*/}
            {/*<a className="mr-5 hover:text-gray-900">Fourth Link</a>*/}
          </nav>
        </div>
      </header>
      <Outlet />
    </div>
  );
};
