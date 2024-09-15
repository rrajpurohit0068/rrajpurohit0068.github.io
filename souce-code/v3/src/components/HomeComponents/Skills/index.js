import React from 'react';

import styled from 'styled-components';
import { data } from '../../../api/skills';
import { Card } from './Card';
import { Title } from '../utils/Title';
import { EngineeringOutlined } from '@mui/icons-material'
import { SvgAnimation } from '../svg-animation';
const Container = styled.div`
`

export const Skills = () => {
    return <Container>
        <Title>
            <SvgAnimation>
                <EngineeringOutlined />
            </SvgAnimation>
            SKILLS
        </Title>
        {data.map((skills) => {
            return skills.map((info) => {
                return <Card {...info} />
            })
        })}
    </Container>
}
