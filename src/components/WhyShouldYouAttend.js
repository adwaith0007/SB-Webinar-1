import React from "react";

function WhyShouldYouAttend() {
  return (
    <div className="w-full h-[55vh] bg-[#ebd3c7] flex justify-center items-center ">
      <div className="flex justify-center items-center  gap-20 ">
        <div className="bg-[#16110d] border-8 w-[284px] h-[224px]  border-[#ff651b] p-10  flex flex-col justify-center items-center ">
          <h1 className="text-[#ff651b] lg:text-[70px] text-[40px] ">WHY</h1>
          <div className="text-white text-[20px] ">
            <p>SHOULD YOU</p>
            <p>ATTEND ?</p>
          </div>
        </div>
        <div className="bg-[#16110d] p-10 text-white h-[210px] text-[18px] ">
          <p>
            1. To identify business opportunities in the food processing sector.
          </p>
          <p>2. To get a road map to start the food processing industry.</p>
          <p>3. To explore and make use of govt subsidies and bank loans.</p>
          <p>
            4. To get knowledge directly from India’s top food industry experts.
          </p>
        </div>
      </div>
    </div>
  );
}

export default WhyShouldYouAttend;
