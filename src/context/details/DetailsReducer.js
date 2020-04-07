import { FETCH_QUOTE, FETCH_QUOTES, FILTER_BY_SEARCH, PAGINATE_INIT, PAGINATE_NEXT, PAGINATE_PREV } from "../types";

export const DetailsReducer = (state, action) => {
  switch (action.type) {
    case FETCH_QUOTES: {
      let startIndex = state.startIndex;
      let lastIndex = state.lastIndex;
      return {
        ...state,
        quotes: [
          ...action.payload
        ],
        quotesFiltered: [
          ...action.payload.filter((quote, idx) => (idx >= startIndex && idx < lastIndex))
        ],
      }
    }

    case FILTER_BY_SEARCH: {
      const matchesFilter = new RegExp(action.payload, 'i')

      return {
        ...state,
        quotesFiltered: action.payload.length === 0
          ? [
            ...action.payload.filter((quote, idx) => (idx >= 0 && idx < state.itemsPerPage))
          ]
          : [
            ...state.quotes.filter(quote => matchesFilter.test(quote.symbol))
          ],
        startIndex: 0,
        lastIndex: state.itemsPerPage,
      }
    }

    case PAGINATE_PREV: {
      let startIndex = (state.startIndex - state.itemsPerPage) < 0
        ? 0
        : (state.startIndex - state.itemsPerPage);

      let lastIndex = (state.lastIndex - state.itemsPerPage) < state.itemsPerPage
        ? state.itemsPerPage
        : state.lastIndex - state.itemsPerPage;

      return {
        ...state,
        quotesFiltered: [
          ...state.quotes.filter((quote, idx) => (idx >= startIndex && idx < lastIndex))
        ],
        startIndex,
        lastIndex
      }
    }

    case PAGINATE_NEXT: {
      let startIndex = (state.startIndex + state.itemsPerPage) > state.quotes.length
        ? state.startIndex
        : (state.startIndex + state.itemsPerPage);

      let lastIndex = (state.lastIndex + state.itemsPerPage) > state.quotes.length
        ? state.quotes.length
        : (state.lastIndex + state.itemsPerPage);

      return {
        ...state,
        quotesFiltered: [
          ...state.quotes.filter((quote, idx) => (idx >= startIndex && idx < lastIndex))
        ],
        startIndex,
        lastIndex
      }
    }

    case PAGINATE_INIT: {
      return {
        ...state,
        startIndex: action.payload.startIndex,
        lastIndex: action.payload.lastIndex,
        itemsPerPage: action.payload.itemsNumber
      }
    }

    case FETCH_QUOTE: {
      return {
        ...state,
        quote: [
          ...action.payload
        ],
      }
    }

    default:
      return state;
  }
};