import React from 'react'
import { Human } from '@/app/Components/SearchBarApi/page'
import CardContainer from  '@/app/Components/SearchBarApi/Card container/page'


const page = ({ humans }: {humans: Human[]}) => {
  return (
    <>
    
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4 ">
    
    {humans.map((eachuman) => {

        return(

            <CardContainer human={eachuman} key={eachuman.id}/>

        )

    })}
    
    </div>
    
    </>
  )
}
export default page;