// To make the contents responsive
import { Dimensions } from 'react-native';

const { height, width } = Dimensions.get('window');

const standardheight = 640;
const standardwidth = 360;

const dH = (h) => Math.fround((height / standardheight) * h);

const dW = (w) => Math.fround((width / standardwidth) * w);

export const dS = (s) => Math.fround(dH(s) * dW(s));


export { dH, dW };
