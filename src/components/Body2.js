import React from "react";
import img from '../assets/body3/wepik--202256-124419 1.png'

function Body3() {
  return (
    <div className="h-[100%]     w-full flex flex-col justify-center md:flex-row  items-center p-10 md:p-10 gap-10">
      <div className="w-full  md:w-1/2  mt-8  md:mt-0 ">
        <h1 className="font-lora  font-bold text-2xl text-center  md:text-5xl text-[#ff651b] ">
        Who Should Attend ?
        </h1>
        <p className="mt-9">
        1. Entrepreneurs looking to start the food processing industry
        </p>
        <p>2. Existing business owners looking for diversification/ expansion</p>
        <p>3. Academic and research institutes</p>
        <p>4. Traders and small business owners</p>
      </div>
      <div className="md:w-1/2  justify-center items-center flex-col flex "  > 
      <div>
      <p className="font-poppins text-xl font-semibold text-[#ff651b] " >Key Takeaways</p>
      </div>

      <div>
        <p>The event will provide complete knowledge on:</p>
        <p>1. Business opportunities in 9 different food sub-sectors</p>
        <p>2. Machinery, raw materials, and investment required.</p>
        <p>3. Emerging trends and new innovations</p>
        <p>4. Sector overview, market potential, and growth in the next 5 years</p>

      </div>
      
      

      
      </div>
    </div>
  );
}

export default Body3;
