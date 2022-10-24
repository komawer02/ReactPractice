import React,{useState} from "react";
import { useRef } from "react";
import './ToDoList.css';

function ToDoList(){
    const [inputItem, setInputItem] = useState("");
    const [itemList, setItemList] = useState([
        {id: 1, value: '리액트 듣기'},
        {id: 2, value: '점심먹기'},
        {id: 3, value: '과제하기'}

    ])
    const [Btn, setBtn] = useState(true); //Btn Ui를 전환해주기위한 State변수.

    const itemRef = useRef(); //해당 item의 id값을 찾기위한 ref
    const ref = useRef();  //input focus를 하기위한 ref
    

    const AddToDoList= () =>{
        setItemList((prevItem) => {
            console.log(itemList.length + 1, inputItem);
            return[
                {
                    id:itemList.length + 1,
                    value:inputItem,
                },
                ...prevItem,
            ]
        })
        setInputItem("");
    }
    const DeleteToDoList = (id) => {
        setItemList((itemList) => itemList.filter((itemList) => itemList.id !== id))
    }
    const UpdateToDoList = () => {
        const idx = itemList.findIndex((e)=>e.id===itemRef.current)  //itemList를 하나 더 만들어서 수정하고 다시 넣어주는작업.
        let ItemList = [...itemList] 
        ItemList[idx] = {...ItemList[idx],value:inputItem} //인덱스를 통하여 itemList에서 수정하는 대상의 위치를 찾아서 수정함.
        setItemList(ItemList)
        setBtn(true); 
        setInputItem(""); 
    }
    const BtnChange = (id) => {   //Btn 변수값에 따라 화면에 나타낼 버튼을 다르게 해주는 함수.
        setBtn(false)
        itemRef.current=id;
        setInputItem(() => {     //input 안에 선택된 id 값을 가진 item.value값을 넣어줌.
            const idx = itemList.findIndex((e) => e.id === id);
            return itemList[idx].value; 
        });
        ref.current.focus();  //ref로 등록된 input을 포커스해줌.
    }

    return(
        <div className="container">
            <h1> To-Do List</h1>
            <div className="add-elements">
                <input ref={ref} id="add" value={inputItem} onChange={(event)=>setInputItem(event.target.value)} />
                {
                Btn ?
                <button id="btn" onClick={AddToDoList}>할일추가</button>
                : 
                <button id="btn" onClick={UpdateToDoList}>수정</button>
                }
            </div>
            <div id="element-list">
                <ul id="list">
                    {itemList.map((item) => {return <li key={item.id}>{item.value}
                        <img src="trash.png" onClick={()=>DeleteToDoList(item.id)} alt="trash"></img>
                        <img id="update" src="pen.png" onClick={()=>BtnChange(item.id)} alt="trash"></img>
                        </li>})}
                </ul>
            </div>
        </div>
    )
}



export default ToDoList;