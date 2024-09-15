import React from 'react';
import styled from 'styled-components';

const Img = styled.img`
    width: 100%;
    height: 100%;

`

export const CardImg = ({ link }) => {
    return <Img src={require(`../../../images/${link}`)} />
}