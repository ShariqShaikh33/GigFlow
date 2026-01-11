import React from 'react'

function CustomButton({text,onclick}) {
  return (
    <button onClick={onclick}>{text}</button>
  )
}

export default CustomButton