import React, { useState } from 'react';
import {
  Header,
  Banner,
  Footer,
  Project,
  AboutMe,
  Contact,
} from './components/Index';

const App = () => {
  return (
    <div className="p-5 bg-gradient-to-b from-yellow-100 via-purple-400 to-red-100 text-black font-josefin">
      <div className="p-5">
        <Header />
        <Banner />
        <AboutMe />
        <Project />
        <Contact />
        <Footer />
      </div>
    </div>
  );
};

export default App;
