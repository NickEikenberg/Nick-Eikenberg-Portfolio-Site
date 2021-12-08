import React, { useState } from 'react';
import {
  Header,
  Banner,
  Footer,
  Projects,
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
        <Projects />
        <Contact />
        <Footer />
      </div>
    </div>
  );
};

export default App;
