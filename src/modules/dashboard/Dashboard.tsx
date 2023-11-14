import { StatusBar, View } from 'react-native';
import theme from '../../shared/theme/theme';
import { useSample } from '../../shared/hooks/useSample';
import { SampleType } from '../../shared/types/SampleType';
import { RouteProp, useRoute } from '@react-navigation/native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { CardsList, ContainerCard, ContainerDashboard, DashboardScroll, Data, NameSample, Title, TitleInfo } from './dashboard.styles';
import { assPh, assTemperature, dpPh, dpTemperature, mePh, meTemperature, medianPh, medianTem, modaPh, modaTemp } from '../../shared/func/statistics';
import { useUserReducer } from '../../redux/reducer/user-reducer/useUserReducer';

export type DashboardNavigationProp = NativeStackNavigationProp<Record<string, IDashboardParams>>;

export interface IDashboardParams {
    sample: SampleType
}

const Dashboard = () => {
    const { sample } = useSample();
    const { user } = useUserReducer();
    const { params } = useRoute<RouteProp<Record<string, IDashboardParams>>>();

    return (
        <DashboardScroll>
            <StatusBar backgroundColor={theme.COLORS.GRAY} />
            <ContainerDashboard>
                <Title>Detalhes da amostra</Title>
                <NameSample>Nome: {params.sample.name}</NameSample>

                <CardsList>
                    <ContainerCard>
                        <TitleInfo>Temp:</TitleInfo>
                        <Data>{params.sample.temperature}</Data>
                    </ContainerCard>
                    <ContainerCard>
                        <TitleInfo>pH:</TitleInfo>
                        <Data>{params.sample.ph}</Data>
                    </ContainerCard>

                    {/* media */}
                    <ContainerCard>
                        <TitleInfo>Média temp:</TitleInfo>
                        <Data>{meTemperature(sample)}</Data>
                        <TitleInfo>Média pH:</TitleInfo>
                        <Data>{mePh(sample)}</Data>
                    </ContainerCard>

                    {/* mediana */}
                    <ContainerCard>
                        <TitleInfo style={{ fontSize: 15 }}>Mediana temp:</TitleInfo>
                        <Data>{medianTem(sample)}</Data>
                        <TitleInfo style={{ fontSize: 15 }}>Mediana pH:</TitleInfo>
                        <Data>{medianPh(sample)}</Data>
                    </ContainerCard>

                    {/* moda */}
                    <ContainerCard>
                        <TitleInfo>Moda temp:</TitleInfo>
                        <Data>{modaTemp(sample)}</Data>
                        <TitleInfo>Moda pH:</TitleInfo>
                        <Data>{modaPh(sample)}</Data>
                    </ContainerCard>

                    {/* dp */}
                    <ContainerCard>
                        <TitleInfo>DP temp:</TitleInfo>
                        <Data>{dpTemperature(sample)}</Data>
                        <TitleInfo>DP pH:</TitleInfo>
                        <Data>{dpPh(sample)}</Data>
                    </ContainerCard>

                    {/* ass/curtose */}
                    <ContainerCard>
                        <TitleInfo>Ass temp:</TitleInfo>
                        <Data>{assTemperature(sample)}</Data>
                    </ContainerCard>

                    <ContainerCard>
                        <TitleInfo>Ass pH:</TitleInfo>
                        <Data>{assPh(sample)}</Data>
                    </ContainerCard>

                    {/* prob */}
                    <ContainerCard style={{ width: '100%', gap: 15 }}>
                        <View style={{width: '100%', flexDirection: 'row'}}>
                            <TitleInfo>Probabilidade temp:</TitleInfo>
                            <Data>___</Data>
                        </View>

                        <View style={{width: '100%', flexDirection: 'row'}}>
                            <TitleInfo>Probabilidade pH:</TitleInfo>
                            <Data>___</Data>
                        </View>
                    </ContainerCard>

                </CardsList>
            </ContainerDashboard>
        </DashboardScroll>
    );
};

export default Dashboard;
