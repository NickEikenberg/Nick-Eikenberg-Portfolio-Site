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

const Project = ({ title, subtitle, description, img, siteLink, codeLink }) => {
  return (
    <div name="projects" className="flex h-screen space-x-4">
      <div className="w-1/2 h-3/4 flex flex-col justify-center text-left space-y-2">
        <h1 className="text-6xl mb-8">{title}</h1>
        <h2 className="text-3xl font-light">{subtitle}</h2>
        <div className="h-1/2">
          <p className="font-extralight">{description}</p>
        </div>
        <div className="flex space-x-8 h-1/2 py-10">
          <a
            href={codeLink}
            target="_blank"
            rel="noreferrer"
            class="btn flex space-x-2"
          >
            <p className="mt-1">CODE</p>
            <SiGithub />
          </a>

          <a
            href={siteLink}
            target="_blank"
            rel="noreferrer"
            class="btn btn-primary space-x-2"
          >
            <p className="mt-1">LIVE SITE</p>
            <FaExternalLinkAlt />
          </a>
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
              <img src={img} alt={title} className="mt-6"></img>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Project;
