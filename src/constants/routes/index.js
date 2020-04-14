export const HOME_SCREEN = 'QuotesList';
export const DETAILS_SCREEN = 'Details';

export const HOME_OPTIONS = { title: 'InstaForex' };
export const DETAILS_OPTIONS = ({ route: { params: { symbol } } }) => ({ title: symbol });
