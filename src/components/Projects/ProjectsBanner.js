import React from 'react';

const ProjectsBanner = () => {
  return (
    <div>
      <div className="h-64 mb-10 text-center flex justify-center items-center flex-col transition-opacity duration-5000 ease-in-out opacity-100">
        <div className="relative">
          <h1 className="text-7xl text-red-900 opacity-60 mr-1 ">
            MY PROJECTS
          </h1>
          <h1 className="text-7xl absolute w-full top-0 text-blue-700 opacity-70 transform translate-x-1 ease-out">
            MY PROJECTS
          </h1>
        </div>
      </div>
    </div>
  );
};

export default ProjectsBanner;
