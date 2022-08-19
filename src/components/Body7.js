import React from "react";
import img1 from "../assets/body7/img7-1.png";
import img2 from "../assets/body7/img7-2.png";
import img3 from "../assets/body7/img7-3.png";

function Body3() {
  return (
    <div className="h-[100%]     w-full flex flex-col justify-center   items-center p-10 md:p-10 gap-10">
      <div className="w-full flex justify-center items-center">
        <h1>Register & Claim Your Gifts</h1>
      </div>

      <div className="flex ">
        <div className="w-full  md:w-1/2  mt-8  md:mt-0 ">
          <img src={img1} ></img>
        </div>
        <div className="md:w-1/2  justify-center items-center flex-col flex ">
          <img src={img2} ></img>
        </div>

        <div className="md:w-1/2  justify-center items-center flex-col flex ">
          <img src={img3} ></img>
        </div>
      </div>
    </div>
  );
}

export default Body3;



{/* <div className=" flex flex-col  bg-black rounded-[20px]  ">
          <div className="flex justify-center text-white ">
            <div className="flex text-4xl font-bold ">
              <h1 className="text-white">Session 1 : </h1>
              <h1 className="text-[#ffd300]">
                Trendsetters in Food & Beverage Industry
              </h1>
            </div>
          </div>

          <div className="flex">
            <div className="w-full flex flex-col  md:w-1/2  mt-8  md:mt-0  justify-center items-center overflow-hidden object-cover ">
              <div className="flex  ">
                <ReactPlayer
                  url="https://vimeo.com/650990402"
                  width="100%"
                  height="100%"
                />
              </div>
            </div>
            <div className="md:w-1/2  justify-center items-center flex-col flex text-white ">
              <div>
                <p>1. Ready to Eat/Cook/Drink (RTE, RTC, RTD)</p>
                <p>2. Nutraceuticals</p>
                <p>3. Plant-based proteins and millet based foods</p>
                <p>TIME : 11:00AM to 12:30PM</p>
                <p>SPEAKERS : Sanjay Nagi, Mahendra Mehta,</p>
                <p>Abhishek Nirakhe, Shardul Dabir</p>
              </div>
            </div>
          </div>

          <div className="w-full flex justify-center items-center ">
            <button className="px-5 py-4 bg-[#ffd300] ">BOOK NOW</button>
          </div>
        </div>

        <div className=" flex flex-col  bg-black rounded-[20px]  ">
          <div className="flex justify-center text-white ">
            <div className="flex text-4xl font-bold ">
              <h1 className="text-white">Session 2 : </h1>
              <h1 className="text-[#ffd300]">Growth Drivers in FMCG</h1>
            </div>
          </div>

          <div className="flex">
            <div className="w-full flex flex-col  md:w-1/2  mt-8  md:mt-0  justify-center items-center overflow-hidden object-cover ">
              <div className="flex  ">
                <ReactPlayer
                  url="https://vimeo.com/650990402"
                  width="100%"
                  height="100%"
                />
              </div>
            </div>
            <div className="md:w-1/2  justify-center items-center flex-col flex text-white ">
              <div>
                <p>1. Personal and baby care products</p>
                <p>2. Homecare and household products</p>
                <div className="flex" >

                <p className="text-[#ffd300]">TIME</p>
                <p> : 3:00PM to 4:30PM</p>

                </div>

                <div className="flex" >

                <p className="text-[#ffd300]">SPEAKERS</p>
                <p>: Abhishek Rathi, Rajesh Mehta, Mahesh Jojin</p>

               
            </div>
          </div>

          <div className="w-full flex justify-center items-center ">
            <button className="px-5 py-4 bg-[#ffd300] ">BOOK NOW</button>
          </div>
        </div> */}