import React from 'react';
import {MdDeleteOutline} from "react-icons/md";

function TodoItem({value, idx, handleRemoveList, handleUpdateList}) {
    const { name, state, id } = value;
    const handleChange = (e) => {
        const state = e.target.checked ? '완료됨' : '계획된 일정';
        handleUpdateList({...value, state});
    }

    return (
        <li key={idx}>
            <input
                id={name}
                value={name}
                type="checkbox"
                checked={state === '완료됨'}
                onChange={handleChange}
            />
            <label htmlFor={name}>{name}</label>
            <button type="button" onClick={() => handleRemoveList(id)}>
                <MdDeleteOutline/>
            </button>
        </li>
    );
}

export default TodoItem;