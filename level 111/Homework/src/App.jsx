//task 2
import { useState } from "react";

const App = () => {
    const [taskList, setTaskList] = useState([]);

    const handleClick = () => {
        const input = document.getElementById("task-input");
        if(input.value) {
            setTaskList([...taskList, input.value]);
            input.value = "";
        }
    }
    const handleDelete = (indexToDelete) =>{
      const newList = taskList.filter((_, index) => index !== indexToDelete);
      setTaskList(newList);
    }

    return (
        <main>
            <input type="text" id="task-input" placeholder="Enter new task" />
            <button onClick={handleClick}>Add Task</button>
            <h1>Tasks List</h1>
            <ul>
                {
                    taskList.map((curValue, index) => <li key={index}>{curValue} <button onClick={() => handleDelete(index)}>Delete</button></li>)
                }
            </ul>
        </main>
    );
}

export default App;

