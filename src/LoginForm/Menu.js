import React from 'react'

function Menu() {
  return (
      <div>
    <nav  className='  bg-gray-900 truncate object object-center  ' >

            <div className='container-sm  min-w-full gap-4  columns-10  h-12 text-slate-50 bg-gray-700   py-3 Border opacity:-50 shadow-2xl shadow-black  '>
        
<div className = " column column-lg  w-full pl-3   ">&#8801;All</div>
<div className = " column column-lg  w-full   ">BestSellers</div>
<div className = " column column-lg  w-full   ">Mobles</div>
<div className = " column column-lg  w-full  ">Fashion</div>
<div className = " column column-lg  w-full  ">Electronics</div>
<div className = " column column-lg  w-full   ">HomeKitchen</div>
<div className = "column column-lg  w-full ">New&nbsp;Releases</div>
<div className = "column column-lg  w-full">ToysGames</div>
<div className = "column column-lg  w-full   ">Computers</div>
<div className = "column column-lg  w-full">Books</div>

</div>
</nav>
   
      </div>
  )
}

export default Menu