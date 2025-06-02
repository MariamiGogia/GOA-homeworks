import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import Child from './Child.jsx';
const Parent = () =>{
    return(
        <div>
            <Child />
            <Child />
        </div>
    )
};

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Parent />
  </StrictMode>,
)
