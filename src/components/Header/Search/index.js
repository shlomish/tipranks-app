import React, { useState, useEffect, useCallback } from 'react';
import { useDispatch } from 'react-redux';
import { debounce } from 'lodash';
import { getAutoCompleteAction } from '../../../actions/appActions';
import TextInput from './TextInput';
import { CLEARE_SEARCH_RESULTS } from '../../../actions/types';

const Search = () => {
    const dispatch = useDispatch();
    const [text, setText] = useState('');

    // Connect actions
    const getAutoComplete = (searchText) => dispatch(getAutoCompleteAction(searchText));

    // Functions
    const debouncedAutoComplete = useCallback(
        debounce((search) => {
            getAutoComplete(search);
        }, 1000), []);

    // Events
    useEffect(() => {
        if (text.length === 0) {
            dispatch({ type: CLEARE_SEARCH_RESULTS });
        } else {
            debouncedAutoComplete(text);
        }
    }, [text]);

    return (
        <TextInput
            onTyping={(value) => setText(value)}
        />
    )
}

export default Search;
