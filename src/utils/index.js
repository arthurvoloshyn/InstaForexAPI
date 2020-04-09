export const encodeSeparatedFields = fields => {
    const separatedFields = fields.join(',');

    return encodeURIComponent(separatedFields);
};

export const encodeSymbol = symbol => encodeURIComponent(symbol);

export const sortBySymbol = data => data.sort((a, b) => a.symbol.localeCompare(b.symbol));
