import React from 'react';

import styled from 'styled-components';
import moment from 'moment'
import CorporateFareIcon from '@mui/icons-material/CorporateFare';

import Tooltip from '@mui/material/Tooltip'
import { CardImg } from '../utils/CardImg'
import { WorkCard } from '../utils/WorkCard'
import OpenInNewIcon from '@mui/icons-material/OpenInNew';




const Container = styled.div`


`
const Title = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
`
const SubTitle = styled.div`
`
const Content = styled.div`
`
const Period = styled.div`
`
const ImageContainer = styled.div`
    height: 100px;;
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
    return start.format('MMM-YYYY') + ' to ' + (is_current ? 'Present' : end.format('MMM-YYYY')) + ' '
}

export const Card = (
    { company, company_type, join_date, profile, end_date, is_current, img, link }
) => {
    const [jday, jmonth, jyear] = (join_date + '').split('/');
    const [eday, emonth, eyear] = (end_date || '').split('/');
    const start = moment([jyear, jmonth -1, jday]);
    const end = is_current ? moment() : moment([eyear, emonth -1, eday]);
    console.log(end, start, join_date.slice('/'))
    const months = end.diff(start, 'month');
    console.log({join_date, end_date, start, end, company, d: RenderDate({start, end, is_current})})


    return <Container>
        <WorkCard
            is_current={is_current}
            title={<Title>
                <Tooltip title={company_type}>

                    {company} {' '}
                </Tooltip>
                <A href={link} target='__blank'>
                    <OpenInNewIcon />
                </A>

            </Title>
            }
            subtitle={
                <SubTitle>
                    {profile}
                    <Period>
                        <RenderDate start={start} end={end} is_current={is_current} />
                        <RenderPeriod months={months} />
                    </Period>
                </SubTitle>}
            imgUrl={require(`../../../images/${img}`)}
            imageTitle={company}
        />

    </Container>
}