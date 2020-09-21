import React from 'react'
import styled from 'styled-components';
import { bigFontSize } from '../../../Shared/styles';

const StyledInput = styled.input`
    width: 60vw;
    height: 5vh;
    border-radius: 4px;
    font-family: 'Do Hyeon', sans-serif;
    ${bigFontSize}
`;

const TextInput = ({ onTyping }) => {

    const onTextTyping = ({ target }) => {
        if (onTyping) {
            const { value } = target;
            onTyping(value);
        }
    }

    return (
        <StyledInput
            onChange={onTextTyping}
        />
    )
}

export default TextInput
