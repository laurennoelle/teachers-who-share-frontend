import React, {useContext, useState} from 'react'
import { BoxContainer, FormContainer, Input, SubmitButton, MutedLink, BoldLink } from './Common'
import { Marginer } from './Marginer'
import { AccountContext } from './AccountContext';
import { useHistory } from 'react-router-dom';

function LoginForm() {
    const { switchToSignup } = useContext(AccountContext);
    const history = useHistory()
    const [username, setUsername] = useState('')
    const [password, setPassword] = useState('')

    function handleLogin(e) {
      e.preventDefault()
      console.log(username, password)
    }

      // function handleLoginSubmit(e) {
      //   e.preventDefault();
      //       history('/home')
      // }
  return (
    <BoxContainer >
        <FormContainer >
            <Input type="text" placeholder="Username" value={username} onChange={(e) => setUsername(e.target.value)}/>
            <Input type="password" placeholder="Password" value={password} onChange={(e) => setPassword(e.target.value)}/>
        </FormContainer>
        <Marginer direction="vertical" margin={10} />
        <MutedLink href="#">Forgot your password?</MutedLink>
        <Marginer direction="vertical" margin="1.6em" />
        <SubmitButton onSubmit={handleLogin} type="submit" >Signin</SubmitButton>
        <Marginer direction="vertical" margin="1em" />
        <MutedLink href="/home">Don't have an account?{" "}
        <BoldLink href="#" onClick={switchToSignup}>Signup</BoldLink>
      </MutedLink>
    </BoxContainer>
  )
}

export default LoginForm