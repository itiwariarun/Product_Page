import React from 'react'

function Header() {
  return (
    <nav className=' bg-gray-900 shadow-3xl shadow-black  truncate  '>

            <div className='container min-w-full flex    h-12 text-slate-50 bg-gray-800 columns-6 gap-4 border border-primary pt-1 pb-3 Border opacity:-50 shadow-2xl shadow-black  '>
        
<div className = " column column-xs  w-full pl-5 h-[1.5rem]">My Cart</div>
        
<div className = " column column-lg w-full pb-1  bg-slate-50">
 <span><select className='w-[3rem]  text-sm h-[2rem] pt-1 text-slate-900 bg-yellow-700 ' name="Language" id="Language">
    <option value="volvo">All</option>
    <option value="saab">Books</option>
    <option value="opel">Clothing</option>
    <option value="audi">Mobiles</option>
    <option value="audi">Electronics</option>
    <option value="audi">Home Kitchen</option>
    <option value="audi">Computers</option>
    <option value="audi">Fashion</option>

  </select><input className='h-[2rem] w-[16rem] ' type="text" placeholder="Search Products"/>    
   <button className='w-[2rem] text-sm 'type="submit"> <p><i className = "bg-yellow-700 fa fa-search text-slate-900 w-[2rem] h-[2rem] pt-3" class=""></i></p></button>
</span>
</div>
<div className = "column column-lg  w-full pt-1 text-gray-900"><select className = "bg-yellow-700" name="country"  id="Language">
    <option value="volvo">🇮🇳</option>
    <option value="saab">🇺🇳</option>
    <option value="opel">🇦🇺</option>
    <option value="audi">🇧🇩</option>
    <option value="audi">🇨🇦</option>
   

  </select></div>
<div className = "column column-lg  w-full ">Account Settings</div>
<div className = " column column-lg w-full  ">My Orders</div>
<div className = " pr-4 ">CustomerService</div>




        
    </div>
    </nav>

  )
}

export default Header