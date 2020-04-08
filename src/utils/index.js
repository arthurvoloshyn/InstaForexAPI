import { COMMA } from '../constants/signs';

export const encodeSeparatedFields = fields => {
    const separatedFields = fields.join(COMMA);

    return encodeURIComponent(separatedFields);
};

export const encodeSymbol = symbol => encodeURIComponent(symbol);

export const sortBySymbol = data => data.sort((a, b) => a.symbol.localeCompare(b.symbol));
