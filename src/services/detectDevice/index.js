import { Platform } from "react-native";

const { OS } = Platform;

export const isAndroid = OS === 'android';
export const isIOS = OS === 'ios';
