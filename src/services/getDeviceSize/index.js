import { Dimensions } from 'react-native';
import { PADDING_HORIZONTAL } from "../../constants/themes";

const { width, height } = Dimensions.get('window');

const quoteHeight = 72;
const navigationalElementsHeight = 280;

export const deviceWidth = width - PADDING_HORIZONTAL * 2;
export const deviceHeight = Math.round(height);

export const quotesPerPage = Math.floor((deviceHeight - navigationalElementsHeight) / quoteHeight);
