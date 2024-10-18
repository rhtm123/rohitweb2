import React, { useEffect } from 'react';

import { FaRegClock } from "react-icons/fa6";


const ScheduleMeet = ({ url = 'https://calendly.com/maurya-iitk/30min' }) => {
  useEffect(() => {
    const script = document.createElement('script');
    script.src = 'https://assets.calendly.com/assets/external/widget.js';
    script.async = true;
    document.head.appendChild(script);

    // Optionally clean up the script on component unmount
    return () => {
      document.head.removeChild(script);
    };
  }, []);

  const handleClick = () => {
    event.preventDefault(); // Prevent default anchor tag behavior
    Calendly.initPopupWidget({ url });
  };

  return (
    <>
      <link
        href="https://assets.calendly.com/assets/external/widget.css"
        rel="stylesheet"
      />
      <a 
        
        className="fixed bottom-16 right-4 md:right-8 z-50 btn btn-primary border"

      href="#" onClick={handleClick}>
        Schedule Meet
        <FaRegClock />
      </a>
    </>
  );
};

export default ScheduleMeet;
