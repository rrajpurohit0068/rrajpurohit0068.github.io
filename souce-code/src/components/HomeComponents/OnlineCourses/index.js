import React from 'react';
import styled from 'styled-components';
import { Badges } from '../utils/Badges';
import { data } from '../../../api/online_courses';
import { Title } from '../utils/Title';
const Container = styled.div`
`


export const OnlineCourses = () => {
    return <Container>
        <Title>
            ONLINE COURSES COMPLETION
        </Title>
        <Badges badges={data.map(({ title }) => (title))} />
    </Container>
}
