import React from 'react';
import styled from 'styled-components';
import Search from './Search';

const HeaderWrapper = styled.div`
    display: flex;
    justify-content: center;
    padding-top: 6vh
`;

const Header = () => {
    return (
        <HeaderWrapper>
            <Search />
        </HeaderWrapper>
    )
}

export default Header;
