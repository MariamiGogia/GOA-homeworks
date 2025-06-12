import Child from "./Child.jsx";

const Parent = ({ name }) =>{
    return (
        <>
         <Child name={name} />
        </>
    );
}

export default Parent;