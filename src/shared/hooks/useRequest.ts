import { useState } from 'react';
import { NavigationProp, ParamListBase, useNavigation } from '@react-navigation/native';
import { MenuURL } from '../enums/menu-url.enum';
import ConnectionAPI, { MethodType, connectionAPIPost } from '../connection/conection-api';
import { URL_AUTH } from '../constants/urls';
import { AuthLoginType } from '../types/AuthLoginType';
import { ReturnLoginType } from '../types/ReturnLogin';
import { useUserReducer } from '../../redux/reducer/user-reducer/useUserReducer';
import { setAthorizationToken } from '../connection/auth';

interface IRequestProps<T, B = unknown> {
    url: string,
    method: MethodType,
    saveGlobal?: (object: T) => void,
    body?: B,
}

export const useRequest = () => {
    const { setUser } = useUserReducer();
    const [loading, setLoaging] = useState<boolean>(false);
    const { reset } = useNavigation<NavigationProp<ParamListBase>>();

    const request = async <T, B = unknown>({ url, method, body, saveGlobal }: IRequestProps<T, B>): Promise<T | undefined> => {
        setLoaging(true);
        const returnObject: T | undefined = await ConnectionAPI.connect<T, B>(url, method, body)
            .then((result) => {
                if (saveGlobal) { saveGlobal(result); }
                return result;
            })
            .catch((error: Error) => {
                console.log(error);
                return undefined;
            });
        setLoaging(false);

        return returnObject;
    };

    const authRequest = async (body: AuthLoginType) => {
        setLoaging(true);
        await connectionAPIPost<ReturnLoginType>(URL_AUTH, body)
            .then((result) => {
                setAthorizationToken(result.token);
                setUser(result.user);
                reset({
                    index: 0,
                    routes: [{ name: MenuURL.TAB_ROUTES }],
                });
            })
            .catch(() => {
                return undefined;
            });
        setLoaging(false);
    };

    return {
        loading,
        request,
        authRequest,
    };
};
