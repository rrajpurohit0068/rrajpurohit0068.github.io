import React from 'react';

import styled from 'styled-components';
import Chip from '@mui/material/Chip'


const RenderBadgesContainer = styled.div`
    display: flex;
    flex-wrap: wrap;
    & > * {
        margin: 10px;
    }
`
const Badge = styled(Chip)`
font-weight: bold;
`

export const Badges = ({ badges }) => {
    console.log(badges)
    return <RenderBadgesContainer>
        {badges.map((badge) => (<Badge label={badge} />))}
    </RenderBadgesContainer>
}

