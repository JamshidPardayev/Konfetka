import React from "react";
import { Arya } from "next/font/google"; // Renamed 'arya' to 'Arya' for clarity

const aryaFont = Arya({
  subsets: ["latin"],
  weight: "400",
});

const AboutPart = () => {
  return (
    <div className={aryaFont.className}>
      <div className="max-w-[1200px] mx-auto px-[15px]">
        <div className="pt-[30px] pb-[60px]">
          <h1 className="text-[42px] text-[#E2603B] max-sm:text-[32px] max-sm:text-center">
            Why you can choose us?
          </h1>
          <div className="flex gap-3 justify-between text-[#F9E0D9] max-sm:flex-col items-center mt-[20px]">
            <div className="w-[350px] min-h-[300px] border rounded-[10px] text-center content-center p-4">
              <h3 className="text-[32px] text-[#E2603B]">Confirm Order</h3>
              <p className="text-[20px]">
                Your order is accepted and assembled promptly with the highest
                quality.
              </p>
            </div>
            <div className="w-[350px] min-h-[300px] border rounded-[10px] text-center content-center p-4">
              <h3 className="text-[32px] text-[#E2603B]">
                Preparing the order.
              </h3>
              <p className="text-[20px]">
                We are preparing the order based on your preferences
              </p>
            </div>
            <div className="w-[350px] min-h-[300px] border rounded-[10px] text-center content-center p-4">
              <h3 className="text-[32px] text-[#E2603B]">Sending the order.</h3>
              <p className="text-[20px]">
                Your order is accepted and assembled promptly with the highest
                quality.
              </p>
            </div>
          </div>
        </div>
        <div className="pt-[30px] pb-[60px]">
          <h1 className="text-[42px] text-[#E2603B] max-sm:text-[32px] max-sm:text-center">
            We have the best of the best working with us
          </h1>
          <div className="flex gap-3 justify-between text-[#F9E0D9] max-sm:flex-col items-center mt-[20px]">
            <div className="w-[350px] min-h-[500px] border rounded-[10px] text-center content-center p-4">
              <img
                src="/image/images.png"
                alt="Abdusamatov Bekzod"
                className="w-[150px] h-[150px] mx-auto object-cover rounded-full mb-4"
              />
              <h3 className="text-[28px] text-[#E2603B]">Abdusamatov Bekzod</h3>
              <p className="text-[20px]">
                "Your Trusted Sales Experts for Premium Quality", "Top Sales
                Team Delivering Exceptional Products"
              </p>
            </div>
            <div className="w-[350px] min-h-[500px] border rounded-[10px] text-center content-center p-4">
            <img
                src="/image/images.png"
                alt="Abdusamatov Bekzod"
                className="w-[150px] h-[150px] mx-auto object-cover rounded-full mb-4"
              />
              <h3 className="text-[28px] text-[#E2603B]">Abdusamatov Bexruz</h3>
              <p className="text-[20px]">
                "Reliable Delivery Service for Your Satisfaction" , "Fast and
                Safe Delivery Right to Your Door"
              </p>
            </div>
            <div className="w-[350px] min-h-[500px] border rounded-[10px] text-center content-center p-4">
            <img
                src="/image/images.png"
                alt="Abdusamatov Bekzod"
                className="w-[150px] h-[150px] mx-auto object-cover rounded-full mb-4"
              />
              <h3 className="text-[28px] text-[#E2603B]">
                Abdusamatov Mustafo
              </h3>
              <p className="text-[20px]">
                "Your Trusted Sales Experts for Premium Quality" "Expert Sales
                Professionals Providing the Best Service"
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutPart;
