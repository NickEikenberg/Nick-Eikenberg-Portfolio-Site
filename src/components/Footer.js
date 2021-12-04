import React from 'react';
import { Link } from 'react-scroll';

const Footer = () => {
  return (
    <div className="">
      <div className="h-64 text-center flex justify-center items-center flex-col">
        <h1 className="text-7xl">FOOTER</h1>
        <Link to="header" smooth={true}>
          Back to Top
        </Link>
      </div>
    </div>
  );
};

export default Footer;
