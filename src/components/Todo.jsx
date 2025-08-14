import React, { useEffect, useRef, useState } from "react"
import check_list from "../assets/check_list.png"
import TodoItem from "./TodoItem"

const Todo = () => {
    const [todolist, setTodoList] = useState(localStorage.getItem("todos")?JSON.parse(localStorage.getItem("todos")) : []);
    const inputRef = useRef();

    const add = () => {
        const inputText = inputRef.current.value.trim();
        if (inputText === ""){
            return null;
        }
        const newTodo = {
            id: Date.now(),
            text: inputText, 
            isComp: false,
        }
        setTodoList((previous)=>[...previous, newTodo]);
        inputRef.current.value = "";
    }

    const delTodo = (id) => {
        setTodoList((prev)=>{
            return prev.filter((todo)=>todo.id !== id)
        })
    }

    const check = (id) => {
        setTodoList((prev)=>{
            return prev.map((todo)=>{
                if(todo.id === id){
                    return {...todo, isComp:!todo.isComp}
                }
                return todo;
            })
        })
    }


useEffect(()=>{
    localStorage.setItem("todos", JSON.stringify(todolist));
    },[todolist]
)
    return(
        <div className="bg-white place-self-center w-11/12 max-w-md flex flex-col p-7 min-h-[550px] rounded-xl">

{/*----- Title -----*/}
<div className="flex items-center mt-7 gap-2">
    <img className="w-8" src={check_list}/>
    <h1 className="text-3xl font-semibold">To-Do List</h1>
</div>

{/*----- Input -----*/}
<div className="flex items-center my-7 bg-gray-200 rounded-full">
    <input ref={inputRef} className="bg-transparent border-0 outline-none flex-1 h-14 pl-6 pr-2 placeholder:text-slate-600" type="text" placeholder="Add your task"/>
    <button onClick={add} className="border-none rounded-full bg-blue-600 w-32 h-14 text-lg font-medium cursor-pointer text-white">Add</button>
</div>

{/*----- ToDo List -----*/}
<div>
    {todolist.map((item, index)=>{
        return <TodoItem key={index} text={item.text} id={item.id} isComp={item.isComp} delTodo={delTodo} check={check} />
    })}
</div>
        </div>
    )
}

export default Todo