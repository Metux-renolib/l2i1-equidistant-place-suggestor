import React,{useEffect,useState}  from 'react'

function App(){
  const[bool,setBool]=useState(true)
  const [backenData, setBackendData]= useState([{}])
  useEffect(() =>{
    fetch("/api").then(
      response => response.json()
    ).then(
       data =>{
          setBackendData(data)
    }
    )

  },[])
  return( 
    <div>
        {(typeof backenData.users ==='undefined')?(
          <p>  Loading ..</p>
        ):(
          backenData.users.map((user,i) => (
            <p key ={i}>{user} </p>
          ))
        )}
        {bool ?<p>this is my first project </p> : <p> but dont worry am gonna improve my level </p> }

      
      <button onClick={()=>  bool ? setBool(false) : setBool(true)}> press this for a change </button>

    </div>

  )
  }
  export default App