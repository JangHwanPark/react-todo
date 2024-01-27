import './App.css';
import {IoAddSharp} from "react-icons/io5";
import {useRef, useState} from "react";
import TodoList from "./component/TodoList";
import Button from "./component/Button";
import Input from "./component/Input";
import ListFilter from "./component/ListFilter";

function App() {
    /* 유저 입력 상태 관리 */
    const [input, setInput] = useState('');
    /* 입력한 데이터(상태) 관리 */
    const [todoMenu, setTodoMenu] = useState([]);

    /* 유저 입력 받는 함수 */
    const handleInput = (e) => {
        setInput(e.target.value);
    }

    /* 버튼 클릭시 카운트(id) 증가 리프 */
    let count = useRef(1);
    const handleCreateList = () => {
        const newMenu = {
            id: count.current,name: input, state: false
        }
        console.log(newMenu)
        setTodoMenu([...todoMenu, newMenu]);
        setInput('');
        count.current += 1;
    }

    return (
        <div className="container">
            {/* 필터 */}
            <ListFilter/>

            {/* 메뉴 추가 */}
            <div className="todoMenu">
                <Input value={input} onChange={handleInput}/>
                <Button onClick={handleCreateList} text={<IoAddSharp/>}/>
            </div>

            {/* 리스트 */}
            {todoMenu.map((item, idx) => (
                <TodoList key={idx} item={item}/>
            ))}
        </div>
    );
}

export default App;