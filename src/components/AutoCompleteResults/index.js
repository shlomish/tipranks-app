import React from 'react';
import { useSelector } from 'react-redux';
import styled from 'styled-components';
import StockDataBox from './StockDataBox';

const StyledResults = styled.div`
    margin-top: 10vh;
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(350px, 1fr));
    grid-gap: 10px
`;

const AutoCompleteResults = () => {
    const { autoCompleteResults } = useSelector(state => state.app);

    // Events
    const onStockBoxClick = (index, stockName) => {
        alert(`You clicked on ${stockName}, stock box number ${index + 1}`);
    }

    return (
        <StyledResults>
            {
                autoCompleteResults && autoCompleteResults.map((res, index) => (
                    <StockDataBox
                        onClick={() => onStockBoxClick(index, res.label)}
                        key={`stock_${res.uid}`}
                        stock={res}
                    />
                ))
            }
        </StyledResults>
    )
}

export default AutoCompleteResults;
