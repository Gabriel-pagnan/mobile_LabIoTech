import styled from 'styled-components/native';
import theme from '../../shared/theme/theme';

export const ContainerSplash = styled.View`
    height: 100%;
    width: 100%;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    background-color: ${(theme.COLORS.GRAY)};
`;

export const ImgSplash = styled.Image`
    width: 100%;
    height: 250px;
`;

export const LoadingSplash = styled.ActivityIndicator`
    position: absolute;
    bottom: 0;
    margin-bottom: 80px;
    color: #fff;
`;
