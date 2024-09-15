import React from 'react';
import styled from 'styled-components';
import { data } from '../../../api/project';
import { Card } from './Card';
import { Title } from '../utils/Title';

const Container = styled.div`
`

const SubTitle = styled.h3`
`

export const Project = () => {
    return <Container>
        <Title>


            Projects
        </Title>
        {data.map((info) => {
            return <Card  {...info} />
        })}
    </Container>
}
