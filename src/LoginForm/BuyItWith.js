import React from 'react'
import download1 from './download1.jpg'
import download2 from './download (1).jpg'

function BuyItWith() {
  return (
    <div className='container flex min-w-full  truncate  columns-3 m-3 '>




<div className='bg-slate-50 ml-0 w-full h-[19.5rem] '>
<div className='bg-slate-50 ml-0 w-full h-[3rem] font-bold text-2xl mt-3 ml-3'><h1>Buy It With</h1></div>
<div className='bg-slate-50 ml-0 w-full truncate h-[10rem] '><img className='w-[8rem] h-[8rem] float-left'src={download1}/><p className='float-left mt-12 mx-4 text-blue-800 text-3xl '>+</p>
<img className='h-[7rem] mt-2 w-[6rem] float-left'src={download2}/><span className='float-left ml-6'><p>Total Price:<span className='text-red-700'>₹20,492</span></p>
<button className='bg-yellow-500    border-2 border-slate-600 py-0 m-1 rounded-3xl px-4'>Add both to cart</button></span></div>
<div className='bg-slate-50 ml-0 w-full h-[6rem] '><p> <i className="text-blue-400 fa-solid fa-circle-info"></i> One of these items is dispatched sooner than the other.
<span className='text-blue-700'>Show details</span></p>

<p><input type="checkbox"/>This item: Armani Exchange Analog Black Dial Men's Watch-AX1343
<span className='text-red-600'> ₹5,997.00</span></p>

<p className='text-blue-700'><input type="checkbox"/>Armani Exchange Drexler Analog Black Dial Men's Watch - AX2601 
<span className='text-red-600'>  ₹14,495.00</span></p></div>


</div>

</div>




  )
}

export default BuyItWith