import React, {useContext, useState} from "react";
import {BoldLink,BoxContainer,FormContainer,Input,MutedLink, SubmitButton,} from "./Common";
import { Marginer } from './Marginer'
import { AccountContext } from "./AccountContext";
import { useHistory } from "react-router-dom";

export function SignUpForm() {
    const { switchToSignin } = useContext(AccountContext);
    const [formData, setformData] = useState({
        username: " ",
        email: " ",
        password: " "
    })

    const [errors, setErrors] = useState([])
    const history = useHistory()

    const {username, email, password} = formData

    function onSubmit(e) {
        e.preventDefault()
        const user = {
            username, email, password
        }

        fetch(`/users`, {
            method: 'POST',
            headers: {'Content-Type': 'application/json'},
            body:JSON.stringify(user)
        })
        .then(res => {
            if(res.ok){
                res.json().then(user => {
                    history.push(`/users/${user.id}`)
                })
            } else {
                 res.json().then(json => setErrors(Object.entries(json.errors)))   
            }
        })
    }

    const handleChange = (e) => {
        const { name, value } = e.target
        setformData({...formData, [name]: value})
    }

  return (
    <BoxContainer>
      <FormContainer >
        <Input type="text"   name='username' placeholder="Username" value={username} onChange={handleChange}/>
        <Input type="text" name='email' placeholder="Email" value={email} onChange={handleChange} />
        <Input type="password" name="password" placeholder="Password" value={password} onChange={handleChange} />
      </FormContainer>
      <Marginer direction="vertical" margin={10} />
      <SubmitButton onSubmit={onSubmit} type="submit">Signup</SubmitButton>
      <Marginer direction="vertical" margin="1em" />
      <MutedLink href="#">
        Already have an account?
        <BoldLink href="#" onClick={switchToSignin}>
          Signin
        </BoldLink>
      </MutedLink>
    </BoxContainer>
  );
}