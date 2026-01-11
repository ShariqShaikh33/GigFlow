import React from 'react'
import CustomTextInput from '../../common/CustomTextInput/index.jsx'
import CustomLabel from '../../common/CustomLabel/index.jsx'

function TextInputComponent({text,type,id,placeholder}) {
  return (
    <div>
        <CustomLabel text={text} id={id}/>
        <CustomTextInput id={id} type={type} placeholder={placeholder}/>
    </div>
  )
}

export default TextInputComponent