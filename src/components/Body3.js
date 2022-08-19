import React from "react";
import img from "../assets/body3/wepik--202256-124419 1.png";

function Body3() {
  return (
    <div className="h-[100%]  bg-[#d8ac96]   w-full flex flex-col justify-center md:flex-row  items-center p-10 md:p-10 gap-10">
      <div className="w-full  md:w-1/2  mt-8  md:mt-0 ">
        <h1 className="font-Questrial  font-bold text-2xl text-center  md:text-5xl text-black ">
          About The Event ?
        </h1>
        <p className="mt-9">
          SolutionBuggy is organizing a mega webinar by bringing together
          India’s top food industry consultants to help entrepreneurs to
          identify potential business opportunities in the food processing
          industry. The event will be for 5 days having 10 sessions in total
          providing deep insights on various sub-sectors of the food industry.
          This is a golden opportunity for entrepreneurs and existing industries
          to get knowledge directly from industry experts.
        </p>
        <div className="w-full flex justify-center items-center  " >
        <button className="bg-[rgba(255,101,27,1)] px-10 py-4 rounded " >Know More</button>
        </div>
       
      </div>
      <div className="md:w-1/2  justify-center items-center flex-col flex ">
        <div>
          <p className="font-poppins text-xl font-semibold ">Key Takeaways</p>
        </div>

        <div>
          
        </div>
      </div>
    </div>
  );
}

export default Body3;
