import { createRoot } from 'react-dom/client'
import ToDoList from './App.jsx'
import Counter from './Counter.jsx'

createRoot(document.getElementById('root')).render(
  <>
    <ToDoList />
    <Counter />
  </>
)
