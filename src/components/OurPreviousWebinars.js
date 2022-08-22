import React from 'react'
import ReactPlayer from "react-player";

function OurPreviousWebinars() {
  return (
    <div className='h-[50vh] bg-white' >
        <div className='flex flex-col justify-center items-center mt-10' >
                <div className='text-[40px] text-[#ff651b] ' >
                    <h1>Our Previous Webinars</h1>
                </div>
                <div className='flex mt-20 mb-10 gap-10 ' >
                    <div>
                    <ReactPlayer
                    url="https://youtu.be/oEyRVQYyN5s"
                    width="100%"
                    height="100%"
                  />
                    </div>
                    <div>
                    <ReactPlayer
                    url="https://youtu.be/lWon2KGw2JA"
                    width="100%"
                    height="100%"
                  />
                    </div>
                    <div>
                    <ReactPlayer
                    url="https://youtu.be/uyFXcALCXC0"
                    width="100%"
                    height="100%"
                  />
                    </div>
                </div>

        </div>

    </div>
  )
}

export default OurPreviousWebinars