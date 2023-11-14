import { PressableProps } from 'react-native';
import { ContainerCard, ContainerInfoCard, ImgSample, InfoSample, NameSample } from './card.styles';
import { temperatureGraus } from '../../../../shared/utils/temp';
import { NavigationProp, ParamListBase, useNavigation } from '@react-navigation/native';
import { MenuURL } from '../../../../shared/enums/menu-url.enum';
import { SampleType } from '../../../../shared/types/SampleType';

interface ICardProps extends PressableProps {
    sample: SampleType,
}

const Card = ({sample, ...props}: ICardProps) => {
    const {navigate} = useNavigation<NavigationProp<ParamListBase>>();

    const handleDashboard = () => {
        navigate(MenuURL.DASHBOARD, {
            sample,
        });
    };

    return (
        <ContainerCard {...props} onPress={handleDashboard}>
            <ImgSample resizeMode="center" source={require('../../../../assets/sample_icon.png')} />

            <ContainerInfoCard>
                <NameSample>{sample.name}</NameSample>
                <InfoSample>Temperatura: {temperatureGraus(sample.temperature)} - pH: {sample.ph}</InfoSample>
            </ContainerInfoCard>
        </ContainerCard>
    );
};

export default Card;
