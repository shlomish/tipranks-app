import { UPDATE_AUTOCOMPLETE } from '../actions/types';
import backend from '../services/backendService';
import utils from '../utils';

export const getAutoCompleteAction = (autoCompleteString) => async (dispatch) => {
    const allResults = await backend.getAutoComplete(autoCompleteString);
    const results = allResults ? utils.getRelevantStocks(allResults) : [];
    const payload = {
        searchString: autoCompleteString,
        results
    }
    dispatch({ type: UPDATE_AUTOCOMPLETE, payload });
}