import React from 'react';

import styled from 'styled-components';
import { Title } from '../utils/Title';
import {  SchoolOutlined } from '@mui/icons-material'
import { SvgAnimation } from '../svg-animation';

const Container = styled.div``;


const Content = styled.p``;

export const Education = () => {
  return (
    <Container>
      <Title>
        <SvgAnimation>
          <SchoolOutlined />
        </SvgAnimation>
        Education</Title>
      <Content>B.E Computer Engineering from Pune University</Content>
    </Container>
  );
};
