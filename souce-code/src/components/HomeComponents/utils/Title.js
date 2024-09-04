import React from 'react';
import styled from 'styled-components';

const TitleWrapper = styled.h2`
    border-block: 1px solid black;
    color: indigo;
    text-transform: uppercase;
`


export const Title = ({ children }) => {
    return <TitleWrapper>
        {children}
    </TitleWrapper>
}