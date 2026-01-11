import React from 'react'
import TextInputComponent from '../../components/Auth/TextInputComponent'
import CustomButton from '../../components/common/CustomButton'

function login() {
  return (
    <div>
      <form>
        <TextInputComponent text="Email" type="email" id="email" placeholder="Enter your email"/>
        <TextInputComponent text="Password" type="password" id="password" placeholder="Enter your password"/>
        <CustomButton text="Login"/>
      </form>
    </div>
  )
}

export default login