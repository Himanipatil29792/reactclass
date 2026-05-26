
import { use, useState } from 'react'


function App() {
  const[title, setTitle]=useState("");
  const[details, setDetails]=useState("");

  const[task,setTask]=useState([]);

  const submitHandler = (e) =>{
  //console.log("form submitted");
    e.preventDefault()
    console.log(title)
    setTitle("");

    console.log(details)
    setDetails("")
    
    const copytask=[...task]
    copytask.push({title,details})
    setTask(copytask)
    console.log(copytask)
  }

// localStorage.setItem('user','Himani')
// const user=localStorage.getItem('user')
// console.log(user)
// localStorage.removeItem('user')

// const user2={
//   username:"Himani",
//   age:19,
//   city:"Bhopal"
// }
// // localStorage.setItem('user',user2)    //	[object Object]
// //localStorage.setItem('user', JSON.stringify(user2))
// const user23=localStorage.getItem('user')
// console.log(user23)

// localStorage.removeItem('user')

 return(<div className='h-screen bg-white'>
    <form onSubmit={(e)=>{
      submitHandler(e)
    }} className='flex flex-col gap-4 justify-between p-10'>
      <input type='text' placeholder='Enter Title' value={title} onChange={(e)=>{
        //console.log(e.target.value)
        setTitle(e.target.value)
      }} className='px-5 py-2 border-2 w-1/2'/>

      <textarea placeholder='Enter Details'
      value={details} onChange={(e1)=>{
        setDetails(e1.target.value)
      }} className='px-5 py-2 border-2 w-1/2'></textarea>

      <button className='bg-black text-white px-5 py-2 rounded w-1/2'>Add Note</button>
    </form>
    <div className='h-40 bg-white border-2'>
     {task.map(function(elem,idx){
        return <div key={idx}>
          <h3>{elem.title}</h3>
          <p>{elem.details}</p>
        </div>
     })}
    </div>
 </div>)
}

export default App
