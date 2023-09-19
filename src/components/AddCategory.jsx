import { useState } from "react";

export const AddCategory = () => {
  const [inputValue, setInputValue] = useState("");
  const onInputChange = ({ target }) => {
    // console.log(target.value);
    setInputValue(target.value);
  };

  const onSubmit = (event) => {
    event.preventDefault()
    console.log(inputValue)//obteno el valor de algo
  }

  return (
    <form action="" onSubmit={(event) => onSubmit(event)}>
      <input
        type="text"
        placeholder="Buscar gifs"
        value={inputValue}
        onChange={onInputChange}
      />

    </form>
  );
};
