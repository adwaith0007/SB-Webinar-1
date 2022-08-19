import React from "react";
import img from "../assets/body3/wepik--202256-124419 1.png";

function Body3() {
  return (
    <div className="h-[100%]     w-full flex flex-col justify-center   items-center p-10 md:p-10 gap-10">
      <div className="w-full flex justify-center items-center">Register</div>

      <div className="flex " >
      <div className="w-full  md:w-1/2  mt-8  md:mt-0 ">
        
      </div>
      <div className="md:w-1/2  justify-center items-center flex-col flex ">
        
      </div>
      </div>

      <div>
        <form>

        <label for="name">Name:</label><br/>
  <input type="text" id="name" name="name"/><br/>
  <label for="email">Email:</label><br/>
  <input type="email" id="email" name="email"/><br/>

  <label for="phone">Phone:</label><br/>
  <input type="phone" id="phone" name="phone"/><br/>

  <input type="checkbox" id="vehicle1" name="vehicle1" value="Bike"/>
  <label for="vehicle1"> Day 1 (14th Sep) : ₹497+GST</label><br/>
  <input type="checkbox" id="vehicle2" name="vehicle2" value="Car"/>
  <label for="vehicle2"> Day 2 (15th Sep) : ₹497+GST</label><br/>
  <input type="checkbox" id="vehicle3" name="vehicle3" value="Boat"/>
  <label for="vehicle3"> Day 3 (16th Sep) : ₹497+GST</label><br/>
  <input type="checkbox" id="vehicle3" name="vehicle3" value="Boat"/>
  <label for="vehicle3"> Day 4 (17th Sep) : ₹497+GST</label><br/>
  <input type="checkbox" id="vehicle3" name="vehicle3" value="Boat"/>
  <label for="vehicle3"> Complete Event : ₹1997+GST</label><br/>
  <input type="checkbox" id="vehicle3" name="vehicle3" value="Boat"/>
  <label for="vehicle3"> 30 Mins of Video Consultation + Webinar Pass : ₹2999+GST (SB's Choice)</label><br/>

  <button type="submit" value="Submit" >Register</button>


  
  </form>
      </div>


    </div>
  );
}

export default Body3;
