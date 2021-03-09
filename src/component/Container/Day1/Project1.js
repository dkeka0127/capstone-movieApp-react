import React, {useState, useEffect} from 'react';
import styled from 'styled-components';
import axios from 'axios';

// 각 영화의 정보를 출력해주는 정보 컴포넌트
function Movie({movieInfo}){
    return(
        <MovieInfo>
            id: {movieInfo.id}<br />
            year: {movieInfo.year}<br />
            title: {movieInfo.title}<br />
            summary: {movieInfo.summary}<br />
            poster: <img src={movieInfo.medium_cover_image} /><br />
            rate: {movieInfo.rating}
        </MovieInfo>
    )
}

// Main function
function Project1(){

    // 영화 리스트를 담을 변수 선언
    const [movieList, setMovieList] = useState();

    // axios를 사용하여 데이터 불러오기
    useEffect(()=>{
        axios
        .get('https://yts-proxy.nomadcoders1.now.sh/list_movies.json')
        .then((result) => setMovieList(result.data.data.movies))
    }, []);

    console.log(movieList);

    return (
        <Content>
            {
                movieList != null ?
                movieList.map((movieInfo, i)=>{
                    return(
                        <div>
                            <Movie key={i} movieInfo={movieInfo} />
                        </div>
                    );
                })
                :null
            }
            
        </Content>
    )
}

const Content = styled.div`
font-size: 20px;
`
const MovieInfo = styled.div`
padding: 20px;
font-size: 15px;
text-align: left;
margin-left: 50px;
`

export default Project1;
