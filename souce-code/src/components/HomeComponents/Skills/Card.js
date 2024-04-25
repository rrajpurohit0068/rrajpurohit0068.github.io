import React from 'react';

import styled from 'styled-components';

import { Badges } from '../utils/Badges';


const Container = styled.div`
`

const RenderTimeContainer = styled.span`
    font-style: italic;
`

const SubTitle = styled.h4`
`



const RenderTime = ({ is_plus, time }) => {
    return <RenderTimeContainer>
        {" " + time + (is_plus ? '+' : '') + ' YOE'}
    </RenderTimeContainer>
}


export const Card = ({ is_plus, skills, time, title }) => {
    return <Container>
        <SubTitle>
            {title}
            <RenderTime is_plus={is_plus} time={time} />
        </SubTitle>
        <Badges badges={skills} />
    </Container>
}