import styled from 'styled-components/native';
import theme from '../../../shared/theme/theme';

export const ContainerRegister = styled.View`
    width: 100%;
    height: 100%;
    padding: 22px;
    background-color: ${(theme.COLORS.WHITE)};
`;

export const Title = styled.Text`
    text-align: center;
    color: ${(theme.COLORS.TEXT)};
    text-align: center;
    font-family: Ubuntu;
    font-size: 35px;
    font-style: normal;
    font-weight: 700;
    line-height: 31px;
    margin: 16px;
`;
