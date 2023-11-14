import { StatusBar } from 'react-native';
import ChartArea from '../../shared/components/chart/charts/AreaChart';
import ChartBar from '../../shared/components/chart/charts/BarChart';
import { ContainerRealtime, RealtimeScroll } from './graphic.styles';
import theme from '../../shared/theme/theme';
import { mePh, meTemperature, medianPh, medianTem, modaPh, modaTemp } from '../../shared/func/statistics';
import { useSample } from '../../shared/hooks/useSample';

const Graphic = () => {
    const { sample } = useSample();

    return (
        <RealtimeScroll>
            <StatusBar backgroundColor={theme.COLORS.GRAY} />
            <ContainerRealtime>
                <ChartArea title="pH" />
                <ChartBar
                    maxValue={10}
                    media={Number(mePh(sample))}
                    moda={Number(modaPh(sample))}
                    mediana={Number(medianPh(sample))}
                />

                <ChartArea title="temperature" label={new Date().getMinutes()} />
                <ChartBar
                    maxValue={40}
                    moda={Number(modaTemp(sample))}
                    mediana={Number(medianTem(sample))}
                    media={Number(meTemperature(sample))}
                />

            </ContainerRealtime>
        </RealtimeScroll>
    );
};

export default Graphic;
