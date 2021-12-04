import React from 'react';

const Project = () => {
  return (
    <div className="flex">
      <div className="w-1/2">
        <h1 className="">Project Name</h1>
        <h2>Full-Stack Application | React</h2>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat. Duis aute irure dolor in
          reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
          pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
          culpa qui officia deserunt mollit anim id est laborum.
        </p>
        <div>
          <h1>Technologies Used</h1>
          <div className="flex overflow-hidden">
            <div>TECHNOLOGYTECHNOLOGY</div>
            <div>TECHNOLOGYTECHNOLOGY</div>
            <div>TECHNOLOGYTECHNOLOGY</div>
          </div>
        </div>
      </div>
      <div className="mockup-phone">
        <div className="camera"></div>
        <div className="display">
          <div className="artboard phone-1 artboard-demo">Hi.</div>
        </div>
      </div>
    </div>
  );
};

export default Project;
