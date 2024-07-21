import React from 'react'

export default function page() {
  return (
    <>

    <div className="Main flex justify-center items-center mt-32 gap-10">
    
    <div className="IntroMessage ">
    <h1>This is Massage for Everyone!
        Please Enjoy it
    </h1>

    <h3>The massage that you will never forget</h3>

    <button className='bg-black text-white'>Follow more</button>

    </div>

    <div className="Images">

    <img src="https://propelphysiotherapy.com/wp-content/uploads/2023/06/benefits-of-swedish-massage-propel-physiotherapy.jpg" alt="" className='w-80
    h-72'/>

    </div>

    </div> {/**Main Closed */}

    </>
  )
}
