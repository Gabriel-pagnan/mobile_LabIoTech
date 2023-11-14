import { BarChart } from 'react-native-chart-kit';
import { ContainerChart } from '../chartstyles';

interface IChartBar {
    moda: number,
    media: number,
    mediana: number,
    maxValue: number
}

const ChartBar = ({ moda, media, mediana, maxValue }: IChartBar) => {
    const barData = [
        { value: moda, label: 'Moda' },
        { value: media, label: 'Media' },
        { value: mediana, label: 'Mediana' },
    ];

    const data = {
        labels: ['Média', 'Moda', 'Mediana'],
        datasets: [
            {
                data: [media, moda, mediana],
            },
        ],
    };

    return (
        <ContainerChart>
            <BarChart
                width={370}
                height={250}
                data={data}
                yAxisSuffix={''}
                yAxisLabel={''}
                fromZero
                fromNumber={maxValue}
                chartConfig={{
                    backgroundGradientFrom: '#ffffff',
                    backgroundGradientTo: '#ffffff',
                    color: (opacity = 1) => `rgba(73, 163, 142, ${opacity})`,
                    labelColor: (opacity = 1) => `rgba(0, 0, 0, ${opacity})`,
                }}
                style={{
                    borderRadius: 7,
                }}
            />
        </ContainerChart>
    );
};

export default ChartBar;
