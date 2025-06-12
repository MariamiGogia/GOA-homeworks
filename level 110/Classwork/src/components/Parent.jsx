const Parent = ({ onHover, children }) =>{
    return(
        <>
          <button onMouseOver={onHover}>Hover on me!</button>
          {
              children
          }
        </>
    );
}

export default Parent;