import styled from 'styled-components/native';
import theme from '../../shared/theme/theme';

export const DashboardScroll = styled.ScrollView`
    width: 100%;
    height: 100%;
    background-color: ${(theme.COLORS.WHITE)};
`;

export const ContainerDashboard = styled.View`
    width: 100%;
    height: 100%;
    padding: 15px;
    align-items: center;
`;

export const Title = styled.Text`
    font-size: 30px;
    margin: 20px;
`;

export const NameSample = styled.Text`
    font-size: 20px;
    color: #777;
    width: 100%;
    text-align: left;
    margin: 15px;
`;

export const CardsList = styled.View`
    width: 100%;
    min-height: 100%;
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    gap: 20px;
    justify-content: flex-start;
    align-items: center;
`;

export const TitleInfo = styled.Text`
    font-size: 16px;
    color: ${(theme.COLORS.TEXT)};
`;

export const Data = styled.Text`
    font-size: 16px;
    color: ${(theme.COLORS.TEXT)};
    margin-left: 5px;
`;

export const ContainerCard = styled.View`
    width: 180px;
    height: 90px;
    border-radius: 10px;
    flex-direction: row;
    gap: 5px;
    align-items: center;
    flex-wrap: wrap;
    background-color: ${(theme.COLORS.GRAY_10)};
    padding: 12px;
`;
