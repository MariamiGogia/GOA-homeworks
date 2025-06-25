import { useState } from "react"
const ToDoList = () =>{

  const [task, setTask] = useState("")
  const [addedTasks, setAddedTasks] = useState([])

  const handleTask = () =>{
    const trimValue = task.trim();
    if (trimValue == "") return;
    setAddedTasks([...addedTasks, trimValue]);
    setTask("")
  }
  return(
    <>
    <h1>To Do List: </h1>
    <input type="text" value={task} onChange={(e) => setTask(e.target.value)} />
    <button onClick={handleTask}>Add</button>

    <ol>
      {addedTasks.map((i, index) =>(
        <li key={index}>{i}</li>
      ))}
    </ol>
    </>
  );
}

export default ToDoList
