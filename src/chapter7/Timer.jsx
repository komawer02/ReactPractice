import { useEffect } from "react";

const Timer = () =>{
    useEffect(()=>{
        const timerID = setInterval(()=>{
            console.log("타이머 진행중..");
        }, 1000)
        return () => {clearInterval(timerID)}
    }, []);
    return(
        <div> <span>타이머 시작.</span></div>
    )
}
export default Timer;