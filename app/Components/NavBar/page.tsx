import React from 'react'

export default function page() {
  return (
    <>
    
   <nav className="w-full h-14 bg-gray-100 flex justify-between items-center">

    <div className="flex items-center">
    <img src="https://png.pngtree.com/png-clipart/20230824/original/pngtree-massage-logo-vector-template-picture-image_8318934.png" alt="" className='w-24 h-24'/>

    <h1>Drizzy Massage</h1>
    </div>

    <ul className='flex gap-4 mr-5'>
        <li><a href="">Home</a></li>
        <li><a href="">Book Appointment</a></li>
        <li><a href="">About us</a></li>
        <li><a href="">Contact us</a></li>
    </ul>

   </nav>

    </>
  )
}