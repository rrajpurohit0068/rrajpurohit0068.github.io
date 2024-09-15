import React from 'react';
import styled from 'styled-components';
import { Title } from '../utils/Title';
import { SummarizeOutlined } from '@mui/icons-material'
import { SvgAnimation } from '../svg-animation';
const Container = styled.div`
`

const SubTitle = styled.h3`
`
const Content = styled.p``
export const Summary = () => {
    return <Container>
        <Title>
            <SvgAnimation>
                <SummarizeOutlined />
            </SvgAnimation>
            SUMMARY</Title>
        <SubTitle>Full Stack Software Engineer (Javascript | ReactJS | Python | Django Rest Framework ) | SDE 3 | ~ 6 YOE | Problem Solving | Contributor</SubTitle>
        <Content>
            Talented Software Developer equipped with great coding, debugging and project
            management abilities. Accomplishes project goals consistently with elegant, scalable
            code. Works great with team members under Agile and Scrum frameworks.
        </Content>
    </Container>
}
