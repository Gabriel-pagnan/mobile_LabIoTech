import { ContainerChart } from '../chartstyles';
import { Text } from 'react-native';
import { PieChart } from 'react-native-gifted-charts';

interface IChart {
    title?: string,
    dataPie?: undefined,
    labels?: string[]
}

const ChartPie = ({ title }: IChart) => {
    const dataPie = [
        {value: 70, color: '#177AD5'},
        {value: 30, color: 'lightgray'},
    ];

    return (
        <ContainerChart>
            <PieChart
                donut
                innerRadius={90}
                data={dataPie}
                centerLabelComponent={() => {
                return <Text style={{fontSize: 28, textAlign: 'center'}}>70% {title}</Text>;
                }}
            />
        </ContainerChart>
    );
};


export default ChartPie;

