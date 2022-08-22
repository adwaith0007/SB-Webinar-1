import React from "react";
import ReactPlayer from "react-player";
function Testimonials() {
  return (
    <div className="h-[60vh] flex flex-col bg-[#ebd3c7]">
      <div className="flex flex-col justify-center items-center mt-10">
        <div className="text-[40px] text-[#16110d]">
          <h1>Testimonials</h1>
        </div>
        <div className="flex mt-10 gap-10 ">
          <div className="bg-white py-6">
            <div>
              <ReactPlayer
                url="https://vimeo.com/702839088"
                width="100%"
                height="100%"
              />
            </div>
            <div className="flex flex-col justify-center items-center p-5" >
              <h1>Abhinay</h1>
              <p className="text-[#ff651b]">Food Entrepreneur</p>
            </div>
          </div>

          <div className="bg-white py-6">
            <div>
              <ReactPlayer
                url="https://vimeo.com/648468362"
                width="100%"
                height="100%"
              />
            </div>
            <div className="flex flex-col justify-center items-center p-5">
                <h1>Shreyas Kumar TS</h1>
                <p className="text-[#ff651b]">CEO & Founder, Puffdrill Healthcare Pvt Ltd</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Testimonials;
