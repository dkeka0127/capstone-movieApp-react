import React, {useState, useEffect} from 'react';
import styled from 'styled-components';

function MovieDetail(props){

    const [movieData, setMovieData] = useState([]);

    // useEffect 사용 X -> 무한 랜더링
    // useEffect 사용 O -> [] 사용하여 한번만 랜더링되게 함
    useEffect(() => {
        setMovieData(props.location.state.movieInfo);
        return () => {
            setMovieData();
    },[movieData]}) //movieData가 변경될 때만 재렌더링
    
    // if (loading) return <div>Loading...</div>
    
    return (
        <Content>
            정보 출력<br />
            {movieData.title}
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
`
export default MovieDetail;
