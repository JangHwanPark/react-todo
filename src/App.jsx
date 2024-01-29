import './App.css';
import React, {useState} from "react";
import TodoBody from "./component/TodoBody";
import TodoHeader from "./component/TodoHeader";
import {DarkModeProvider} from "./context/DarkModeContext";

const filters = ['전체', '계획된 일정', '완료됨'];

function App() {
    /* 기본 카테고리 상태 관리 */
    const [filter, setFilter] = useState(filters[0]);

    return (
        <DarkModeProvider>
            <div className="container">
                {/* 필터 */}
                <TodoHeader
                    filters={filters}
                    filter={filter}
                    onFilterChange={setFilter}
                />
                <TodoBody filter={filter}/>
            </div>
        </DarkModeProvider>
    );
}

export default App;