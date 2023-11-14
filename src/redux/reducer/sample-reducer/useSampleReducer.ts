import { setSampleActions } from '.';
import { useDispatch } from 'react-redux';
import { useAppSelector } from '../../hooks';
import { SampleType } from '../../../shared/types/SampleType';

export const useSampleReducer = () => {
    const dispatch = useDispatch();
    const { sample } = useAppSelector((state) => state.sampleReducer);

    const setSample = (currentSample: SampleType[]) => {
        dispatch(setSampleActions(currentSample));
    };

    return {
        sample,
        setSample,
    };
};
