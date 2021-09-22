import React from 'react';
import { css } from '@emotion/css';
import { Input, InputGroup, InputLeftElement, Button, Divider, Text } from '@chakra-ui/react';
import { LockIcon, AtSignIcon } from '@chakra-ui/icons';

import FlowContainer from '../components/FlowContainer';
import { useAppDispatch, useAppSelector } from '../store/hooks';
import { flowSlice, selectFlow } from '../store/slices/flow'
import { useHistory } from 'react-router-dom';

interface AppProps { }

function Login({ }: AppProps) {

  const history = useHistory();

  function handleSignUpClick() {
    history.push("/signup");
  }

  // The `state` arg is correctly typed as `RootState` already
  const flow = useAppSelector(selectFlow)
  const dispatch = useAppDispatch()
  const {
    next,
    back,
  } = flowSlice.actions

  // Styles
  const LoginSectionStyle = css`
    width: 75%;
    margin: 0 auto;
    display: grid;
    grid-gap: 1rem;
    grid-template-rows: repeat(4, 1fr);
    margin-top: 2rem;
    margin-bottom: 2rem;
  `;

  const SignupSectionStyle = css`
    width: 75%;
    margin: 0 auto;
    display: grid;
    grid-gap: 1rem;
    grid-template-rows: repeat(2, 1fr);
    margin-top: 2rem;
    margin-bottom: 1rem;
  `;

  // Return the App component.
  return (
    <FlowContainer>
      <div className={LoginSectionStyle}>
        <Text textColor="CaptionText" fontSize="lg">Enter your credentials to login</Text>
        <InputGroup>
          <InputLeftElement
            pointerEvents="none"
            children={<AtSignIcon color="gray.300" />}
          />
          <Input textAlign="center" variant="flushed" placeholder="Username" />
        </InputGroup>
        <InputGroup>
          <InputLeftElement
            pointerEvents="none"
            children={<LockIcon color="gray.300" />}
          />
          <Input textAlign="center" variant="flushed" placeholder="Password" type="password" />
        </InputGroup>
        <Button colorScheme="blue" onClick={() => { dispatch(next()) }}>Login</Button>
      </div>
      <Divider width="80%" margin="auto" />
      <div className={SignupSectionStyle}>
        <Text textColor="CaptionText" fontSize="lg">If you don't already have an account, please sign-up.</Text>
        <Button color="primary" onClick={handleSignUpClick}>Sign up</Button>
      </div>
    </FlowContainer>
  );
}

export default Login;
