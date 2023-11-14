import { StatusBar } from 'react-native';
import Card from './components/card/Card';
import { ContainerHome, HomeView, Title } from './home.styles';
import theme from '../../shared/theme/theme';
import { useSample } from '../../shared/hooks/useSample';
import { useUserReducer } from '../../redux/reducer/user-reducer/useUserReducer';

const Home = () => {
    const { sample } = useSample();

    return (
        <HomeView>
            <StatusBar backgroundColor={theme.COLORS.GRAY} />
            <ContainerHome>
                <Title>Amostras</Title>
                {sample.map((samp) => (
                    <Card key={samp.id} sample={samp} />
                ))}
            </ContainerHome>
        </HomeView>
    );
};

export default Home;
