import React from 'react'
import download from './download.jpg'
function Ad() {
  return (
      <div>
    <nav  className='  bg-gray-700 truncate object object-center  ' >

            <div className='container  bg-gray-200 min-w-full gap-0 columns-2  h-12   h-16 Border opacity:-50 shadow-2xl shadow-black  '>
        <div className='columns-3 mt-2'><div className = "   py-3  "></div>
<div className = "   text-center  py-3 bg-gray-50 ml-4 ">Timex</div><img className='h-[3rem] w-[8rem] ' src={download} alt="Titan"/></div>
<div className = "  py-4  text-gray-700 ">Timex Analog Silver Dial Unixex's Watch-TW00PR231<span className='text-amber-400 pl-4'>★★★★☆</span><span className='pl-2 text-red-700'>₹4,395</span><span className='pl-3 text-blue-700'>prime</span></div>

</div>



        </nav>
        <div className='columns-2 font-sans'>
          <div><i className="fa-solid fa-chevron-left text-gray-600 "></i>Back to results</div>
          <div className='text-right text-gray-600'>Sponsored<i className="text-gray-600 fa-solid fa-circle-info"></i></div>

          <div></div>
          </div>  
      
        </div>
  )
}

export default Ad