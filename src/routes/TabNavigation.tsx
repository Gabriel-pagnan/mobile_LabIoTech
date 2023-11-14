import { View } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import Home from '../modules/home/Home';
import { MenuURL } from '../shared/enums/menu-url.enum';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Dashboard from '../modules/dashboard/Dashboard';
import Graphic from '../modules/graphic/Graphic';
import theme from '../shared/theme/theme';
import CustomHeader from '../shared/components/header/customHeader';

const TabNavigation = () => {
    const { Navigator, Screen } = createBottomTabNavigator();

    return (
        <Navigator
            initialRouteName="Home"
            screenOptions={{
                headerTitle: () => <CustomHeader />,
                headerStyle: {
                    backgroundColor: theme.COLORS.GRAY,
                },
                tabBarShowLabel: false,
                tabBarStyle: {
                    height: 60,
                    backgroundColor: theme.COLORS.GRAY,
                    borderTopLeftRadius: 25,
                    borderTopRightRadius: 25,
                    borderTopWidth: 0.5,
                    shadowColor: 'rgba( 31, 38, 135, 0.8)',
                    elevation: 2,
                },
                tabBarLabelStyle: {
                    fontSize: 12,
                },
                tabBarHideOnKeyboard: true,
            }}>

            <Screen name={MenuURL.HOME} component={Home} options={{
                tabBarIcon: ({ focused }) => (
                    <View>
                        {focused ? (
                            <Icon name="home" color={theme.COLORS.WHITE} size={30} />
                        ) : (
                            <Icon name="home-outline" color={theme.COLORS.GRAY_ICON} size={30} />
                        )}
                    </View>
                ),
            }} />
            <Screen name={MenuURL.DASHBOARD} component={Dashboard} options={{
                tabBarIcon: ({ focused }) => (
                    <View>
                        {focused ? (
                            <Icon name="grid" color={theme.COLORS.WHITE} size={30} />
                        ) : (
                            <Icon name="grid-outline" color={theme.COLORS.GRAY_ICON} size={30} />
                        )}
                    </View>
                ),
            }} />
            <Screen name={MenuURL.REALTIME} component={Graphic} options={{
                tabBarIcon: ({ focused }) => (
                    <View>
                        {focused ? (
                            <Icon name="podium" color={theme.COLORS.WHITE} size={32} />
                        ) : (
                            <Icon name="podium-outline" color={theme.COLORS.GRAY_ICON} size={32} />
                        )}
                    </View>
                ),
            }} />
        </Navigator>
    );
};

export default TabNavigation;
