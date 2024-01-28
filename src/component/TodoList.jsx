import React from 'react';
import {MdDeleteOutline} from "react-icons/md";

function TodoList({idx, item, onClick}) {

    return (
        <div key={idx} className="todoList">
            <input id={item.name} value={item.name} type="checkbox"/>
            <label htmlFor={item.name}>{item.name}</label>
            <button type="button" onClick={(e) => onClick(e, item.id)}><MdDeleteOutline/></button>
        </div>
    );
}

export default TodoList;