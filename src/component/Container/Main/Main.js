import React from 'react';
import styled from 'styled-components';
import {Link} from 'react-router-dom';

function Main(){
    return (
        <Content>
            {/* to={{obj도 전달 가능}} */}
            <Link to="/day1"><h1>📄 Day 1</h1></Link>
        </Content>
    )
}

const Content = styled.div`
box-sizing: border-box;
width: 100%;
padding: 50px;
color: white;
background-color: #2f2f2f;
text-align: center;
h1 {
    font-size: 20px;
    color: white;
}
`
export default Main;
