import React from 'react';
import {MdDeleteOutline} from "react-icons/md";

function TodoList(props) {
    return (
        <div className="todoList">
            <input type="checkbox"/>
            <label htmlFor="">test</label>
            <button><MdDeleteOutline /></button>
        </div>
    );
}

export default TodoList;