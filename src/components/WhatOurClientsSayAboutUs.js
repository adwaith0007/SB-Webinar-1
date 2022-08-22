import React from "react";
import aboutus1 from "../assets/WhatOurClientsSayAboutUs/aboutus1.png";
import aboutus2 from "../assets/WhatOurClientsSayAboutUs/aboutus1.png";
import aboutus3 from "../assets/WhatOurClientsSayAboutUs/aboutus1.png";
import aboutus4 from "../assets/WhatOurClientsSayAboutUs/aboutus1.png";

function WhatOurClientsSayAboutUs() {
  return (
    <div className="bg-[#ebd3c7] h-[70vh]  ">
      <div className="flex flex-col  ">
        <div className="text-[40px] flex justify-center items-center mt-10  ">
          <h1>What OurClientsSayAboutUs</h1>
        </div>
        <div className="flex flex-col justify-center items-center gap-10 mt-10 ">
          <div className="flex gap-10 ">
            <img src={aboutus1} alt=""></img>
            <img src={aboutus2} alt=""></img>
          </div>
          <div className="flex gap-10 mb-10">
            <img src={aboutus3} alt=""></img>
            <img src={aboutus4} alt=""></img>
          </div>
        </div>
      </div>
    </div>
  );
}

export default WhatOurClientsSayAboutUs;
