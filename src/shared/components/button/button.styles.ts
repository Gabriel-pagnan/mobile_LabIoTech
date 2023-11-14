import styled from 'styled-components/native';
import theme from '../../theme/theme';

export const Container = styled.View``;

export const ButtonContainer = styled.TouchableOpacity`
    background-color: ${(theme.COLORS.GRAY)};
    margin-top: 20px;
    border-radius: 10px;
    width: 100%;
    height: 60px;
    justify-content: center;
`;
export const TitleButton = styled.Text`
    color: ${(theme.COLORS.WHITE)};
    text-align: center;
    font-size: 16px;
`;
export const Label = styled.Text`
    color: ${(theme.COLORS.TEXT)};
    font-family: Ubuntu;
    font-size: 16px;
    font-style: normal;
    font-weight: 700;
    line-height: 31px;
    margin: 12px 0;
`;
