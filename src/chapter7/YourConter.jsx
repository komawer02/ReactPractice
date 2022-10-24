import React, {useState, useEffect} from "react";

function YourCounter(){
    const [count, setCount] = useState(0);

    const incrementCount = ()=> setCount(count + 1);
    useEffect(()=>{document.title = `You clicked ${count} times`;
console.log("useEffect함수 : " + count + "-th Click");})

    return(
        <div>
            <p>You clicked {count} times</p>
            <button onClick={incrementCount}>Click me</button>
        </div>
    )
}


export default YourCounter;