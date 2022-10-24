import React,{useState, useEffect} from "react";
import useCounter from "./useCounter";

const MAX_CAPACITY = 10;


function Accommodate(props){
    const [isFull, setIsFull] = useState(false);

    const [count, increaseCount, decreaseCount] = useCounter(0);

    useEffect(()=> {console.log(` === 1.useEffect(f): (정원초과? ${isFull})`);})
    useEffect(()=>{console.log(`=== 2.useEffect(f,[]) mount호출됨`);
                    return() => {console.log("=== 4.useEffect(f,[]) unmount 호출됨")}}, [])
    useEffect(()=>{
        setIsFull(count>=MAX_CAPACITY);
        console.log(`===3. useEffect(f, [count]) : 입장인원 ${count}`)
    }, [count])
    

    return (
        <div style={{padding: 16}}>
            <p>{`정원 수 : 총 ${count}명 수용했습니다.`}</p>
            <button onClick={increaseCount} disabled={isFull}>입장</button>
            <button onClick={decreaseCount}>퇴장</button>
            {isFull && <p style={{color:"red"}}>정원이 가득 찼습니다.</p>}
         
        </div>

        
    )


}


export default Accommodate;