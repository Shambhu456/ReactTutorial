//it is used when you need something to be done after render. It runs after render and every update
import React,{useState,useEffect} from 'react'

function App (){
    const[count, setCount] = useState(0)
    
    const[count1, setCount1] = useState(50)
    const handleIncrement=()=>{
        setCount(count+1)
    }
    const handleDecrement=()=>{
        setCount1(count1-1)
    }
    // UseEffect takes two parameter where first one is a function while second one is array
    useEffect(() => {//called when comp is mount , update, unmount
        console.log("Use Effect Called")
            },[count]) //After giving the value in 2nd parameter it will only run when there is change in 2nd parameter
    return(
        <>
        <h1>Count Up : {count}</h1>
        <button type="button" onClick={handleIncrement}>Increment</button>
        <h1>Count Down : {count1}</h1>
        <button type="button" onClick={handleDecrement}>Decrement</button>
        
        </>
    )
}

export default App;