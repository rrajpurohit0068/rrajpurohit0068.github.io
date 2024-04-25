import React from 'react';

import styled from 'styled-components';
import { data } from '../../../api/skills';
import { Card } from './Card';
import { Title } from '../utils/Title';
const Container = styled.div`
`

export const Skills = () => {
    return <Container>
        <Title>
            SKILLS
        </Title>
        {data.map((skills) => {
            return skills.map((info) => {
                return <Card {...info} />
            })
        })}
    </Container>
}
