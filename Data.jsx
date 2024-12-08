import React, { useEffect, useState } from 'react'

function Data() {
    let [data,setData]=useState([])
    useEffect(()=>{
        fetch('https://api.github.com/users/octocat')
        .then(res=>res.json())
        .then(data =>setData(data))
    },[])
  return (
    <div className='bg-gray-500 text-white text-3xl p-4 text-center'>
        <h1>{data.location}</h1>
        <img src={data.avatar_url} alt='' style={{marginLeft:"30%"}}/>
      
    </div>
  )
}

export default Data
