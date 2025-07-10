import { useEffect, useState } from "react";

const App = () =>{
  const [name, setName] = useState("")

  useEffect(()=>{
    document.title = `Hello ${name}`
  }, [name])

  return(
    <>
      <h2>Enter ur name: </h2>
      <input type="text" value={name} onChange={(e)=> setName(e.target.value) } />
    </>
  );
}


export default App;
