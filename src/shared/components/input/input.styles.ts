import styled from 'styled-components/native';
import theme from '../../theme/theme';

export const Container = styled.View``;

export const InputContainer = styled.TextInput`
    width: 100%;
    height: 60px;
    padding: 7px;
    font-size: 16px;
    border-radius: 10px;
    background-color: ${(theme.COLORS.GRAY_10)};
    
`;

export const Label = styled.Text`
    color: ${(theme.COLORS.TEXT)};
    font-family: Ubuntu;
    font-size: 18px;
    font-style: normal;
    font-weight: 700;
    line-height: 31px;
    margin-top: 30px;
`;

export const Recovery = styled.Text`
    text-align: right;
    color: ${(theme.COLORS.TEXT)};
    font-family: Ubuntu;
    font-size: 16px;
    font-style: normal;
    font-weight: 700;
    line-height: 31px;
    margin: 10px 0;
`;
