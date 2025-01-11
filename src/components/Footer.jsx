import React from 'react'
import { Link } from 'react-router-dom'

const Footer = () => {
  return (
    <div id='footer' style={{height:'350px'}} className='bg-black w-full text-white p-4 '>
     <div className='flex justify-between p-4'>
      <div style={{width:'480px'}} className='mb-4'>
      <h5 className='font-bold mb-3'>
      <i class="fa-solid fa-heart-pulse text-red-600 text-xl"></i>
            &nbsp; HealthCart
            </h5>
            <p>Designed and built with all the love in the world by the Media team with the help of our contributors.</p>
            <p>Code licensed MIT, docs CC BY 3.0.</p>
            <p>Currently v5.3.3.</p>
      </div>
     {/* brands */}
      <div style={{width:'480px'}} className='flex flex-col ms-5 gap-3'>
       <h5 className='mb-4 font-bold'>Brands</h5>
       <a href='https://www.muscleblaze.com/?utm_source=msn&utm_medium=cpc&utm_campaign=_MB_B|MUSCLEBLAZE_CT|SEARCH-BRAND_SC|ALL_AUD|NULL_CHANNEL|BING_28018&msclkid=7e5e804525511cd6ed31e7c76c14541c&utm_term=MuscleBlaze&utm_content=_MB_B%7CMUSCLEBLAZE_CT%7CSEARCH_MT%7CALL_SC%7CGENERIC_AUD%7CNULL' target='blank' >MuscleBlaze</a>
       <a href='https://fitfoodsforlife.com/?srsltid=AfmBOopnLJkgZPZ7w9I2pX1raZnwQKz3oEny2KsAxyGiOa-k2W4EvKRz' target='blank'>Fit Foods</a>
       <Link >HK Vitals</Link>
       <Link >TrueBasics</Link>
      
      </div>

      {/* Guides */}
      <div style={{width:'480px'}} className='flex flex-col gap-3'>
      <h5 className='mb-4 font-bold'>Health & Fitness</h5>
       <a href='' >Hair & Skin Care</a>
       <a href=''>Sports Nutrition</a>
       <a href='' >Vitamins & Supplements</a>
       <a href='' >Ayurveda & Herbs</a>
      </div>
      <div style={{width:'280px'}}>
        <h5 className='mb-4'>Contact Us</h5>
        <div className='flex gap-4 mb-4'>
          <input className='rounded h-8' type="text" placeholder='Enter Your Email' />
          <button className='bg-white text-violet-600 w-10 rounded'><i class="fa-solid fa-arrow-right"></i></button>
        </div>
        <div className='flex justify-between mt-5'>
          <a href=""><i class="fa-brands fa-github"></i></a>
          <a href=""><i class="fa-brands fa-twitter"></i></a>
          <a href=""><i class="fa-brands fa-facebook"></i></a>
          <a href=""><i class="fa-brands fa-instagram"></i></a>
        </div>
      </div>

     </div>
    </div>
  )
}

export default Footer