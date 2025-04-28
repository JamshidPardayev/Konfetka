import Link from "next/link";
import React from "react";
import {
  FaFacebook,
  FaInstagram,
  FaTelegram,
  FaWhatsapp,
} from "react-icons/fa";

const ContactPart = () => {
  return (
    <div className="max-w-[1200px] px-[15px] mx-auto py-[50px]">
      <div className="flex items-center justify-center max-sm:flex-col gap-4">
        <form action="" className="flex flex-col  gap-4">
      <h2 className="text-[32px] text-white ">Contacts With Us</h2>
          <input
            type="text"
            placeholder="Your Name"
            required
            className="w-[300px] h-[40px] rounded-[6px] border outline-none border-white text-[#F9E0D9] px-2"
          />
          <input
            type="email"
            placeholder="Your Email"
            required
            className="w-[300px] h-[40px] rounded-[6px] border outline-none border-white text-[#F9E0D9] px-2"
          />
          <input
            type="number"
            placeholder="Your Phone Number"
            required
            className="w-[300px] h-[40px] rounded-[6px] border outline-none border-white text-[#F9E0D9] px-2"
          />
          <button className="w-[160px] h-[50px] text-[22px] border bg-gradient-to-r from-[#E2603B] via-[#89393B] rounded-tr-[60px] text-[#F9E0D9] rounded-bl-[60px] hover:bg-[#E2603B] duration-300 cursor-pointer max-sm:mx-auto">
            Send
          </button>
        </form>
        <div className="flex flex-col gap-2 text-center">
            <h2 className="text-[32px] text-white max-sm:mt-[30px]">Our Contacts</h2>
          <div className="flex justify-center">
            <a
              className="flex items-center gap-x-2"
              href="https://t.me/JamshidPardayev"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaTelegram className="text-[24px] text-[#0088cc]" />
              <p className="text-[18px] text-[#0088cc]">Our Telegram</p>
            </a>
          </div>

          <div className="flex justify-center">
            <a
              className="flex items-center gap-x-2"
              href="https://www.instagram.com/pardayev_jamshid_official"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaInstagram className="text-[24px] text-[#E1306C]" />
              <p className="text-[18px] text-[#E1306C]">Our Instagram</p>
            </a>
          </div>
          <div className="flex justify-center">
            <a
              className="flex items-center gap-x-2"
              href="https://wa.me/998944207445" // WhatsApp havolasi
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaWhatsapp className="text-[24px] text-[#0b6b18]" />
              <p className="text-[18px] text-[#0b6b18]">Our WhatsApp</p>
            </a>
          </div>

          <div className="flex justify-center">
            <a
              className="flex items-center gap-x-2"
              href="https://www.instagram.com/pardayev_jamshid_official"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaFacebook className="text-[24px] text-[#0003c2]" />
              <p className="text-[18px] text-[#0003c2]">Our Facebook</p>
            </a>
          </div>
          <p className="text-[16px] text-[#ffffff]">Sale Manager: +998909243905</p>
          <p className="text-[16px] text-[#ffffff]">Sale Manager: +998983620527</p>
          <p className="text-[16px] text-[#ffffff]">Sale Manager: +998948811511</p>
          <div className="flex mt-10">
            <p className="text-[18px] text-[#E2603B] font-bold">
              Bizning Manzil: Qatortol Optoviy, 22 magazin Konfetka
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactPart;
