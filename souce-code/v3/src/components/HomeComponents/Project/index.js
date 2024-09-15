import React from 'react';
import styled from 'styled-components';
import { data } from '../../../api/project';
import { Card } from './Card';
import { Title } from '../utils/Title';
import { ConstructionOutlined } from '@mui/icons-material'
import { SvgAnimation } from '../svg-animation';

const Container = styled.div`
`

const SubTitle = styled.h3`
`

export const Project = () => {
    return <Container>
        <Title>
            <SvgAnimation>
                <ConstructionOutlined />
            </SvgAnimation>

            Projects
        </Title>
        {data.map((info) => {
            return <Card  {...info} />
        })}
    </Container>
}
