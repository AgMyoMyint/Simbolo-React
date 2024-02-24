import React, { useContext } from "react";
import Context from "./Context";

const Form = () => {
  const { inputValue, setInputValue, lists, setLists } = useContext(Context);

  const submitHandler = (e) => {
    e.preventDefault();
    setLists([...lists, { id: Math.random().toString(), item: inputValue }]);
    setInputValue("");
  };

  return (
    <form onSubmit={submitHandler}>
      <input
        type="text"
        value={inputValue}
        onChange={(e) => setInputValue(e.target.value)}
      />
      <input type="submit" value="Submit" />
    </form>
  );
};

export default Form;
