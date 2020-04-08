import { COMMA } from '../constants/signs';

export const encodeSeparatedFields = fields => {
    const separatedFields = fields.join(COMMA);

    return encodeURIComponent(separatedFields);
};

export const encodeSymbol = symbol => encodeURIComponent(symbol);
