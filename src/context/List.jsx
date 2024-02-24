import React, { useContext } from "react";
import Context from "./Context";

const List = () => {
  const { lists } = useContext(Context);
  return (
    <ul>
      {
        lists.map(x => {
            return <li key={x.id}> {x.item} </li>;
        })
      }
    </ul>
  );
};

export default List;
