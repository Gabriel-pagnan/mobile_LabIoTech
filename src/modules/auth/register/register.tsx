import { StatusBar, ScrollView } from 'react-native';
import React from 'react';
import Input from '../../../shared/components/input/input';
import Button from '../../../shared/components/button/button';
import { ContainerRegister, Title } from './register.styles';
import theme from '../../../shared/theme/theme';
import { useRegister } from '../hooks/useRegister';

const Register = () => {
    const { createUser, handleChange, handleRegister, loading } = useRegister();

    return (
        <ContainerRegister>
            <StatusBar backgroundColor={theme.COLORS.WHITE} />
            <Title>Cadastrar</Title>
            <ScrollView>
                <Input label="Nome" onChange={(e) => handleChange(e, 'name')} />
                <Input label="E-mail" onChange={(e) => handleChange(e, 'email')} />
                <Input label="Senha" onChange={(e) => handleChange(e, 'password')} secureTextEntry />
            </ScrollView>
            <Button title="CADASTRAR" login loading={loading} onPress={handleRegister} />
        </ContainerRegister>
    );
};

export default Register;
