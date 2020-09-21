import { UPDATE_AUTOCOMPLETE, CLEARE_SEARCH_RESULTS } from '../actions/types';

const initialState = {
    autoCompleteResults: [],
    lastSearchString: ''
};

const appReducer = (state = initialState, { type, payload }) => {
    switch (type) {

        case UPDATE_AUTOCOMPLETE: {
            const { searchString, results } = payload;
            const isPrevSearch = state.lastSearchString.includes(searchString);
            const isWithMoreResults = results.length > state.autoCompleteResults.length;
            if (isPrevSearch && !isWithMoreResults) return state;
            return {
                ...state,
                autoCompleteResults: results,
                lastSearchString: searchString
            }
        }

        case CLEARE_SEARCH_RESULTS: {
            return {
                ...state,
                autoCompleteResults: [],
                lastSearchString: ''
            }
        }

        default:
            return state;
    }
}

export default appReducer;