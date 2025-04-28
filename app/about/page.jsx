import React from 'react'
import Navbar from '../header/navbar/page'
import AboutPart from './aboutPart/page';

const About = () => {
  return (
    <div
      className="min-h-[100vh] bg-cover bg-center"
      style={{
        backgroundImage: "url('/image/about-img.png')",
        backgroundRepeat: "no-repeat",
        backgroundAttachment: "fixed",
        backgroundPosition: "center", 
      }}
    >
      <Navbar />
      <AboutPart />
    </div>
  );
};

export default About;
