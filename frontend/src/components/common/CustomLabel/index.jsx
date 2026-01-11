import React from 'react'

function CustomLabel({id,text}) {
  return (
    <label htmlFor={id}>{text}</label>
  )
}

export default CustomLabel