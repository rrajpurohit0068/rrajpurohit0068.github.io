import styled from 'styled-components';
import { TypeAnimation } from 'react-type-animation';
import React from 'react';

const TypeAnimationWrapper = styled.div`
  display: flex;
  justify-content: center;
    align-items: center;

`




export const Typing = ({ sequence, classNames }) => {
  return (
    <TypeAnimationWrapper>
      <TypeAnimation
        sequence={sequence}
        wrapper="h1"
        cursor={true}
        repeat={Infinity}
        style={{
          fontSize: '4em',
          display: 'block',

        }}

      />
    </TypeAnimationWrapper>

  );
};
