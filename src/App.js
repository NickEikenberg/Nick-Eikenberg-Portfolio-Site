import React from 'react';
import { Header, Banner, Footer, Project, AboutMe } from './components/Index';

const App = () => {
  return (
    <div className="p-5 bg-gradient-to-b from-yellow-100 to-purple-300 text-black">
      <div className="p-5">
        <Header />
        <Banner />
        <AboutMe />
        <Project />
        <Footer />
      </div>
    </div>
  );
};

export default App;
