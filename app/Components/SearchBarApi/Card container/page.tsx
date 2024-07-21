import React from 'react'
import { Human } from '@/app/Components/SearchBarApi/page'

const page = ({ human }: {human: Human}) => {

    const {id, username, email} = human;

  return (
    <>
    
    <div className="w-56 h-64 bg-gray-400" key={id}>

    {/*<img alt={`Human ${username}`} src={`https://robohash.org/${id}?set=set4&size=180x180`}/> */} {/**Online link */}
    
    <img alt={`Human ${username}`} src={`/image/${id}.png`} className='mt-5'/> {/**Local Files */}

    <h1>{username}</h1>
    <p>{email}</p>

    </div>

    </>
  )
}
export default page;