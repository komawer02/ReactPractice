import { useState } from "react";
import Timer from "./Timer";


function ToggleTimer(){
    const [showTimer, setShowTimer] = useState(false);
    return(
        <div>
            <header>
                {showTimer&&<Timer/>}
                <button
                onClick={()=> setShowTimer(!showTimer)}>
                    토글타이머
                </button>
            </header>
        </div>
    )
}

export default ToggleTimer;