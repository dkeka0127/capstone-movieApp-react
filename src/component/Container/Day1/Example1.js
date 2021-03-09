import React from 'react';
import styled from 'styled-components';

function Example1(){
    return(
        <Content>
            {/* --- Component --- */}
            <Component>
                {/* 영화 컴포넌트 생성 */}
                <Movie />
            </Component>

            {/* --- Props --- */}
            <Props>
                {/* 영화 컴포넌트에 props 전달 */}
                <Movie genre="Action" />
            </Props>
        </Content>
    )
}

function Movie(props){   //props 대신 {genre} 라고 쓸 수도 있음
    return(
        <div>
            I love SF Movie ! <br />
            I love {props.genre} Movie !
        </div>
    )
}

const Content = styled.div`
text-align: center;
`
const Component = styled.div`
padding: 20px 0px;
text-align: center;
`
const Props = styled.div`
padding: 20px 0px;
text-align: center;
`

export default Example1;
