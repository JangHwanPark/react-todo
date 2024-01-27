import './App.css';
import {IoAddSharp} from "react-icons/io5";
import {MdDeleteOutline} from "react-icons/md";

function App() {
    return (
        <div className="container">
            {/* 필터 */}
            <div>
                <ul>
                    <li>1</li>
                    <li>2</li>
                    <li>3</li>
                    <li>4</li>
                </ul>
            </div>
            {/* 메뉴 추가 */}
            <div>
                <input type="text"/>
                <button><IoAddSharp /></button>
            </div>
            {/* 리스트 */}
            <div>
                <input type="checkbox"/>
                <label htmlFor="">test</label>
                <button><MdDeleteOutline /></button>
            </div>
        </div>
    );
}

export default App;