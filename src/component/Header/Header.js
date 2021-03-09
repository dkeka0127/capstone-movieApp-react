import React from 'react';
import styled from 'styled-components';;

function Header(){
    return (
        <div>
            <Content>
                <Container>
                    Header
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
border-bottom: 1px solid lightgray;
`

export default Header;
