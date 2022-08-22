import React from "react";
import chamber from "../assets/Partners/chamber.jpeg";
import fooddrink from "../assets/Partners/food&drink.jpg";
import foodtech from "../assets/Partners/foodtech.jpeg";
import ifttrade from "../assets/Partners/ifttrade.jpg";
import wasme from "../assets/Partners/wasme.jpeg";
import "./Partners.css";

function Partners() {
  return (
    <div className="h-[70vh] w-full  ">
      <div id="ticker" >
        <div class="title" className="mt-20" ></div>
        <ul>
          <div className="flex gap-[0px]  ">

          <div >
          <img src={chamber} className='' ></img>
          </div>
          <div>
          <img src={fooddrink}></img>
          </div>
          
          <div>
          <img src={foodtech}></img>
          </div>
          
          <div>
          <img src={ifttrade}></img>
          </div>
          
          <div>
          <img src={wasme}></img>
          </div>

          </div>
          
          
        </ul>
      </div>
    </div>
  );
}

export default Partners;
