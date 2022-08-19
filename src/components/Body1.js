// import Bodybg1 from "../assets/patterN2 1.png";
import Bodybgsm from "../assets/body1/mb.jpg";
import Bodybgdt from "../assets/body1/dt.jpg";
import Bodybg2 from "../assets/Group 1.png";
import foodbg from "../assets/body1/bg2.jpg";

function Body1() {
  return (
    <div className=" h-[150%] w-full      ">
      <div
        className="w-full h-[150%]  top-0 -z-10 flex flex-col bg-no-repeat bg-cover   "
        style={{ backgroundImage: `url(${foodbg})` }}
      >
        <div className="flex flex-col m-10 md:ml-20 mt-52   justify-center items-center   ">
          <div className=" text-[26px] flex flex-col justify-center items-center     top-[10%]   font-Questrial ">
            <div>
              <p className="    font-bold text-white  ">
                India’s Largest Food Consulting Platform SolutionBuggy Presents
              </p>
            </div>
            <div className="mt-2">
              <h1 className="     font-bold text-[72px] text-white  ">
              FoodPro Mega Summit - 2022
              </h1>
            </div>

            <button className="   text-[20px] md:ml-14 mt-10   font-lora bg-[#ff651b]  font-bold  rounded-3xl text-white px-10 py-4  ">
            Register Now
            </button>

            <p className="text-white" >Date: 09-08-2022, Tuesday. Time : 11:30 AM - 1:30 PM</p>


          </div>
        </div>

        <div className="w-full flex gap-9 justify-center items-center " >
          <div className="bg-[rgba(10,66,141,1)] text-white w-1/6 flex-col flex  justify-center items-center py-10 rounded-[20px] ">
            <h1 className="" >5 Days</h1>
            <p>Event</p>

          </div>
          <div className="bg-[rgba(10,66,141,1)] text-white w-1/6 flex-col flex  justify-center items-center py-10  rounded-[20px] " >

          <h1 className="" >10 Sessions</h1>
            <p>Knowledge Packed Sessions</p>

          </div>
          <div className="bg-[rgba(10,66,141,1)] text-white w-1/6 flex-col flex  justify-center items-center py-10 rounded-[20px] ">
            <h1>75+ Ideas</h1>
            <p>Food Business Ideas Discussed</p>
          </div>
          <div className="bg-[rgba(10,66,141,1)] text-white w-1/6 flex-col flex  justify-center items-center py-10 rounded-[20px] ">
            <h1>20+ Speakers</h1>
            <p>Best Speakers in Food Industry</p>
          </div>

        </div>

        <div className="flex" >
          <p>Get the Recordings of the webinar and brief market research report on alternative single use plastic business ideas</p>
          <p>Webinar will be in English, For any information related to webinar, Contact : +91 7204863338</p>
        </div>



      </div>
    </div>
  );
}

export default Body1;
