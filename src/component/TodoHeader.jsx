import React from 'react';
import {MdOutlineLightMode, MdOutlineNightlight} from "react-icons/md";
import {useDarkMode} from "../context/DarkModeContext";

export default function TodoHeader({filters, filter, onFilterChange}) {
    const {darkMode, toggleDarkMode} = useDarkMode();

    return (
        <header className='filter'>
            <button onClick={toggleDarkMode}>
                {!darkMode && <MdOutlineLightMode/>}
                {darkMode && <MdOutlineNightlight/>}
            </button>
            <ul>
                {filters.map((value, idx) => (
                    <li key={idx}>
                        <button onClick={() => onFilterChange(value)}>
                            {value}
                        </button>
                    </li>
                ))}
            </ul>
        </header>
    );
}