"use client"
import React, { ChangeEvent } from 'react'
import { useEffect, useState } from 'react'
import { getData } from './Utils/data.utils'
import CardList from './Card-list/page'

export type Human = {

    id: string,
    username: string,
    email: string
  
  }

export default function page() {

    const[human, setHuman] = useState<Human[]>([])
    const[filtered, setFiltered] = useState(human)
    const[searchField, setsearchField] = useState('')



    useEffect(() => {

   const fetchuser = async () => {

    const fetchData = await getData<Human[]>('https://jsonplaceholder.typicode.com/users')

    setHuman(fetchData)

  }

  fetchuser();

}, [])


    useEffect(() => {

        const newFiltered = human.filter((hum) => {

            return hum.username.toLowerCase().includes(searchField)

        });

        setFiltered(newFiltered);

    }, [human, searchField])


    const onsearchChange = (event: ChangeEvent<HTMLInputElement>) => {

      console.log(event.target.value);

      const searchString = event.target.value.toLowerCase()
      setsearchField(searchString)

    }


  return (
    
    <>

    <div className="w-full h-screen bg-white p-10 flex flex-col items-center">
    
    <input type="text" className='bg-slate-500 w-64 h-12 rounded-xl border-none outline-none pl-3 text-white' onChange={onsearchChange} placeholder='Search bar'/>

    <div className="mt-5">
    <CardList humans={filtered}/>
    </div>

    </div>

    </>

  )
}
