import React from 'react';
import theme from '../../theme/theme';
import { View, Image } from 'react-native';
import { logout } from '../../connection/auth';
import Icon from 'react-native-vector-icons/Ionicons';
import { NavigationProp, ParamListBase, useNavigation } from '@react-navigation/native';

const CustomHeader = () => {
    const navigate = useNavigation<NavigationProp<ParamListBase>>();

    const handleLogout = () => {
        return logout(navigate);
    };

    return (
        <View style={{ flexDirection: 'row', alignItems: 'center' }}>
            <Image resizeMode="center" width={20} height={20} source={require('../../../assets/logo.png')} />

            <Icon name="log-out-outline" size={40} color={theme.COLORS.WHITE} style={{position: 'absolute', right: 0 }} onPress={handleLogout} />

        </View>
    );
};

export default CustomHeader;
