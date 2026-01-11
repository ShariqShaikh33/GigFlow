import React from 'react'

function CustomLabel({id,text}) {
  return (
    <label for={id}>{text}</label>
  )
}

export default CustomLabel