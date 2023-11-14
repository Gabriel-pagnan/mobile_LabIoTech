import { View, Text, TouchableHighlightProps, ActivityIndicator } from 'react-native';
import React from 'react';
import { ButtonContainer, Container, Label, TitleButton } from './button.styles';
import { TouchableOpacity } from 'react-native';
import { NavigationProp, ParamListBase, useNavigation } from '@react-navigation/native';
import { MenuURL } from '../../enums/menu-url.enum';

interface IButtonProps extends TouchableHighlightProps {
    title: string,
    register?: boolean,
    login?: boolean,
    loading?: boolean
}

const Button = ({ register, login, title, loading, ...props }: IButtonProps) => {
    const { navigate } = useNavigation<NavigationProp<ParamListBase>>();

    const renderLoading = () => (
        <>
            {
                loading ?
                    <ActivityIndicator color="#fff" /> :
                    <TitleButton>{title}</TitleButton>
            }
        </>
    );

    const handleNavigateRegister = () => {
        return navigate(MenuURL.REGISTER);
    };
    const handleNavigateLogin = () => {
        return navigate(MenuURL.LOGIN);
    };

    return (
        <Container>
            <ButtonContainer {...props}>
                {renderLoading()}
            </ButtonContainer>
            {
                register &&
                <TouchableOpacity onPress={handleNavigateRegister}>
                    <Label>Cadastre-se</Label>
                </TouchableOpacity>
            }
            {
                login &&
                <TouchableOpacity onPress={handleNavigateLogin}>
                    <Label>Já possuo cadastro</Label>
                </TouchableOpacity>
            }
        </Container>
    );
};

export default Button;
