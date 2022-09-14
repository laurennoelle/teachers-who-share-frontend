import React, {useContext} from 'react'
import { BoxContainer, FormContainer, Input, SubmitButton, MutedLink, BoldLink } from './Common'
import { Marginer } from './Marginer'
import { AccountContext } from './AccountContext';
import { useHistory } from 'react-router-dom';

function LoginForm() {
    const { switchToSignup } = useContext(AccountContext);
    const history = useHistory()

      function handleLoginSubmit(e) {
        e.preventDefault();
            history('/home')
      }
  return (
    <BoxContainer >
        <FormContainer >
            <Input type="email" placeholder="Email" />
            <Input type="password" placeholder="Password" />
        </FormContainer>
        <Marginer direction="vertical" margin={10} />
        <MutedLink href="#">Forgot your password?</MutedLink>
        <Marginer direction="vertical" margin="1.6em" />
        <SubmitButton onClick={handleLoginSubmit} >Signin</SubmitButton>
        <Marginer direction="vertical" margin="1em" />
        <MutedLink href="/home">Don't have an account?{" "}
        <BoldLink href="#" onClick={switchToSignup}>Signup</BoldLink>
      </MutedLink>
    </BoxContainer>
  )
}

export default LoginForm