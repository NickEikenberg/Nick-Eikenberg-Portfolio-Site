import React from 'react';

const Banner = () => {
  return (
    <div>
      <div className="h-screen text-center flex justify-center items-center flex-col transition-opacity duration-5000 ease-in-out opacity-100">
        <div className="relative">
          <h1 className="text-7xl text-red-900 opacity-60 mr-1 ">
            NICHOLAS EIKENBERG
          </h1>
          <h1 className="text-7xl absolute w-full top-0 text-blue-700 opacity-70 transform translate-x-1 ease-out">
            NICHOLAS EIKENBERG
          </h1>
        </div>
        <div className="relative">
          <h2 className="text-4xl text-red-900 opacity-60">Web Developer</h2>
          <h2 className="text-4xl absolute ml-1 top-0 w-full text-blue-700 opacity-70">
            Web Developer
          </h2>
        </div>
      </div>
    </div>
  );
};

export default Banner;
