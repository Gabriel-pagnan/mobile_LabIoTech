import { RouteProp, useRoute } from '@react-navigation/native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { useEffect, useState } from 'react';
import { useSampleReducer } from '../../redux/reducer/sample-reducer/useSampleReducer';
import { URL_SAMPLE } from '../constants/urls';
import { useRequest } from './useRequest';
import { MethodsEnum } from '../enums/methods-enum';

export type NavigationProp = NativeStackNavigationProp<Record<string, ISearchParams>>;

export interface ISearchParams {
    search?: string
}

export const useSample = () => {
    const { request, loading } = useRequest();
    const { params } = useRoute<RouteProp<Record<string, ISearchParams>>>();
    const [value, setValue] = useState<string>(params?.search || '');
    const { sample, setSample } = useSampleReducer();

    useEffect(() => {
        setValue(params?.search || '');
    }, [params]);

    useEffect(() => {
        request({
            url: URL_SAMPLE,
            method: MethodsEnum.GET,
            saveGlobal: setSample,
        });
    }, []);

    return {
        value,
        sample,
        loading,
    };
};
