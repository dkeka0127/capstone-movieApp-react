import React, {useState, useEffect} from 'react';
import styled from 'styled-components';
import axios from 'axios';

// 각 영화의 정보를 출력해주는 정보 컴포넌트
function Movie({movieInfo}){
    return(
        <MovieInfo>
             {/* 영화 포스터 component */}
            <MovieImg>
                <img src={movieInfo.medium_cover_image} />
            </MovieImg>
             {/* 영화 소개글 component */}
            <MovieFont>
                <h1>{movieInfo.title}</h1>
                <h2>{movieInfo.year}</h2>
                <h3>
                {/* 영화 장르가 n개임으로 map을 사용하여 출력 */}
                {
                    movieInfo.genres.map((genre)=>{
                        return <div>• {genre}</div>;
                    })
                }
                </h3>
                <h4>{movieInfo.summary.slice(0, 250)} ...</h4> {/* slice 사용해서 summary를 잘라냄 (0부터 250까지의 글자만 출력) */}
                <h5>rate: {movieInfo.rating}</h5>
            </MovieFont>
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
             {/* 영화 전체 데이터를 map함수를 사용하여 하나씩 나누어 출력 */}
            {
                movieList != null ?
                movieList.map((movieInfo, i)=>{
                    return(
                        <Movie key={i} movieInfo={movieInfo} />  
                    );
                })
                :null
            }
            
        </Content>
    )
}

const Content = styled.div`
font-size: 20px;
box-sizing: border-box;
`
const MovieInfo = styled.div`
box-sizing: border-box;
width: 40%;
height: 340px;
display: inline-block;
padding: 0px 0px 0px 0px;
margin: 30px 30px 100px 30px;
font-size: 15px;
text-align: left;
margin-left: 50px;
background-color: gray;
box-shadow: 1px 1px 17px 3px;
`
const MovieImg = styled.div`
width: 30%;
padding-left: 40px;
padding-right: 20px;
display: inline-block;
img {
    position: relative;
    width: 100%;
    top: -40px;
}
`
const MovieFont = styled.div`
width: 400px;
padding: 20px 0px 30px 30px;
position: absolute;
box-sizing: border-box;
padding-left: 20px;
display: inline-block;
text-align: left;
h1 {
    text-align: left;
    font-size: 22px;
    font-weight: 600;
    padding-bottom: 20px;
}
h2 {
    font-size: 15px;
    font-weight: 400;
    opacity: 0.8;
}
h3 {
    font-size: 16px;
    font-weight: 400;
    opacity: 0.8;
}
h4 {
    font-weight: 500;
    /* height: 100px; */
    /* overflow: scroll; */
}
h5 {

}
`

export default Project1;
