
import React from 'react';
import Button from '@mui/material/Button';
import styled from './loader.module.scss';
import SendIcon from '@mui/icons-material/Send';
import { useLocation } from "react-router-dom";

export const Loader = ({ setLoader }) => {
    const location = useLocation()

    React.useEffect(() => {
        const body = document.getElementsByTagName('body')[0];
        body.classList.add('bg-img')
        return () => {
            const body = document.getElementsByTagName('body')[0];
            body.classList.remove('bg-img')
            
        }
    }, [])
    return <div  className={styled.button}>
<Button style={{ background: '#483d8b', color: 'white' }} endIcon={<SendIcon />} href={`#/profile${location.search}`} variant="contained">Go to Profile</Button>
    </div> 
    
    
}