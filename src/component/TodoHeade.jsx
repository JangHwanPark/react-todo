import React, {useState} from 'react';
import {MdOutlineLightMode, MdOutlineNightlight} from "react-icons/md";

export default function TodoHeade({filters, filter, onFilterChange}) {
    return (
        <header className='filter'>
            <div><MdOutlineLightMode/></div>
            <div><MdOutlineNightlight/></div>
            <ul>
                {filters.map((value, idx) => (
                    <li key={idx}>
                        <button onClick={() => onFilterChange(value)}>{value}</button>
                    </li>
                ))}
            </ul>
        </header>
    );
}