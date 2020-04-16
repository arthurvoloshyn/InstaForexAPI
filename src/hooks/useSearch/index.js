import { useState } from 'react';

const useSearch = initialValue => {
    const [search, setSearch] = useState(initialValue);

    const updateSearch = value => {
        setSearch(value);
    };

    return [search, updateSearch];
};

export default useSearch;
