import { ContainerChart, TitleChard } from '../chartstyles';
import { useEffect, useState } from 'react';
import { LineChart } from 'react-native-chart-kit';

interface IChartArea {
    title: string,
    label?: number,
}

const ChartArea = ({ title }: IChartArea) => {
    const [data, setData] = useState<any>({
        labels: [`${new Date().getUTCSeconds()}`],
        datasets: [
            {
                data: [0],
            },
        ],
    });

    const generateRandomData = () => {
        const newLabels = [...data.labels, `t: ${new Date().getUTCSeconds()}`];
        const newData = [...data.datasets[0].data, (Math.random() * (10 - 9.5) + 4.5).toFixed(1)];

        // Limitar o número de pontos no gráfico para manter o histórico
        if (newLabels.length > 6) {
            newLabels.shift();
            newData.shift();
        }

        setData({
            labels: newLabels,
            datasets: [
                {
                    data: newData,
                },
            ],
        });

    };
    console.log(data.datasets[0].data);

    useEffect(() => {
        const interval = setInterval(generateRandomData, 3000);
        return () => clearInterval(interval);
    }, [data]);

    return (
        <ContainerChart>
            <TitleChard>{title}</TitleChard>
            <LineChart
                data={data}
                width={360}
                height={250}
                fromZero
                fromNumber={10}
                chartConfig={{
                    backgroundGradientFrom: '#ffffff',
                    backgroundGradientTo: '#ffffff',
                    color: (opacity = 1) => `rgba(73, 163, 142, ${opacity})`,
                    labelColor: (opacity = 1) => `rgba(0, 0, 0, ${opacity})`,
                }}
                style={{
                    borderRadius: 7,
                }}
                bezier
            />
        </ContainerChart>
    );
};

export default ChartArea;
