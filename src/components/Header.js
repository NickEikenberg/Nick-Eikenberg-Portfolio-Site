import React from 'react';
import { Link } from 'react-scroll';

const Header = () => {
  return (
    <div
      name="header"
      className="flex justify-between transition-opacity duration-1000 ease-in-out opacity-100"
    >
      <div>
        <h1>NICHOLAS EIKENBERG</h1>
      </div>
      <div className="flex space-x-4">
        <Link to="about" smooth={true}>
          <div className="relative cursor-pointer group">
            <h1 className="text-red-600 opacity-80 transform hover:-translate-x-0.5 transition ease-in-out duration-300">
              ABOUT
            </h1>
            <h1
              className="absolute top-0 text-blue-700 opacity-80
            transform hover:translate-x-0.5 transition ease-in-out duration-300"
            >
              ABOUT
            </h1>
          </div>
        </Link>
        <Link to="projects" smooth={true}>
          <div className="relative cursor-pointer group">
            <h1 className="text-red-600 opacity-80 transform hover:-translate-x-0.5 transition ease-in-out duration-300">
              PROJECTS
            </h1>
            <h1
              className="absolute top-0 text-blue-700 opacity-80
            transform hover:translate-x-0.5 transition ease-in-out duration-300"
            >
              PROJECTS
            </h1>
          </div>
        </Link>
        <Link to="contact" smooth={true}>
          <div className="relative cursor-pointer group">
            <h1 className="text-red-600 opacity-80 transform hover:-translate-x-0.5 transition ease-in-out duration-300">
              CONTACT
            </h1>
            <h1
              className="absolute top-0 text-blue-700 opacity-80
            transform hover:translate-x-0.5 transition ease-in-out duration-300"
            >
              CONTACT
            </h1>
          </div>
        </Link>
        <Link to="/">
          <div className="relative cursor-pointer group">
            <h1 className="text-red-600 opacity-80 transform hover:-translate-x-0.5 transition ease-in-out duration-300">
              RESUME
            </h1>
            <h1
              className="absolute top-0 text-blue-700 opacity-80
            transform hover:translate-x-0.5 transition ease-in-out duration-300"
            >
              RESUME
            </h1>
          </div>
        </Link>
      </div>
    </div>
  );
};

export default Header;
