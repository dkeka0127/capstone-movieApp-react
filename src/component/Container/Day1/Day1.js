import React from 'react';
import styled from 'styled-components';
import Example1 from './Example1';
import Project1 from './Project1';

function Day1(){

    return (
        <div>
            <Content>
                {/* <h1>Day1</h1> */}
                {/* <Example1 /> */}
                <Project1 />
            </Content>
        </div>
    )
}

// Styled-Component

const Content = styled.div`
width: 100%;
padding: 100px 30px;
box-sizing: border-box;
color: white;
background-color: #2f2f2f;
h1 {
    text-align: center;
    font-size: 30px;
}
`

export default Day1;
