import React from 'react';
import LoginText from './LoginText';
import LoginForm from './LoginForm';
import LoginImage from './LoginImage';
import styled from 'styled-components';

const LoginContainer = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    height: 100vh;
`;

const TextContainer = styled.div`
    margin-right: 2em;
`;

function Login() {
    return (
        <LoginContainer>
            <TextContainer>
                <LoginText />
                <LoginForm />
            </TextContainer>
            <LoginImage />
        </LoginContainer>
    );
}

export default Login;
