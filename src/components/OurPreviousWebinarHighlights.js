import React from 'react'
import our1 from '../assets/OurPreviousWebinarHighlights/our1.jpg'
import our2 from '../assets/OurPreviousWebinarHighlights/our2.jpg'
import our3 from '../assets/OurPreviousWebinarHighlights/our3.jpg'
function OurPreviousWebinarHighlights() {
  return (
    <div className='h-[80vh]  ' >
        <div className='flex flex-col justify-center items-center  ' >
            <div className='text-[40px] text-[#ff651b] mt-10 mb-10 ' >
                <h1>Our Previous Webinar Highlights</h1>
            </div>
            <div className='flex justify-center items-center gap-20 ' >
                <div className='border-2 border-black' >

                    <img src={our1} alt='' ></img>
                </div>
                <div className='border-2 border-black ' >
                <img src={our2} alt='' ></img>
                </div>
                <div className='border-2 border-black ' >
                <img src={our3} alt='' ></img>
                </div>
            </div>
        </div>
    </div>
  )
}

export default OurPreviousWebinarHighlights