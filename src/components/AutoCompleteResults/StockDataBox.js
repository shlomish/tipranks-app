import React from 'react';
import styled, { css } from 'styled-components';
import utils from '../../utils';
import { UID, TICKER } from '../../constants';
import { greenBoxShadow, lightGreenColor } from '../../Shared/styles';

const StyledBox = styled.div`
    border: 3px solid white;
    border-radius: 4px;
    padding: 8px;
    display: grid;
    justify-content: left;
    &:hover {
        cursor: pointer;
        border: 3px solid ${lightGreenColor};
        ${greenBoxShadow}
    }
`;

const DetailRow = styled.div`
    display: grid;
    grid-template-columns: 80px 1fr;
    margin: 2px;
    ${props => props.isUid && css`
        color: ${lightGreenColor}
    `}
`;

function StockDataBox({ stock, onClick }) {
    const stockKeys = Object.keys(stock);

    // Events
    const onUidClick = (event, uid) => {
        event.stopPropagation();
        alert(`${UID}: ${uid}`);
    }

    const onBoxClicked = () => {
        if (onClick) onClick();
    }

    return (
        <StyledBox onClick={onBoxClicked}>
            {
                stockKeys.map((sKey, index) => {
                    if (sKey === TICKER) return;
                    const isUid = (sKey === UID);
                    let value = stock[sKey];
                    if (isUid) value = utils.fixUid(value);

                    return (
                        <DetailRow
                            key={`${sKey}_${index}`}
                            isUid={isUid}
                            onClick={isUid ? (e) => onUidClick(e, stock[sKey]) : ''}
                        >
                            <div>{sKey}:</div>
                            <div>{value}</div>
                        </DetailRow>
                    )
                })
            }
        </StyledBox>
    )
}

export default StockDataBox
