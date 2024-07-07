import React from "react"

const Input = ({
  type,
  placeholder,
  userInput,
  handleInputChange,
  id,
  name,
}) => {
  return (
    <input
      type={type}
      placeholder={placeholder}
      name={name}
      value={userInput}
      id={id}
      onChange={handleInputChange}
      required
    />
  )
}

export default Input
