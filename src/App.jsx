import './App.css';
import {IoAddSharp} from "react-icons/io5";
import {useState} from "react";

function App() {
    const [input, setInput] = useState('');
    const [todoMenu, setTodoMenu] = useState([]);

    const handleInput = (e) => {
        setInput(e.target.value);
    }

    const handleCreateList = () => {
        const newMenu = {
            name: input, state: false
        }
        setTodoMenu([...todoMenu, newMenu]);
        setInput('');
    }

    return (
        <div className="container">
            {/* 필터 */}

            {/* 메뉴 추가 */}
            <div className="todoMenu">
                <input type="text" value={input} onChange={handleInput}/>
                <button onClick={handleCreateList}><IoAddSharp /></button>
            </div>
            {/* 리스트 */}
            <p></p>
        </div>
    );
}

export default App;