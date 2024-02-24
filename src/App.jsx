import "./App.css";
import Form from "./context/Form";
import List from "./context/List";
import Context from "./context/Context";
import { useState } from "react";

function App() {
  const [inputValue, setInputValue] = useState("");
  const [lists, setLists] = useState([]);

  return (
    <Context.Provider value={{inputValue, setInputValue, lists, setLists}}>
      Context API
      <Form />
      <List />
    </Context.Provider>
  );
}

export default App;
