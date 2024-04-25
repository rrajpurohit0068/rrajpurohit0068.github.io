import React from 'react';

import styled from 'styled-components';
import moment from 'moment'
import { Badges } from '../utils/Badges';
import { CardImg } from '../utils/CardImg'
import { Typing } from '../utils/Typing';
import OpenInNewIcon from '@mui/icons-material/OpenInNew';

import CorporateFareIcon from '@mui/icons-material/CorporateFare';

import Tooltip from '@mui/material/Tooltip'


const Container = styled.a`

`
const Title = styled.h2`
    display: flex;
    align-items: center;
    
`
const SubTitle = styled.div`
`
const Content = styled.div`
`
const Period = styled.div`
`
const A = styled.a`
    display: flex;
    margin-left: 10px;
`
const RenderPeriod = ({ months }) => {
    if (months % 12) {
        return '( ' + Math.floor(months / 12) + '.' + months % 12 + '+ YOE' + ' )'
    }
    return '( ' + months / 12 + '+ YOE )'
}

const RenderDate = ({ start, end, is_current }) => {
    return start.format('YYYY-MMM') + ' - ' + (is_current ? 'Present' : end.format('YYYY-MMM')) + ' '
}

export const Card = (
    { company, domain, loc_name, location, link, workdetails, }
) => {

    const compnayLogo = () => {

        return <CorporateFareIcon color="orange" icon="corporate_fare" />

    }
    return <Container>
        <Title>
            <Tooltip title={loc_name}>
                {company}

            </Tooltip>
            {link ? <A href={link} target='__blank'>
                <OpenInNewIcon />
            </A> : null}
        </Title>


        <SubTitle>
            {domain}
        </SubTitle>
        <Badges badges={workdetails || []} />
    </Container>
}