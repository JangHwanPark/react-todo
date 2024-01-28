import React from 'react';
import {MdDeleteOutline} from "react-icons/md";

function TodoItem({value, idx, handleRemoveList}) {
    const { name, id } = value;

    return (
        <li key={idx}>
            <input id={name} value={name} type="checkbox"/>
            <label htmlFor={name}>{name}</label>
            <button type="button" onClick={() => handleRemoveList(id)}>
                <MdDeleteOutline/>
            </button>
        </li>
    );
}

export default TodoItem;