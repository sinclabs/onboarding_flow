import React, { useState, useEffect } from 'react';
import { css } from '@emotion/css';
import { ChakraProvider, Input, InputGroup, InputLeftElement, Button, Divider, Text } from '@chakra-ui/react';
import { LockIcon, AtSignIcon } from '@chakra-ui/icons';

import FlowContainer from './components/FlowContainer';

interface AppProps { }

function App({ }: AppProps) {

  // Styles
  const AppStyle = css`
    width: 100vw;
    height: 100vh;
    text-align: center;
    display: grid;
    place-items: center;
    background: #E5E5E5;

    code {
      background: #FFF3;
      padding: 4px 8px;
      border-radius: 4px;
    }
    p {
      margin: 0.4rem;
    }
  `;

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
    <ChakraProvider>
      <div className={AppStyle}>
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
            <Button colorScheme="blue">Login</Button>
          </div>
          <Divider width="80%" margin="auto" />
          <div className={SignupSectionStyle}>
            <Text textColor="CaptionText" fontSize="lg">If you don't already have an account, please sign-up.</Text>
            <Button color="primary">Sign up</Button>
          </div>
        </FlowContainer>
      </div>
    </ChakraProvider>
  );
}

export default App;

// const AppLogoStyle = css`
//     @keyframes App-logo-spin {
//       from {
//         transform: rotate(0deg);
//       }
//       to {
//         transform: rotate(360deg);
//       }
//     }

//     height: 40vmin;
//     pointer-events: none;
//     @media (prefers-reduced-motion: no-preference) {
//       animation: App-logo-spin infinite 20s linear;
//     }
//   `;

//   const AppHeaderStyle = css` 
//     background-color: #282c34;
//     min-height: 100vh;
//     display: flex;
//     flex-direction: column;
//     align-items: center;
//     justify-content: center;
//     font-size: calc(10px + 2vmin);
//     color: white;
//   `;

//   const AppLinkStyle = css`
//     color: #61dafb;
//   `;