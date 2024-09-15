import logo from './logo.svg';
import './App.css';
import '@fontsource/roboto/300.css';
import '@fontsource/roboto/400.css';
import '@fontsource/roboto/500.css';
import '@fontsource/roboto/700.css';
import styled from 'styled-components';
import "animate.css/animate.min.css";
import ScrollAnimation from 'react-animate-on-scroll';
import React from 'react';



import { Education } from './components/HomeComponents/Education';
import { Experience } from './components/HomeComponents/Experience';
import { OnlineCourses } from './components/HomeComponents/OnlineCourses';
import { PersonalInfo } from './components/HomeComponents/PersonalInfo';
import { Project } from './components/HomeComponents/Project';
import { Skills } from './components/HomeComponents/Skills';
import { Summary } from './components/HomeComponents/Summary';
import { Typing } from './components/HomeComponents/utils/Typing';
import { Loader } from './Loader2';
import { Search } from './Seach';

const AppWrapper = styled.div`
  margin: 0 auto;
  display: flex;
  min-height: 100%;
  flex-direction: column;
  background: linear-gradient(45deg, #6fc7b5 0%,#13bdce 20%);
  padding: 4rem;
  animation: gradient 2.5*2s ease-in-out infinite;

`;

const TypingWrapper = styled.div`
@media (max-width:320px)  { 

  /* smartphones, iPhone, portrait 480x320 phones */ }
@media (max-width:481px)  { /* portrait e-readers (Nook/Kindle), smaller tablets @ 600 or @ 640 wide. */ }
@media (max-width:641px)  { /* portrait tablets, portrait iPad, landscape e-readers, landscape 800x480 or 854x480 phones */ }
@media (max-width:961px)  { 
  min-height: 470px;
  height: max-content;
  /* tablet, landscape iPad, lo-res laptops ands desktops */ }
@media (max-width:1025px) { /* big landscape tablets, laptops, and desktops */ }
@media (max-width:1281px) { 
  

  /* hi-res laptops and desktops */ }

`


export function Home() {
  
  return (
    <AppWrapper>
      <TypingWrapper>

        <Typing sequence={[
          'Rajiv Rajpurohit.',
          1500,
          '',
          'Full Stack Software Engineer',
          1500,
          '',
          'ReactJS | Python | Django Rest Framework',
          1500,
          '',
          'Software Engineer 3 @ 6sense.com',
          1500,
          '',
          '~ 6 YOE',
          1500,
          '',
          'Computer Engineering @ Pune University',
          1500,
          '',
          'Problem Solving | Contribution',
          1500,
          '',
        ]}>

        </Typing>
      </TypingWrapper>

      <div>

        <PersonalInfo />
        <Summary />
        <OnlineCourses />
        <Skills />
        <Education />
        <Experience />
        <Project />





      </div>
    </AppWrapper>
  );
}


