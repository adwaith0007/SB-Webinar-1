import React from 'react'
import Contact1 from '../assets/Contact/contact1.png'
import Contact2 from '../assets/Contact/contact2.png'
import Contact3 from '../assets/Contact/contact3.png'
function Contact() {
  return (
    <div className='bg-black h-[30vh] flex flex-col justify-center items-center ' >
        <div className='flex justify-center items-center gap-10  ' >
            <div className='flex flex-col justify-center items-center' >
                <img src={Contact1} alt='' ></img>
                <div className='text-white flex flex-col justify-center items-center' >
                    <h1>GENERAL QUERIES</h1>
                    <p>support@solutionbuggy.com</p>
                </div>
            </div>
            <div className='flex flex-col justify-center items-center' >
            <img src={Contact2} alt='' ></img>
            <div className='text-white flex flex-col justify-center items-center' >
                <h1>TICKET QUERIES</h1>
                <p>support@solutionbuggy.com</p>
            </div>
            </div>
            <div className='flex flex-col justify-center items-center' >
            <img src={Contact3} alt='' ></img>
            <div className='text-white flex flex-col justify-center items-center' >
                <h1 className='text-[14px]' >TALK TO US</h1>
                <p>Call : +91 7204863338</p>
                <p>Whatsapp : +91 7204863338</p>
            </div>
            </div>
        </div>
    </div>
  )
}

export default Contact