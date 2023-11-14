import { NavigationProp, ParamListBase, useNavigation } from '@react-navigation/native';
import { useRequest } from '../../../shared/hooks/useRequest';
import { useState } from 'react';
import { NativeSyntheticEvent, TextInputChangeEventData } from 'react-native';

export const useLogin = () => {
    const [email, setEmail] = useState<string>('');
    const [password, setPassword] = useState<string>('');
    const { authRequest, loading } = useRequest();

    const handleLogin = async () => {
        authRequest({email, password});
    };

    const handleChangeMail = (e: NativeSyntheticEvent<TextInputChangeEventData>) => {
        setEmail(e.nativeEvent.text);
    };
    const handleChangePass = (e: NativeSyntheticEvent<TextInputChangeEventData>) => {
        setPassword(e.nativeEvent.text);
    };

    return {
        email,
        loading,
        password,
        handleLogin,
        handleChangeMail,
        handleChangePass,
    };
};
