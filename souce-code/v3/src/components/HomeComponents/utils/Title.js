import React from 'react';
import styled from 'styled-components';
import { withIsVisible } from 'react-is-visible'

const TitleWrapper = styled.h2`
    color: indigo;
    text-transform: uppercase;
        display: flex;
    align-items: center;
    transform: ${props => props.isVisible ?  'translateX(0px)' : 'translateX(-100%)'};
      transition: all 0.5s ease-out;
      margin-block: 0;

` 

const Container = styled.div`
    border-block: 1px solid black;
    margin-block: 20px;
`
export const Title = withIsVisible(({ children, isVisible }) => {
    return <Container>
        <TitleWrapper isVisible={isVisible}>
        {children}
    </TitleWrapper>
    </Container>
})