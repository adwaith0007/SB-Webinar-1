import React from "react";
import ReactPlayer from "react-player";
import img from "../assets/body3/wepik--202256-124419 1.png";

function Body3() {
  return (
    <div className="h-[100%] bg-black     w-full flex flex-col justify-center md:flex-col  items-center p-10 md:p-10 gap-10 ">
      <div className="w-full flex justify-center">
        <h1 className="text-white text-5xl font-bold">Webinar Topics</h1>
      </div>

      <div className=" w-full bg-[#333333] flex justify-center items-center flex-col   rounded-[20px] ">
        {/* ==============================day1================================= */}
        {/* <div className="w-full mt-10 flex flex-col justify-center items-center ">
          <div className="h-2 relative bg-[#ffd300] w-[1100px] flex justify-center  ">
            <div className="flex justify-center items-center">
              <h1 className="w-[13%] absolute bg-[#ffd300] px-7 py-3 rounded-[50px] text-3xl font-bold ">
                DAY 1
              </h1>
            </div>
          </div>
        </div> */}

        {/* ========================02DEC============================ */}
        {/* <div className="absolute top-[1848px] left-[125px] ">
          <div className="w-2 relative bg-[#ffd300] h-[1020px] flex    ">
            <div className="flex justify-center items-center">
              <div className="w-[100px] h-[100px] absolute bg-[#ffd300] px-7 py-4 rounded-[50px] flex justify-center items-center " >

              <h1 className="text-3xl font-bold" >
                02 DEC
              </h1>

              </div>
              
            </div>
          </div>
        </div> */}

        {/* ================= session 1 & session 2 ========================== */}

        <div className="w-[90%] flex flex-col justify-center items-center border-l-8 border-t-8 border-[#ffd300] mt-20    ">
          {/* ==============================day1================================= */}
          <div className="w-full  flex flex-col justify-center items-center ">
            <div className="flex justify-center items-center">
              <h1 className=" absolute bg-[#ffd300] px-7 py-3 rounded-[50px] text-3xl font-bold ">
                DAY 1
              </h1>
            </div>
          </div>

          {/* ========================02DEC============================ */}
          <div className="absolute left-[120px] ">
            <div className="flex justify-center items-center">
              <div className="w-[100px] h-[100px] absolute bg-[#ffd300] px-7 py-4 rounded-[50px] flex justify-center items-center ">
                <h1 className="text-3xl font-bold">02 DEC</h1>
              </div>
            </div>
          </div>

          <div className=" flex flex-col left-0 bg-black rounded-[20px] w-[75%] py-10 mt-20 ">
            <div className="flex justify-center text-white ">
              <div className="flex w-full text-2xl gap-4 justify-center items-center font-bold mb-10 ">
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

                  <div className="flex">
                    <p className="text-[#ffd300]">TIME </p>
                    <p>: 11:00AM to 12:30PM</p>
                  </div>

                  <div className="flex">
                    <p className="text-[#ffd300]">SPEAKERS </p>
                    <p>
                      : Sanjay Nagi, Mahendra Mehta, Abhishek Nirakhe, Shardul
                      Dabir
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div className="w-full flex justify-center items-center mt-10 ">
              <button className="px-5 py-4 bg-[#ffd300] rounded-[10px] ">
                BOOK NOW
              </button>
            </div>
          </div>

          <div className=" flex flex-col  bg-black rounded-[20px] mt-20 w-[75%] py-10 mb-20 ">
            <div className="flex justify-center text-white ">
              <div className="flex w-full text-2xl gap-4 justify-center items-center font-bold mb-10">
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
                  <p>3. Cosmetics </p>

                  <div className="flex">
                    <p className="text-[#ffd300]">TIME </p>
                    <p>: 3:00PM to 4:30PM </p>
                  </div>

                  <div className="flex">
                    <p className="text-[#ffd300]">SPEAKERS </p>
                    <p>: Abhishek Rathi, Rajesh Mehta, Mahesh Jojin</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="w-full flex justify-center items-center mt-10 ">
              <button className="px-5 py-4 bg-[#ffd300] rounded-[10px] ">
                BOOK NOW
              </button>
            </div>
          </div>
        </div>
        {/* ================================================================= */}

        {/* ===================== DAY 2 ===================  */}

        {/* <div className="w-full mt-10 flex flex-col justify-center items-center ">
          <div className="h-2 relative bg-[#ffd300] w-[1100px] flex justify-center  ">
            <div className="flex justify-center items-center">
              <h1 className="w-1/7 text-3xl font-bold  absolute bg-[#ffd300] px-7 py-4 rounded-[50px]">
                DAY 2
              </h1>
            </div>
          </div>
        </div> */}

        {/* ========================03DEC============================ */}

        {/* <div className="absolute top-[2848px] right-[125px] ">
          <div className="w-2 relative bg-[#ffd300] h-[1020px] flex    ">
            <div className="flex justify-center items-center">
              <div className="w-[100px] h-[100px] absolute bg-[#ffd300] px-7 py-4 rounded-[50px] flex justify-center items-center " >

              <h1 className="text-3xl font-bold" >
                03 DEC
              </h1>

              </div>
              
            </div>
          </div>
        </div> */}

        {/* ================= session 3 & session 4 ========================== */}

        <div className="w-[90%] flex flex-col justify-center items-center border-r-8 border-t-8 border-[#ffd300]  ">
          {/* ==============================   day2  ================================= */}
          <div className="w-full  flex flex-col justify-center items-center ">
            <div className="flex w-full justify-center items-center">
              <h1 className=" absolute bg-[#ffd300] px-7 py-3 rounded-[50px] text-3xl font-bold ">
                DAY 2
              </h1>
            </div>
          </div>



          {/* ========================03DEC============================ */}


        <div className="absolute  right-[125px] ">
         
            <div className="flex justify-center items-center">
              <div className="w-[100px] h-[100px] absolute bg-[#ffd300] px-7 py-4 rounded-[50px] flex justify-center items-center " >

              <h1 className="text-3xl font-bold" >
                03 DEC
              </h1>

              </div>
              
            </div>
          
        </div>

          <div className=" flex flex-col left-0 bg-black rounded-[20px] w-[75%] py-10 mt-20 ">
            <div className="flex justify-center text-white ">
              <div className="flex w-full text-2xl gap-4 justify-center items-center font-bold mb-10  ">
                <h1 className="text-white">Session 3 : </h1>
                <h1 className="text-[#ffd300]">
                  Opportunities in Chemical Industry
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
                  <p>1. Speciality, bulk and pharma chemicals</p>
                  <p>2. Agro and food chemicals</p>
                  <p>3. Construction chemicals</p>

                  <div className="flex">
                    <p className="text-[#ffd300]">TIME </p>
                    <p>: 11:00AM to 12:30PM</p>
                  </div>

                  <div className="flex">
                    <p className="text-[#ffd300]">SPEAKERS </p>
                    <p>: Rashmi Pant, Dr. Pallavi, Dr. Anand S</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="w-full flex justify-center items-center mt-10 ">
              <button className="px-5 py-4 bg-[#ffd300] rounded-[10px] ">
                BOOK NOW
              </button>
            </div>
          </div>

          <div className=" flex flex-col  bg-black rounded-[20px] mt-20 w-[75%] py-10 mb-20 ">
            <div className="flex justify-center text-white  ">
              <div className="flex w-full text-2xl gap-4 justify-center items-center font-bold mb-10 ">
                <div>
                  <h1 className="text-white">Session 4 : </h1>
                </div>
                <div>
                  <h1 className="text-[#ffd300]">
                    Innovative Products in Eco-friendly and Sustainable Industry
                  </h1>
                </div>
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
                  <p>1. Alternatives to plastic products</p>
                  <p>2. Biodegradable bags and packaging materials</p>
                  <p>3. Zero waste and carbon neutral products </p>

                  <div className="flex">
                    <p className="text-[#ffd300]">TIME </p>
                    <p>: 3:00PM to 4:30PM </p>
                  </div>

                  <div className="flex">
                    <p className="text-[#ffd300]">SPEAKERS </p>
                    <p>: Ruchira Jacobs, Purushottham Adoni, Anup Kansal </p>
                  </div>
                </div>
              </div>
            </div>

            <div className="w-full flex justify-center items-center mt-10 ">
              <button className="px-5 py-4 bg-[#ffd300] rounded-[10px] ">
                BOOK NOW
              </button>
            </div>
          </div>
        </div>
        {/* ================================================================= */}

        {/* ===================== DAY 2 ===================  */}
        {/* 
        <div className="w-full mt-10 flex flex-col justify-center items-center ">
          <div className="h-2 relative bg-[#ffd300] w-[1100px] flex justify-center  ">
            <div className="flex justify-center items-center">
              <h1 className="w-1/7 text-3xl font-bold  absolute bg-[#ffd300] px-7 py-4 rounded-[50px]">
                DAY 3
              </h1>
            </div>
          </div>
        </div> */}

        {/* ========================03DEC============================ */}
        {/* <div className="absolute top-[3925px] left-[125px] ">
          <div className="w-2 relative bg-[#ffd300] h-[1020px] flex    ">
            <div className="flex justify-center items-center">
              <div className="w-[100px] h-[100px] absolute bg-[#ffd300] px-7 py-4 rounded-[50px] flex justify-center items-center " >

              <h1 className="text-3xl font-bold" >
                04 DEC
              </h1>

              </div>
              
            </div>
          </div>
        </div> */}

        {/* ================= session 5 & session 6 ========================== */}

        <div className=" w-[90%] flex flex-col justify-center items-center border-l-8 border-t-8 border-[#ffd300] border-b-8 mb-20  ">
          {/* ==============================   day3  ================================= */}
          <div className="w-full  flex flex-col justify-center items-center ">
            <div className="flex justify-center items-center">
              <h1 className=" absolute bg-[#ffd300] px-7 py-3 rounded-[50px] text-3xl font-bold ">
                DAY 3
              </h1>
            </div>
          </div>


          {/* ========================  04DEC  ============================ */}
          <div className="absolute left-[120px] ">
            <div className="flex justify-center items-center">
              <div className="w-[100px] h-[100px] absolute bg-[#ffd300] px-7 py-4 rounded-[50px] flex justify-center items-center ">
                <h1 className="text-3xl font-bold">04 DEC</h1>
              </div>
            </div>
          </div>

          <div className=" flex flex-col left-0 bg-black rounded-[20px] w-[75%] py-10 mt-20  ">
            <div className="flex justify-center text-white ">
              <div className="flex w-full text-2xl gap-4 justify-center items-center font-bold mb-10 ">
                <h1 className="text-white">Session 5 : </h1>
                <h1 className="text-[#ffd300]">
                  Opportunities in Chemical Industry
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
                  <p>1. Speciality, bulk and pharma chemicals</p>
                  <p>2. Agro and food chemicals</p>
                  <p>3. Construction chemicals</p>

                  <div className="flex">
                    <p className="text-[#ffd300]">TIME </p>
                    <p>: 11:00AM to 12:30PM</p>
                  </div>

                  <div className="flex">
                    <p className="text-[#ffd300]">SPEAKERS </p>
                    <p>: Rashmi Pant, Dr. Pallavi, Dr. Anand S</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="w-full flex justify-center items-center mt-10 ">
              <button className="px-5 py-4 bg-[#ffd300] rounded-[10px] ">
                BOOK NOW
              </button>
            </div>
          </div>

          <div className=" flex flex-col  bg-black rounded-[20px] mt-20 w-[75%] py-10 mb-20 ">
            <div className="flex justify-center text-white ">
              <div className="flex w-full text-2xl gap-4 justify-center items-center font-bold mb-10 ">
                <h1 className="text-white">Session 6 : </h1>
                <h1 className="text-[#ffd300]">
                  Innovative Products in Eco-friendly and Sustainable Industry
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
                  <p>1. Alternatives to plastic products</p>
                  <p>2. Biodegradable bags and packaging materials</p>
                  <p>3. Zero waste and carbon neutral products </p>

                  <div className="flex">
                    <p className="text-[#ffd300]">TIME </p>
                    <p>: 3:00PM to 4:30PM </p>
                  </div>

                  <div className="flex">
                    <p className="text-[#ffd300]">SPEAKERS </p>
                    <p>: Ruchira Jacobs, Purushottham Adoni, Anup Kansal </p>
                  </div>
                </div>
              </div>
            </div>

            <div className="w-full flex justify-center items-center mt-10 ">
              <button className="px-5 py-4 bg-[#ffd300] rounded-[10px] ">
                BOOK NOW
              </button>
            </div>
          </div>
        </div>
        {/* ================================================================= */}

        {/* ===================== DAY 3 ===================  */}

        {/* <div className="w-full mt-10 flex flex-col justify-center items-center ">
          <div className="h-2 relative bg-[#ffd300] w-[1100px] flex justify-center  ">
            <div className="flex justify-center items-center">
              <h1 className="w-1/7 text-3xl font-bold  absolute bg-[#ffd300] px-7 py-4 rounded-[50px]">
                DAY 3
              </h1>
            </div>
          </div>
        </div> */}

        {/* <div className=" flex flex-col  bg-black rounded-[20px] w-[75%] py-10 ">
          <div className="flex justify-center text-white ">
            <div className="flex text-4xl font-bold mb-10 ">
              <h1 className="text-white">Session 3 : </h1>
              <h1 className="text-[#ffd300]">
                Opportunities in Chemical Industry
              </h1>
            </div>
          </div>

          <div className="flex">
            <div className="md:w-1/2  justify-center items-center flex-col flex text-white ">
              <div>
                <p>1. Speciality, bulk and pharma chemicals</p>
                <p>2. Agro and food chemicals</p>
                <p>3. Construction chemicals</p>

                <div className="flex">
                  <p className="text-[#ffd300]">TIME </p>
                  <p>: 11:00AM to 12:30PM</p>
                </div>

                <div className="flex">
                  <p className="text-[#ffd300]">SPEAKERS </p>
                  <p>: Rashmi Pant, Dr. Pallavi, Dr. Anand S</p>
                </div>
              </div>
            </div>
            <div className="w-full flex flex-col  md:w-1/2  mt-8  md:mt-0  justify-center items-center overflow-hidden object-cover ">
              <div className="flex  ">
                <ReactPlayer
                  url="https://vimeo.com/650990402"
                  width="100%"
                  height="100%"
                />
              </div>
            </div>
          </div>

          <div className="w-full flex justify-center items-center mt-10 ">
            <button className="px-5 py-4 bg-[#ffd300] rounded-[10px] ">BOOK NOW</button>
          </div>
        </div>

        <div className=" flex flex-col  bg-black rounded-[20px] w-[75%] py-10 ">
          <div className="flex justify-center text-white ">
            <div className="flex text-4xl font-bold mb-10 ">
              <h1 className="text-white">Session 4 : </h1>
              <h1 className="text-[#ffd300]">
                Trendsetters in Food & Beverage Industry
              </h1>
            </div>
          </div>

          <div className="flex">
            <div className="md:w-1/2  justify-center items-center flex-col flex text-white ">
              <div>
                <p>1. Ready to Eat/Cook/Drink (RTE, RTC, RTD)</p>
                <p>2. Nutraceuticals</p>
                <p>3. Plant-based proteins and millet based foods</p>

                <div className="flex">
                  <p className="text-[#ffd300]">TIME </p>
                  <p>: 11:00AM to 12:30PM</p>
                </div>

                <div className="flex">
                  <p className="text-[#ffd300]">SPEAKERS </p>
                  <p>
                    : Sanjay Nagi, Mahendra Mehta, Abhishek Nirakhe, Shardul
                    Dabir
                  </p>
                </div>
              </div>
            </div>

            <div className="w-full flex flex-col  md:w-1/2  mt-8  md:mt-0  justify-center items-center overflow-hidden object-cover ">
              <div className="flex  ">
                <ReactPlayer
                  url="https://vimeo.com/650990402"
                  width="100%"
                  height="100%"
                />
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

                <div className="flex">
                  <p className="text-[#ffd300]">TIME </p>
                  <p>: 11:00AM to 12:30PM</p>
                </div>

                <div className="flex">
                  <p className="text-[#ffd300]">SPEAKERS </p>
                  <p>
                    : Sanjay Nagi, Mahendra Mehta, Abhishek Nirakhe, Shardul
                    Dabir
                  </p>
                </div>
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

                <div className="flex">
                  <p className="text-[#ffd300]">TIME </p>
                  <p>: 11:00AM to 12:30PM</p>
                </div>

                <div className="flex">
                  <p className="text-[#ffd300]">SPEAKERS </p>
                  <p>
                    : Sanjay Nagi, Mahendra Mehta, Abhishek Nirakhe, Shardul
                    Dabir
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div className="w-full flex justify-center items-center ">
            <button className="px-5 py-4 bg-[#ffd300] ">BOOK NOW</button>
          </div>
        </div> */}
      </div>
    </div>
  );
}

export default Body3;
