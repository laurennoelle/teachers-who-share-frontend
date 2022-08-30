import React from 'react'
import { BoxContainer, FormContainer, Input } from './Common'

function LoginForm() {
  return (
    <BoxContainer>
        <FormContainer>
        <Input type="email" placeholder="Email" />
        <Input type="password" placeholder="Password" />
        </FormContainer>
    </BoxContainer>
  )
}

export default LoginForm