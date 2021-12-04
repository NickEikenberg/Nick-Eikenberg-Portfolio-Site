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
        <h1>ABOUT</h1>
        <Link to="projects" smooth={true}>
          PROJECTS
        </Link>
        <Link to="contact" smooth={true}>
          CONTACT
        </Link>
      </div>
    </div>
  );
};

export default Header;
