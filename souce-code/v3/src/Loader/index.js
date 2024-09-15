import React from 'react';
import styled from './loader.module.scss';
export const Loader = () => {
    return <div className={styled.loading}>
        <img className={styled.img} src={require('./penguin-waiting.gif')}></img>

    </div>
}