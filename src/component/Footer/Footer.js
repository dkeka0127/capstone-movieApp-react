import React from 'react';
import styled from 'styled-components';

function Footer(){
    return (
        <div>
            <Content>
                <Container>
                    Footer
                </Container>
            </Content>
        </div>
    )
}

// Styled-Component

const Content = styled.div`
width: 100%;
`
const Container = styled.div`
box-sizing: border-box;
padding: 40px 30px;
margin: 0px 100px;
text-align: center;
font-size: 30px;
border-top: 1px solid lightgray;
`

export default Footer;
