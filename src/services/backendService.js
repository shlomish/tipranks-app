import axios from 'axios';
import { AUTO_COMPLETE_API_URL } from '../constants';
//import stocks from './stocks.json';

// set default axios settings
axios.defaults.timeout = 10 * 1000;

// private functions
const sendGetRequest = async (url) => {
    try {
        const response = await axios.get(url);
        return response.data;
    } catch (error) {
        // TODO: log error to server
        return undefined;
    }
}

const backend = {

    getAutoComplete: async (autoCompleteString) => {
        // If the string is undefined or empty, return undefined
        if (!autoCompleteString || autoCompleteString === '') return;
        const url = `${AUTO_COMPLETE_API_URL}${encodeURIComponent(autoCompleteString)}`;
        const results = await sendGetRequest(url);
        return results;

        // For offline work
        //return stocks;
    }

}

export default backend;