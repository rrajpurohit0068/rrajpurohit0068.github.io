import React from 'react';
import styled from 'styled-components';

// const Container = styled.div`
// diplay: flex;
// margin-inline: 10px;
//     path {
//   animation: ani${prop => prop.uid} 1.5s alternate infinite;
//   stroke: black;
//   stroke-dasharray: ${prop => prop.length};
//   fill: none;
//     }
//     @keyframes ani${prop => prop.uid} {
//     0% {
//         stroke-dashoffset: ${prop => prop.length};
//     }
//     100% {
//         stroke-dashoffset: 0;
//     }
//     }
// `


const Container = styled.div`
display: flex;
margin-inline: 10px;
    path {
  animation: ani 1.5s alternate infinite;
  transform-origin: 50% 50%;
    }
    @keyframes ani {
    0% {
        transform: scale(0.5)
    }
    100% {
        transform: scale(1)
    }
    }
`

export const SvgAnimation = ({ children }) => {
    // const divRef = React.useRef(null)
    // const [len,setLen] = React.useState(0);
    // React.useEffect(() => {
    //     if (divRef.current) {
    //         // const svgImg = 
    //         const svgImg = divRef.current
    //         let totalLen = 0;
    //         for (let path of svgImg.querySelector('svg')?.querySelectorAll('path') || []) {
    //             // alert('got it')
    //             // path.classList.add('svgAnimation');
    //             totalLen = Math.max(path.getTotalLength(), totalLen)
    //         }
            
    //         setLen(totalLen)
    //     }
    // },[])
    return <Container>
        {children}
    </Container>
}