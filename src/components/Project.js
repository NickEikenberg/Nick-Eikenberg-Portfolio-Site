import React from 'react';
import { FaReact, FaNode } from 'react-icons/fa';
import {
  SiJavascript,
  SiTailwindcss,
  SiHtml5,
  SiCss3,
  SiMongodb,
} from 'react-icons/si';

const Project = () => {
  return (
    <div className="flex m-16">
      <div className="w-1/2">
        <h1 className="text-6xl">Project Name</h1>
        <h2 className="text-3xl">Full-Stack Application | React</h2>
        <div className="h-3/4">
          <p className="text-xl p-6 bg-black text-white">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat. Duis aute irure dolor in
            reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
            pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
            culpa qui officia deserunt mollit anim id est laborum.
          </p>
        </div>
        <div>
          <h1 className="w-full bg-black text-white text-center text-3xl">
            Technologies Used
          </h1>
          <div className="flex overflow-hidden text-6xl justify-center py-2 space-x-4 bg-black">
            <div>
              <SiTailwindcss className="text-icon-tailwind" />
            </div>
            <div>
              <SiJavascript className="text-icon-js" />
            </div>
            <div>
              <FaReact className="text-icon-react" />
            </div>
            <div>
              <SiHtml5 className="text-icon-html" />
            </div>
            <div>
              <SiCss3 className="text-icon-css" />
            </div>
            <div>
              <FaNode className="text-icon-node" />
            </div>
            <div>
              <SiMongodb className="text-icon-mongodb" />
            </div>
          </div>
        </div>
      </div>
      <div className="mockup-phone">
        <div className="camera"></div>
        <div className="display">
          <div className="artboard phone-1 artboard-demo">
            <img src="https://i.imgur.com/voqeIDC.png" alt="Unifriends"></img>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Project;
