import { useEffect, useState } from "react"

const CreateNames = () =>{
    const nameList = ["Nia", "Nino", "Mariami", "Masho", "Data", "Dati", "Nikolozi", "Gio", "Giorgi", "Tika"]
    const [input, setInput] = useState("")
    const [filteredNames, setFilteredNames] = useState(nameList);

  useEffect(() => {
    if (input.trim() === "") {
      setFilteredNames(nameList);
    } else {
      const lowerInput = input.toLowerCase();
      const filtered = nameList.filter(name =>
        name.toLowerCase().includes(lowerInput)
      );
      setFilteredNames(filtered);
    }
  }, [input]);

  return (
    <div>
      <input
        type="text"
        placeholder="Enter name..."
        value={input}
        onChange={(e) => setInput(e.target.value)}
      />
      <h1>Names:</h1>
      <ul>
        {filteredNames.map((name, index) => (
          <li key={index}>{name}</li>
        ))}
      </ul>
    </div>
  );
};

export default CreateNames;