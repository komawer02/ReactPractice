import React,{useState, useCallback, useMemo} from "react";

function MemoTest2(){
    const[ex, setEx] = useState(0);
    const [why, setWhy] = useState(0);

    useMemo(()=>{console.log(ex)}, [ex])

    console.log(useCallback(()=> {console.log(why)}),[why])
    return (
        <div>
            <button onClick={()=>setEx((curr) => curr + 1)}>X</button> {ex}
            <button onClick={()=>setWhy((curr2) => curr2 + 1)}>Y</button> {why}
        </div>
    )
}


export default MemoTest2;