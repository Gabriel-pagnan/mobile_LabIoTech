import { View, Text, StatusBar, ScrollView } from 'react-native';
import React, { useEffect } from 'react';
import Input from '../../../shared/components/input/input';
import { ContainerLogin, Title } from './login.styles';
import Button from '../../../shared/components/button/button';
import theme from '../../../shared/theme/theme';
import { useLogin } from '../hooks/useLogin';

const Login = () => {
    const { email, password, loading, handleLogin, handleChangeMail, handleChangePass } = useLogin();

    return (
        <ContainerLogin>
            <StatusBar backgroundColor={theme.COLORS.WHITE} />
            <Title>Login</Title>
            <ScrollView>
                <Input label="E-mail" value={email} onChange={handleChangeMail} />
                <Input label="Senha" recovery value={password} onChange={handleChangePass} secureTextEntry />
                <Button title="ENTRAR" register loading={loading} onPress={handleLogin} />
            </ScrollView>
        </ContainerLogin>
    );
};

export default Login;
