import React, { useRef } from "react";

export interface INewItemProps {
  placeholder: string;
  handleClick: (text: string) => void;
}

const NewItem = ({ handleClick, placeholder }: INewItemProps) => {
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
        placeholder={placeholder}
        // value={value}
        // onChange={(event) => event.target}
      />
      <button onClick={onClick}>Add</button>
    </>
  );
};

export default NewItem;
