import React from "react"
import checked from "../assets/checked.png"
import unchecked from "../assets/unchecked.png"
import delete_icon from "../assets/delete_icon.png"


const TodoItem = ({text, id, isComp, delTodo, check}) => {
    return(
        <div className="flex items-center my-3 gap-2">
            <div onClick={()=>{check(id)}} className="flex flex-1 items-center cursor-pointer">
                <img className="w-7" src={isComp? checked : unchecked}/>
                <p className={`text-slate-700 ml-4 text-[17px] decoration-slate-500 ${isComp? "line-through": ""}`}>
                    {text}
                </p>
            </div>
            <img onClick={()=>{delTodo(id)}} className="w-3.5 cursor-pointer" src={delete_icon}/>
        </div>
    )
}

export default TodoItem