import React, { useState } from 'react';
import {
  Header,
  Banner,
  Footer,
  Project,
  AboutMe,
  Contact,
} from './components/Index';
import { TransitionGroup } from 'react-transition-group';

const App = () => {
  const [showBanner, setShowBanner] = useState(true);

  const hideWelcomeBanner = () => {
    setTimeout(() => {
      setShowBanner(false);
    }, 5000);
  };

  hideWelcomeBanner();

  return (
    <div className="p-5 bg-gradient-to-b from-yellow-100 via-purple-400 to-red-100 text-black font-josefin">
      <div className="p-5">
        {!showBanner && (
          <TransitionGroup>
            <Header />
          </TransitionGroup>
        )}
        {showBanner && <Banner />}
        <AboutMe />
        <Project />
        <Contact />
        <Footer />
      </div>
    </div>
  );
};

export default App;
