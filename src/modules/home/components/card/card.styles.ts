import styled from 'styled-components/native';
import theme from '../../../../shared/theme/theme';

export const ContainerCard = styled.Pressable`
    width: 100%;
    flex-direction: row;
    align-items: center;
    justify-content: space-around;
    background-color: ${(theme.COLORS.GRAY_10)};
    padding: 15px;
    border-radius: 7px;
    margin: 15px;
`;

export const ImgSample = styled.Image`
    border-radius: 50px;
    width: 80px;
    height: 80px;
`;

export const ContainerInfoCard = styled.View`
    flex-direction: column;
    align-items: flex-start;
`;

export const NameSample = styled.Text`
    font-size: 25px;
    font-weight: bold;
`;

export const InfoSample = styled.Text`
    margin-top: 15px;
    font-size: 18px;
`;
