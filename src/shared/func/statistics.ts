import { SampleType } from '../types/SampleType';

//media
export const meTemperature = (sample: SampleType[]) => {
    const sumTemp = sample.reduce((accumulator, currentValue) => accumulator + Number(currentValue.temperature), 0);
    const meTemp = sumTemp / sample.length;

    return meTemp.toFixed(2);
};

export const mePh = (sample: SampleType[]) => {
    const sumPH = sample.reduce((accumulator, currentValue) => accumulator + Number(currentValue.ph), 0);
    const mePH = sumPH / sample.length;

    return mePH.toFixed(2);
};

//mediana
export const medianTem = (samples: SampleType[]) => {
    const sortedTemps = samples.map(sample => sample.temperature).sort((a, b) => Number(a) - Number(b));
    const middleTempIndex = Math.floor(sortedTemps.length / 2);
    let median;

    if (sortedTemps.length % 2 === 0) {
        median = Number(sortedTemps[Number(middleTempIndex) - 1]) + Number(sortedTemps[Number(middleTempIndex)]) / 2;
    } else {
        median = sortedTemps[middleTempIndex];
    }

    return median;
};

export const medianPh = (samples: SampleType[]) => {
    const sortedPh = samples.map(sample => sample.ph).sort((a, b) => Number(a) - Number(b));
    const middlePhIndex = Math.floor(sortedPh.length / 2);
    let median;

    if (sortedPh.length % 2 === 0) {
        median = Number(sortedPh[Number(middlePhIndex) - 1]) + Number(sortedPh[Number(middlePhIndex)]) / 2;
    } else {
        median = sortedPh[middlePhIndex];
    }
    return median;
};

//moda
export const modaTemp = (samples: SampleType[]) => {
    const sortedTemps = samples.map(sample => sample.temperature).sort((a, b) => Number(a) - Number(b));
    const modaT = sortedTemps.reduce((a, b, _, arr) => Number(arr.filter(v => Number(v) === a).length >= arr.filter(v => v === b).length ? a : b), 0);

    return modaT;
};

export const modaPh = (samples: SampleType[]) => {
    const sortedPh = samples.map(sample => sample.ph).sort((a, b) => Number(a) - Number(b));
    const modaPH = sortedPh.reduce((a, b, _, arr) => Number(arr.filter(v => Number(v) === a).length >= arr.filter(v => v === b).length ? a : b), 0);

    return modaPH;
};

//DP
export const dpTemperature = (samples: SampleType[]) => {
    const sortedTemps = samples.map(sample => sample.temperature).sort((a, b) => Number(a) - Number(b));
    const sumTemp = samples.reduce((accumulator, currentValue) => accumulator + Number(currentValue.temperature), 0);
    const meTemp = sumTemp / samples.length;
    const arrVarianciaTemp = sortedTemps.map(item => Math.pow(Number(item) - Number(meTemp), 2));
    const medVarianciaTemp = arrVarianciaTemp.reduce((accumulator, currentValue) => accumulator + Number(currentValue), 0) / (arrVarianciaTemp.length - 1);
    const dpTemp = Math.sqrt(medVarianciaTemp);

    return dpTemp.toFixed(3);
};

export const dpPh = (samples: SampleType[]) => {
    const sortedPh = samples.map(sample => sample.ph).sort((a, b) => Number(a) - Number(b));
    const sumPh = samples.reduce((accumulator, currentValue) => accumulator + Number(currentValue.ph), 0);
    const mePH = sumPh / samples.length;
    const arrVarianciaTemp = sortedPh.map(item => Math.pow(Number(item) - Number(mePH), 2));
    const medVarianciaTemp = arrVarianciaTemp.reduce((accumulator, currentValue) => accumulator + Number(currentValue), 0) / (arrVarianciaTemp.length - 1);
    const dpPH = Math.sqrt(medVarianciaTemp);

    return dpPH.toFixed(3);
};


export const assPh = (samples: SampleType[]) => {
    const media = samples.reduce((accumulator, currentValue) => accumulator + Number(currentValue.ph), 0);

    // Calcular a mediana
    const sortedPh = samples.map(sample => sample.ph).sort((a, b) => Number(a) - Number(b));
    const middlePhIndex = Math.floor(sortedPh.length / 2);
    let median;

    if (sortedPh.length % 2 === 0) {
        median = Number(sortedPh[Number(middlePhIndex) - 1]) + Number(sortedPh[Number(middlePhIndex)]) / 2;
    } else {
        median = sortedPh[middlePhIndex];
    }
    // Calcular o desvio padrão
    const dp = Math.sqrt(samples.reduce((soma, currentValue) => soma + Math.pow(Number(currentValue.ph) - media, 2), 0) / samples.length);

    // Calcular a assimetria usando a fórmula de Pearson
    const assimetria = (3 * (media - Number(median))) / dp;

    return assimetria.toFixed(3);
};

export const assTemperature = (samples: SampleType[]) => {
    const media = samples.reduce((accumulator, currentValue) => accumulator + Number(currentValue.temperature), 0);

    // Calcular a mediana
    const sortedTemp = samples.map(sample => sample.temperature).sort((a, b) => Number(a) - Number(b));
    const middleTempIndex = Math.floor(sortedTemp.length / 2);
    let median;

    if (sortedTemp.length % 2 === 0) {
        median = Number(sortedTemp[Number(middleTempIndex) - 1]) + Number(sortedTemp[Number(middleTempIndex)]) / 2;
    } else {
        median = sortedTemp[middleTempIndex];
    }
    // Calcular o desvio padrão
    const dp = Math.sqrt(samples.reduce((soma, currentValue) => soma + Math.pow(Number(currentValue.temperature) - media, 2), 0) / samples.length);

    // Calcular a assimetria usando a fórmula de Pearson
    const assimetria = (3 * (media - Number(median))) / dp;

    return assimetria.toFixed(3);
};
