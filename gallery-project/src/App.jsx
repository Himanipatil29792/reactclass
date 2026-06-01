import axios from 'axios'
import React, { useEffect, useState } from 'react'

const App = () => {

  const[userData, setUserData]=useState([]);

  const getData = async() =>{
    const response=await axios.get("https://picsum.photos/v2/list?page=3&limit=30");
    setUserData(response.data)
    console.log(response.data)
  }

  useEffect(()=>{
    getData();
  },[])

  return (
    <div> 
          {/* <button className='bg-green-200 p-5 m-2 cursor-pointer' onClick={getData}>Add Data</button> */}
          <div className='flex flex-wrap gap-5 p-5'>
            {userData.map((elem)=>
             <a href={elem.url} target='_blank'>
               <div key={elem.id} className='rounded-xl'>
                <div><img className="h-40 w-40 bg-black" src={elem.download_url} /></div>
                  <h3 className=''>{elem.author}</h3>
              </div>
             </a>
            )}
          </div>
    </div>
  )
}

export default App