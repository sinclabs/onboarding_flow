import React, { ReactElement } from 'react'
import { css } from '@emotion/css'
import { Button } from '@chakra-ui/button'
import { AtSignIcon, LockIcon } from '@chakra-ui/icons'
import { Input, InputGroup, InputLeftElement } from '@chakra-ui/input'
import { Divider, Text } from '@chakra-ui/layout'
import { useHistory } from 'react-router-dom'

import FlowContainer from '../components/FlowContainer'

interface Props {

}

export default function SignUp({ }: Props): ReactElement {
    const history = useHistory();

    function handleLoginClick() {
        history.push("/login");
    }
    // Styles
    const SignupSectionStyle = css`
        width: 75%;
        margin: 0 auto;
        display: grid;
        grid-gap: 1rem;
        grid-template-rows: repeat(5, 1fr);
        margin-top: 2rem;
        margin-bottom: 2rem;
    `;

    const LoginSectionStyle = css`
        width: 75%;
        margin: 0 auto;
        display: grid;
        grid-gap: 1rem;
        grid-template-rows: repeat(2, 1fr);
        margin-top: 2rem;
        margin-bottom: 1rem;
    `;
    return (
        <FlowContainer>
            <div className={SignupSectionStyle}>
                <Text textColor="CaptionText" fontSize="lg">Enter the information to signup</Text>
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
                <InputGroup>
                    <InputLeftElement
                        pointerEvents="none"
                        children={<LockIcon color="gray.300" />}
                    />
                    <Input textAlign="center" variant="flushed" placeholder="Retype Password" type="password" />
                </InputGroup>
                <Button colorScheme="blue" onClick={() => { }}>Login</Button>
            </div>
            <Divider width="80%" margin="auto" />
            <div className={LoginSectionStyle}>
                <Text textColor="CaptionText" fontSize="lg">If you already have an account, please login.</Text>
                <Button color="primary" onClick={handleLoginClick}>Login</Button>
            </div>
        </FlowContainer>
    )
}
