import React from 'react';
import { FaReact, FaNode, FaExternalLinkAlt } from 'react-icons/fa';
import {
  SiJavascript,
  SiTailwindcss,
  SiHtml5,
  SiCss3,
  SiMongodb,
  SiGithub,
} from 'react-icons/si';

const Project = () => {
  return (
    <div name="projects" className="flex m-16 h-screen">
      <div className="w-1/2 h-3/4 flex flex-col justify-center text-left space-y-2">
        <h1 className="text-6xl mb-8">Project Name</h1>
        <h2 className="text-3xl font-light">Full-Stack Application | React</h2>
        <div className="h-1/2">
          <p className="text-2xl font-extralight">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat. Duis aute irure dolor in
            reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
            pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
            culpa qui officia deserunt mollit anim id est laborum.
          </p>
        </div>
        <div className="flex space-x-8 h-1/2 py-10">
          <button class="btn flex space-x-2">
            <p>CODE</p>
            <SiGithub />
          </button>

          <button class="btn btn-primary space-x-2">
            <p>LIVE SITE</p>
            <FaExternalLinkAlt />
          </button>
        </div>
        <div className="bg-black rounded-lg">
          <h1 className="w-full text-white text-center text-3xl">
            Technologies Used
          </h1>
          <div className="flex overflow-hidden text-6xl justify-center py-2 space-x-4 ">
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
      <section className="flex justify-center  w-1/2">
        <div className="mockup-phone h-3/4">
          <div className="camera"></div>
          <div className="display">
            <div className="artboard phone-1 artboard-demo">
              <img src="https://i.imgur.com/voqeIDC.png" alt="Unifriends"></img>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Project;
