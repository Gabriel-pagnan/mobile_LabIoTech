import { SampleType } from './SampleType';

export interface UserType {
    id: number,
    name: string,
    email: string,
    samples: SampleType[]
}
