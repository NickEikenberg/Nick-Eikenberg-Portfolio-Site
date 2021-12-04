import React from 'react';
import { Header, Banner, Footer, Project } from './components/Index';

const App = () => {
  return (
    <div className="p-5 bg-gradient-to-b from-red-200 to-purple-800 text-black">
      <div className="border-2 border-gray-800 bg-gray-300 rounded-md p-5">
        <Header />
        <h1>Hello Portfolio</h1>
        <Banner />
        <Project />
        <Footer />
      </div>
    </div>
  );
};

export default App;
