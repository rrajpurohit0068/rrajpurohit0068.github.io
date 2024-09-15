import React from 'react';

import styled from 'styled-components';
import { data } from '../../../api/work';
import { Card } from './Card';
import { Title } from '../utils/Title';
import { WorkHistoryOutlined } from '@mui/icons-material'
import { SvgAnimation } from '../svg-animation';
const Container = styled.div`
`


const Content = styled.div`
    display: flex;
    flex-wrap: wrap;
`

export const Experience = () => {
    console.log(data);
    return <Container>
        <Title>
            <SvgAnimation>
                <WorkHistoryOutlined />
            </SvgAnimation>
            EXPERIENCE (~ 6 YEARS OF EXPERIENCE)
        </Title>
        <Content>
            {
                data.map((info) => {
                    return <Card {...info} />
                })
            }
        </Content>
    </Container>
}
