import React, { useState } from 'react';

const Contact = () => {
  const [showText, setShowText] = useState(false);

  const showContactText = () => {
    setTimeout(() => {
      setShowText(true);
    }, 2000);
  };

  return (
    <div name="contact">
      <div className="h-screen text-center flex justify-center items-center flex-col">
        <h1 className="text-7xl">CONTACT ME</h1>
      </div>
      {showText && <h1 class="text-4xl">SHOW ME</h1>}
      <button onClick={showContactText}>CLICK</button>
    </div>
  );
};

export default Contact;
