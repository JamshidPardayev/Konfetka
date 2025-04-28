import React from 'react'
import Navbar from '../header/navbar/page'
import ContactPart from './contactPart/page';

const Contact = () => {
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
      <ContactPart />
    </div>
  );
};

export default Contact;
