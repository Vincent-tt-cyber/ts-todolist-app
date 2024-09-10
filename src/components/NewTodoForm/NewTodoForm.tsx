import React, { useRef } from "react";

export interface INewTodoFormProps {
  //   value: string;
  //   onChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
  handleClick: (text: string) => void;
}

const NewTodoForm = ({ handleClick }: INewTodoFormProps) => {
  const inputRef = useRef<HTMLInputElement | null>(null);

  const onClick = () => {
    if (inputRef.current) {
      handleClick(inputRef.current.value);
      inputRef.current.value = "";
    }
  };

  return (
    <>
      <input
        ref={inputRef}
        type="text"
        placeholder="New Todo"
        // value={value}
        // onChange={(event) => event.target}
      />
      <button onClick={onClick}>Add</button>
    </>
  );
};

export default NewTodoForm;
