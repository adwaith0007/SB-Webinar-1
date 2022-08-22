import React from 'react'
import R1 from '../assets/Register/r1.png'
import R2 from '../assets/Register/r2.png'
import R3 from '../assets/Register/r3.png'

function Register() {
  return (
    <div className='flex flex-col bg-[#16110d] text-white  h-[60vh] ' >
    <div className='text-[40px] font-bold w-full flex justify-center items-center mt-10 '  >
        <h1>Register & Claim Your Gifts</h1>
    </div>
    <div className='flex justify-center items-center gap-20 mt-20 '>
        <div>
            <div className='flex justify-center items-center' >
            <img src={R1} alt='' ></img>
            </div>

            <div>
                <p>Recording of the webinar</p>
            </div>
            
        </div>
        <div>
        <div className='flex justify-center items-center' >
            <img src={R2} alt='' ></img>
            </div>

            <div>
                <p>PPT presented by speakers in the webinar</p>
            </div>
        </div>
        <div>
        <div className='flex justify-center items-center' >
            <img src={R3} alt='' ></img>
            </div>

            <div>
                <p>Get Video Consultation for 75% Discount</p>
            </div>
        </div>
    </div>
</div>
  )
}

export default Register