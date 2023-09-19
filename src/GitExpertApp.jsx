import { useState } from "react";
import { AddCategory } from "./components/AddCategory";

let account = 0;
export const GitExpertApp = () => {
  const [categories, setCategories] = useState(["One Punch", "Dragon Ball"]);

  const onAddCategory = () => {
    // Pes2023
    account++; 
    setCategories([
      ...categories,
      `Pes20${account <= 9 ? `0${account}` : account}`,
    ]);
  };

  return (
    <>
      {/* Título */}
      <h1>GitExpertApp</h1>
      {/* Input */}
      <AddCategory setCategories={setCategories}/>
      {/* List de Gif */}
      {/* <button onClick={onAddCategory}>Agregar</button> */}
      <ol>
        {categories.map((category) => {
          return <li key={category}>{category}</li>;
        })}
        <li>ABC</li>
        <li>123</li>
        <li>XYZ</li>
      </ol>
      {/* Git Item */}
    </>
  );
};
