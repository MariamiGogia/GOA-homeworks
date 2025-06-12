import Parent from "./components/Parent";

const App = () =>{
  const handleHover = () =>{
    alert('Good job!');
  }
  return (
    <Parent onHover={handleHover}>
      <p>Hello World!</p>
      <p>Hello React!</p>
    </Parent>
  );
}

export default App
