import { useState } from 'react';

const useSearch = initialSearch => {
    const [search, setSearch] = useState(initialSearch);

    const updateSearch = value => {
        setSearch(value);
    };

    return [search, updateSearch];
};

export default useSearch;
