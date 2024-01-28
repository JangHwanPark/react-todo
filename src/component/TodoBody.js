import React, {useRef, useState} from 'react';
import {IoAddSharp} from "react-icons/io5";
import TodoItem from "./TodoItem";

export default function TodoBody({filter}) {
    /* 유저 입력 상태 관리 */
    const [input, setInput] = useState('');

    /* 입력한 데이터(상태) 관리 */
    const [todoMenu, setTodoMenu] = useState([]);

    /* 유저 입력 받는 함수 */
    const handleInput = (e) => setInput(e.target.value);

    /* 버튼 클릭시 카운트(id) 증가 리프 */
    let count = useRef(1);

    /* 할일 추가 핸들러 */
    const handleCreateList = () => {
        const newMenu = { id: count.current, name: input, state: '전체' };
        setTodoMenu([...todoMenu, newMenu]);
        setInput('');
        count.current += 1;
    }

    /* 버튼 클릭시 할일 제거 */
    const handleRemoveList = (item) => {
        const filterItem = todoMenu.filter(data => item !== data.id);
        setTodoMenu(filterItem);
    }

    const filtered = getFilteredItems(todoMenu, filter);

    return (
        <section>
            {/* 리스트 */}
            <ul>
                {filtered.map((value, idx) => (
                    <TodoItem
                        key={idx}
                        value={value}
                        handleRemoveList={handleRemoveList}
                    />
                ))}
            </ul>
            {/* 메뉴 추가 */}
            <div className="todoMenu">
                <input value={input} onChange={handleInput}/>
                <button onClick={handleCreateList}>
                    <IoAddSharp/>
                </button>
            </div>
        </section>
    );
}

function getFilteredItems(todoMenu, filter) {
    if (filter === "전체") {
        return todoMenu;
    }

    return todoMenu.filter(todoMenu => todoMenu.state === filter);
}