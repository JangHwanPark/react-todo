import './App.css';
import {IoAddSharp} from "react-icons/io5";
import React, {useRef, useState} from "react";
import TodoHeade from "./component/TodoHeade";
import {MdDeleteOutline} from "react-icons/md";

const filters = ['전체', '계획된 일정', '완료됨'];
function App() {
    /* 유저 입력 상태 관리 */
    const [input, setInput] = useState('');

    /* 입력한 데이터(상태) 관리 */
    const [todoMenu, setTodoMenu] = useState([]);

    /* 기본 카테고리 상태 관리 */
    const [filter, setFilter] = useState(filters[0]);

    /* 유저 입력 받는 함수 */
    const handleInput = (e) => {
        setInput(e.target.value);
    }

    /* 버튼 클릭시 카운트(id) 증가 리프 */
    let count = useRef(1);
    /* 할일 추가 핸들러 */
    const handleCreateList = () => {
        const newMenu = {
            id: count.current, name: input, state: '전체'
        }

        setTodoMenu([...todoMenu, newMenu]);
        setInput('');
        count.current += 1;
    }

    /* 버튼 클릭시 할일 제거 */
    const handleRemoveList = (item) => {
        const filterItem = todoMenu.filter(data => item !== data.id);
        setTodoMenu(filterItem);
    }

    return (
        <div className="container">
            {/* 필터 */}
            <TodoHeade filters={filters} filter={filter} onFilterChange={setFilter}/>

            {/* 메뉴 추가 */}
            <div className="todoMenu">
                <input value={input} onChange={handleInput}/>
                <button onClick={handleCreateList}><IoAddSharp/></button>
            </div>

            {/* 리스트 */}
            {todoMenu.map((item, idx) => (
                <div key={idx} className="todoList">
                    <input id={item.name} value={item.name} type="checkbox"/>
                    <label htmlFor={item.name}>{item.name}</label>
                    <button type="button" onClick={() => handleRemoveList(item.id)}><MdDeleteOutline/></button>
                </div>
            ))}
        </div>
    );
}

export default App;