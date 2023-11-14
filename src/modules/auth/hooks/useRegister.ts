import { NavigationProp, ParamListBase, useNavigation } from '@react-navigation/native';
import { useRequest } from '../../../shared/hooks/useRequest';
import { useState } from 'react';
import { CreateUserType } from '../../../shared/types/CreateUserType';
import { current } from '@reduxjs/toolkit';
import { NativeSyntheticEvent, TextInputChangeEventData } from 'react-native';
import { URL_AUTH_REGISTER } from '../../../shared/constants/urls';
import { MethodsEnum } from '../../../shared/enums/methods-enum';
import { MenuURL } from '../../../shared/enums/menu-url.enum';

export const DEFAULT_CREATE_USER = {
    email: '',
    name: '',
    password: '',
};

export const useRegister = () => {
    const {request, loading} = useRequest();
    const { reset } = useNavigation<NavigationProp<ParamListBase>>();
    const [createUser, setCreateUser] = useState<CreateUserType>(DEFAULT_CREATE_USER);

    const handleChange = (e: NativeSyntheticEvent<TextInputChangeEventData>, name: string) => {
        // eslint-disable-next-line @typescript-eslint/no-shadow
        setCreateUser((current) => ({
            ...current,
            [name]: e.nativeEvent.text,
        }));
    };

    const handleRegister = async () => {
        const result = await request({
            url: URL_AUTH_REGISTER,
            method: MethodsEnum.POST,
            body: {
                ...createUser,
            },
        });

        if (result) {
            reset({
                index: 0,
                routes: [{ name: MenuURL.LOGIN }],
            });
        }
    };

    return {
        loading,
        createUser,
        handleChange,
        handleRegister,
    };
};
