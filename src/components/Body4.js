import React from "react";
import img1 from "../assets/body4/img1.jpg"
import img2 from "../assets/body4/img2.jpeg"
import img3 from "../assets/body4/img3.png"
import img4 from "../assets/body4/img4.jpg"



function Body5() {
  return (
    <div className="h-[90%] p-5 md:p-10  ">
      <div className="w-full flex flex-col justify-center items-center">
        <h1 className="font-lora text-[#0A438D] text-2xl md:text-6xl ">
          Our Eminent Speakers
        </h1>
      </div>
      <div className=" flex flex-col md:flex-row bg-[#e2f1ff]  ">
        <div className="w-full md:w-1/2  ">
          <img src={img1} alt=''  ></img>
          <div>
            <h1>Rajkumar Mathur</h1>
            <p>30+ Yrs of Exp in Biodegradable Products, packaging and recycling </p>
          </div>
        </div>
        <div className="w-full md:w-1/2  ">
        <img src={img2} alt='' ></img>
        <h1>Purushotham Adoni</h1>
        <p>20 Yrs of Exp in compostable products</p>
        </div>
        <div className="w-full md:w-1/2  ">
        <img src={img3} alt="" ></img>
        <h1>Goutam Surana</h1>
        <p>Founder and Director of Eco 365</p>
        </div>
        <div className="w-full md:w-1/2  ">
        <img src={img4} alt="" ></img>
        <h1>Guruprasad Bangle</h1>
        <p>CTO, SolutionBuggy</p>
        </div>
      </div>

    
    </div>
  );
}

export default Body5;
