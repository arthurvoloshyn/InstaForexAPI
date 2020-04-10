import { Dimensions } from 'react-native';
import { PADDING_HORIZONTAL } from "../../constants/themes";

const { width, height } = Dimensions.get('window');

export const deviceWidth = width - PADDING_HORIZONTAL * 2;
export const deviceHeight = Math.round(height);
