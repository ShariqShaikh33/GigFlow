import React from 'react'

function Register() {
  return (
    <div>
      <form>
        <TextInputComponent text="Name" type="text" id="name" placeholder="Enter your name"/>
        <TextInputComponent text="Email" type="email" id="email" placeholder="Enter your email"/>
        <TextInputComponent text="Password" type="password" id="password" placeholder="Enter your password"/>
        <CustomButton text="Register"/>
      </form>
    </div>
  )
}

export default Register