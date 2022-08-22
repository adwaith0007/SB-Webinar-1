import React from "react";

function Body51() {
  return (
    <div className="w-full bg-white h-[100%] flex flex-col justify-center items-center ">
      <div className="flex justify-center items-center w-full ">
        <h1 className="text-[#ff651b] text-[40px] font-Questrial ">Tickets</h1>
      </div>

      <div className="bg-[#16110d] rounded-[20px] w-[1150px] h-full flex flex-col justify-center items-center  ">
        <div className="flex gap-10 justify-center items-center mt-20 ">
          <div className=" bg-white rounded-tr-[20px]  rounded-bl-[20px]  border-4 border-[#ff651b] w-[544px]    flex flex-col justify-center  ">
            <div className="mt-10 gap-5 flex flex-col mb-10 ml-10">
              <div className="text-[#ff651b] font-Questrial text-4xl  ">
                <h1>Day Pass</h1>
              </div>

              <div className="flex text-[24px]">
                <h1>INR 297/-</h1>
                <h1 className="line-through font-normal text-[#949191] ">
                  INR 497/-
                </h1>
              </div>

              <p>✓ Access to 2 Live Sessions Over 1 Day</p>
              <p>✓ Live Q & A Session with more than 5+ Speakers</p>
              <p>✓ Life-time Access to the Recordings</p>
              <p>✓ Access for the PPT's/Collaterals shared by the Speakers</p>
              <p>✓ 1 to 1 Video Consultation with Top Expert for 45 Mins</p>
              <p>✓ Access for One Complete Project Assistance</p>
              <p>✓ Dedicated Project Team</p>
              <p>✓ Verified & right consultant for your project</p>

              <div className="flex justify-center items-center">
                <button className="bg-[#ff651b] px-7 py-4 rounded-[10px] ">
                  Buy Ticket
                </button>
              </div>
            </div>
          </div>

          <div className=" bg-white    border-4 border-[#ff651b] w-[544px] ">
            <h1>Whole Event Pass</h1>
            <h1>INR 997/-</h1>
            <p>✓ Access to 10 Live Sessions Over 5 Days</p>
            <p>✓ Live Q & A Session with more than 25+ Speakers</p>
            <p>✓ Life-time Access to the Recordings</p>
            <p>✓ Access for the PPT's/Collaterals shared by the Speakers</p>
            <p>✓ 1 to 1 Video Consultation with Top Expert for 45 Mins </p>
            <p>✓ Access for One Complete Project Assistance</p>
            <p>✓ Dedicated Project Team</p>
            <p>✓ Verified & right consultant for your project</p>

            <button className="bg-[#ff651b] rounded-[10px] ">Buy Ticket</button>
          </div>
        </div>

        {/* <div className="flex">
          <div className=" bg-white  border-4 border-[#ff651b] w-[30%]  rounded ">
            <h1>Gold Membership</h1>
            <p>Whole Event + 1 to 1 Video Consultation</p>
            <h1>INR 1997/-</h1>
            <p>✓ Access to 10 Live Sessions Over 5 Days</p>
            <p>✓ Live Q & A Session with more than 25+ Speakers</p>
            <p>✓ Life-time Access to the Recordings</p>
            <p>✓ Access for the PPT's/Collaterals shared by the Speakers</p>
            <p>✓ 1 to 1 Video Consultation with Top Expert for 45 Mins</p>
            <p>✓ Access for One Complete Project Assistance</p>
            <p>✓ Dedicated Project Team</p>
            <p>✓ Verified & right consultant for your project</p>

            <button className="bg-[#ff651b] rounded-[10px] ">Buy Ticket</button>
          </div> */}

        {/* <div className=" bg-white  w-[30%]   border-4 border-[#ff651b] ">
            <h1>Platinum Membership</h1>
            <p>Whole Event + 1 to 1 Video Consultation + SB Membership</p>
            <h1>INR 9997/-</h1>
            <p>✓ Access to 10 Live Sessions Over 5 Days</p>
            <p>✓ Live Q & A Session with more than 25+ Speakers</p>
            <p>✓ Life-time Access to the Recordings</p>
            <p>✓ Access for the PPT's/Collaterals shared by the Speakers</p>
            <p>✓ 1 to 1 Video Consultation with Top Expert for 45 Mins </p>
            <p>✓ Access for One Complete Project Assistance</p>
            <p>✓ Dedicated Project Team</p>
            <p>✓ Verified & right consultant for your project</p>

            <button className="bg-[#ff651b] rounded-[10px] ">Buy Ticket</button>
        </div>
          </div> */}
      </div>
    </div>
  );
}

export default Body51;
