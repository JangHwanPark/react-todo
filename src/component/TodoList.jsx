import React from 'react';
import {MdDeleteOutline} from "react-icons/md";
import Button from "./Button";

function TodoList({idx, item}) {
    return (
        <div key={idx} className="todoList">
            <input id={item.name} type="checkbox"/>
            <label htmlFor={item.name}>{item.name}</label>
            <Button text={<MdDeleteOutline />}/>
            <button></button>
        </div>
    );
}

export default TodoList;