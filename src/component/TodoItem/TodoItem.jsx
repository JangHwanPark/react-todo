import React from 'react';
import styles from './TodoItem.module.css';
import {MdDeleteOutline} from "react-icons/md";

function TodoItem({value, idx, handleRemoveList, handleUpdateList}) {
    const { name, state, id } = value;
    const handleChange = (e) => {
        const state = e.target.checked ? '완료됨' : '계획된 일정';
        handleUpdateList({...value, state});
    }

    return (
        <li key={idx} className={styles.todo}>
            <input
                className={styles.checkbox}
                id={name}
                value={name}
                type="checkbox"
                checked={state === '완료됨'}
                onChange={handleChange}
            />
            <label htmlFor={name} className={styles.text}>
                {name}
            </label>
            <button type="button" onClick={() => handleRemoveList(id)} className={styles.button}>
                <MdDeleteOutline/>
            </button>
        </li>
    );
}

export default TodoItem;