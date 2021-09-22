import React from 'react';
import { css } from '@emotion/css';
import { ChakraProvider } from '@chakra-ui/react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";

import Home from './pages/Home';
import Login from './pages/Login';
import SignUp from './pages/SignUp';

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

  // Return the App component.
  return (
    <ChakraProvider>
      <div className={AppStyle}>
        <Router>
          <Switch>
            <Route path="/login">
              <Login />
            </Route>
            <Route path="/signup">
              <SignUp />
            </Route>
            <Route path="/">
              <Home />
            </Route>
          </Switch>
        </Router>
      </div>
    </ChakraProvider>
  );
}

export default App;
