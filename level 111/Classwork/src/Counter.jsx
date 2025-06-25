import { useState } from "react";

const Counter = () =>{
    const [count, setCount] = useState(0);

    const handleClick = () =>{
        setCount(count + 1);
    }

    return(
        <>
        <p>Count: {count}</p>
        <button onClick={handleClick}>Click me</button>
        </>
    );
}

export default Counter;