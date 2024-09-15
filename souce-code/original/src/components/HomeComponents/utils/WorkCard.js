import * as React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import styled from 'styled-components';

const CardWrapper = styled(Card)`
    margin: 1rem;
    padding: 1rem;
    background: #CD594A!important;
    color: white!important;
    transition: ease 0.5s all!important;
    
    &:hover {
        transform: scale(1.1) !important;
    }
    border: ${props => props.is_current ? '3px solid #F58B4C !important' : 'inital'}
`

const CardMediaWrapper = styled(CardMedia)`
background-size: contain !important;
`

export function WorkCard({ imgUrl, title, subtitle, learnMore, imageTitle, is_current }) {
  return (
    <CardWrapper is_current={is_current}>
      <CardMediaWrapper
        sx={{ height: 140 }}
        image={imgUrl}
        title={imageTitle}

      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          {title}
        </Typography>
        <Typography variant="body2" color="white">
          {subtitle}
        </Typography>
      </CardContent>
    </CardWrapper>
  );
}
