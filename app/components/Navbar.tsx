'use client';

import { useState, useEffect } from 'react';

export default function Navbar() {
  const [isVisible, setIsVisible] = useState(true);

  useEffect(() => {
    let lastScrollY = window.scrollY;

    const controlNavbar = () => {
      const currentScrollY = window.scrollY;

      if (currentScrollY > lastScrollY && currentScrollY > 100) {
        setIsVisible(false);
      } else {
        setIsVisible(true);
      }

      lastScrollY = currentScrollY;
    };

    window.addEventListener('scroll', controlNavbar);

    return () => window.removeEventListener('scroll', controlNavbar);
  }, []);

  return (
    <div
      className={`fixed top-0 mt-4 z-50 w-full flex justify-center items-center transition-transform duration-300 ${
        isVisible ? 'translate-y-0' : '-translate-y-[100px]'
      }`}
    >
      <div className="w-3/4 bg-light-green border border-dark-green py-4 px-8 rounded-full space-x-8 flex justify-between items-center">
        <p>The Clock on Cedar</p>

        <a
          href="#menu"
          className="bg-black text-light-green py-2 px-8 rounded-full cursor-pointer"
        >
          Menu
        </a>
      </div>
    </div>
  );
}
