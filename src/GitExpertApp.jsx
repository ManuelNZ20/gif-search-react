import { useState } from "react";
import { AddCategory } from "./components/AddCategory";

let account = 0;
export const GitExpertApp = () => {
  const [categories, setCategories] = useState(["One Punch", "Dragon Ball"]);

  const onAddCategory = (newCategory) => {
    // console.log( newCategory )
    setCategories([newCategory,...categories])
    // categories.push(newCategory)
    
    // account++; 
    // setCategories([
    //   ...categories,
    //   `Pes20${account <= 9 ? `0${account}` : account}`,
    // ]);
  };

  return (
    <>
      {/* Título */}
      <h1>GitExpertApp</h1>
      {/* Input */}
      <AddCategory 
        // setCategories = { setCategories }
        onNewCategory = { (value) => onAddCategory(value) }
      />
      {/* List de Gif */}

      <ol>
        {categories.map((category) => {
          return <li key={category}>{category}</li>;
        })}
      </ol>
      {/* Git Item */}
    </>
  );
};
