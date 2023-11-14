import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { MenuURL } from '../shared/enums/menu-url.enum';
import Login from '../modules/auth/login/Login';
import TabNavigation from './TabNavigation';
import Register from '../modules/auth/register/register';
import Splash from '../modules/splash/Splash';

const Navigation = () => {
    const { Screen, Navigator } = createNativeStackNavigator();

    return (
        <NavigationContainer>
            <Navigator initialRouteName={MenuURL.SPLASH} screenOptions={{ headerShown: false }}>
            <Screen name={MenuURL.SPLASH} component={Splash} />
                <Screen name={MenuURL.LOGIN} component={Login} />
                <Screen name={MenuURL.REGISTER} component={Register} />
                <Screen name={MenuURL.TAB_ROUTES} component={TabNavigation} />
            </Navigator>
        </NavigationContainer>
    );
};

export default Navigation;
