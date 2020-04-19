export const encodeSeparatedFields = fields => {
  const separatedFields = fields.join();

  return encodeURIComponent(separatedFields);
};

export const encodeSymbol = symbol => encodeURIComponent(symbol);

export const sortBySymbol = data =>
  data.sort((a, b) => a.symbol.localeCompare(b.symbol));

export const getDataListWithValues = (list = [], data) => {
  if (!data) return list;

  const { symbol, description, digits, ask, bid, change, change24h } = data;

  return list.map(item => {
    switch (item.title) {
      case 'Symbol':
        return { ...item, value: symbol };
      case 'Description':
        return { ...item, value: description };
      case 'Digits':
        return { ...item, value: digits };
      case 'Ask':
        return { ...item, value: ask };
      case 'Bid':
        return { ...item, value: bid };
      case 'Change':
        return { ...item, value: change };
      case 'Change 24h':
        return { ...item, value: change24h };
      default:
        return { ...item };
    }
  });
};

export const getDataForCurrentPage = (currentPage, dataList, listsPerPage) => {
  const indexOfLastItem = currentPage * listsPerPage;
  const indexOfFirstItem = indexOfLastItem - listsPerPage;

  const totalPages = Math.ceil(dataList.length / listsPerPage);
  const currentDataList = dataList.slice(indexOfFirstItem, indexOfLastItem);

  return [totalPages, currentDataList];
};

export const findQuotes = (search, quotesList) =>
  quotesList.filter(({ symbol }) => {
    const itemData = symbol.toUpperCase();
    const textData = search.toUpperCase();

    return itemData.match(textData);
  });
