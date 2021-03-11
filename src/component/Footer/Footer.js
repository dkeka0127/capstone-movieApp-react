import React from 'react';
import styled from 'styled-components';

function Footer(){
    return (
        <div>
            <Content>
                <Container>
                    Develop by sori_127@naver.com
                </Container>
            </Content>
        </div>
    )
}

// Styled-Component

const Content = styled.div`
width: 100%;
color: white;
background-color: #2f2f2f;
`
const Container = styled.div`
box-sizing: border-box;
padding: 40px 30px;
margin: 0px 100px;
text-align: center;
font-size: 15px;
border-top: 1px solid lightgray;
`

export default Footer;
