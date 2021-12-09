import React from 'react';
import Project from './Project';
import ProjectsBanner from './ProjectsBanner';

const Projects = () => {
  return (
    <>
      <ProjectsBanner />
      <div className="py-4">
        <Project
          title={'Unifriends'}
          subtitle={'Front-End Application | NextJS'}
          description={
            'Unifriends is a generative 3D NFT project. I was hired to create a webpage based on Figma designs. This site features a functioning countdown clock and several dynamically created React components. Styled with TailwindCSS'
          }
          siteLink={'https://www.unifriends.io/'}
          codeLink={''}
          img={'/img/unifriends.png'}
        />
      </div>

      <div className="my-4">
        <Project
          title={'Tinier Bananas'}
          subtitle={'Full-Stack Application | React & Express'}
          description={
            'Tinier Bananas is a take on the game Exquisite Corpse, a party game where you create words/images with friends. Front-End built with React, Back-End built with Express, uses Socket.IO for player communication.'
          }
          siteLink={'https://fierce-mesa-54468.herokuapp.com/'}
          codeLink={'https://github.com/NickEikenberg/project3-frontend'}
          img={'/img/tinierbananas.png'}
        />
      </div>
    </>
  );
};

export default Projects;
