import React, { useState, useEffect } from 'react';

function ScrollToTop() {

  const [isVisible, setIsVisible] = useState(false);
  const toggleVisibility = () => {
    if (window.scrollY > 150) {
      setIsVisible(true);
    } else {
      setIsVisible(false);
    }
  };
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  useEffect(() => {
    window.addEventListener('scroll', toggleVisibility);
    return () => window.removeEventListener('scroll', toggleVisibility);
  }, []);

  return (
    <div>
      {isVisible && (
        <button
          onClick={scrollToTop}
          className={`fixed bottom-10 inset-x-1/2 h-7 w-7 rounded-full shadow-lg  transition duration-300 ease-in-out bg-blue-400 z-10`}> ↑ </button>
      )}
    </div>
  );
}

export default ScrollToTop;
