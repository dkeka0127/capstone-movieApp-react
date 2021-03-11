import React from 'react';
import styled from 'styled-components';;

function Header(){
    return (
        <div>
            <Content>
                <Container>
                    Movie Website made by React
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
font-size: 30px;
font-style: italic;
border-bottom: 1px solid lightgray;
`

export default Header;
