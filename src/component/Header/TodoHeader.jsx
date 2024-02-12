import React from 'react';
import styles from './Header.module.css'
import {MdOutlineLightMode, MdOutlineNightlight} from "react-icons/md";
import {useDarkMode} from "../../context/DarkModeContext";

export default function TodoHeader({filters, filter, onFilterChange}) {
    const {darkMode, toggleDarkMode} = useDarkMode();

    return (
        <header className={styles.header}>
            <button onClick={toggleDarkMode} className={styles.toggle}>
                {!darkMode && <MdOutlineLightMode/>}
                {darkMode && <MdOutlineNightlight/>}
            </button>
            <ul className={styles.filters}>
                {filters.map((value, idx) => (
                    <li key={idx}>
                        <button
                            className={styles.filter}
                            onClick={() => onFilterChange(value)}
                        >
                            {value}
                        </button>
                    </li>
                ))}
            </ul>
        </header>
    );
}