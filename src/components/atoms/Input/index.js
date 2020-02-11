import React from "react";

const Input = ({ value, onChange, onInsert }) => {
  const handleKeyPress = e => {
    if (e.key === "Enter") {
      onInsert();
    }
  };

  return (
    <input onChange={onChange} value={value} onKeyPress={handleKeyPress} />
  );
};

export default Input;
