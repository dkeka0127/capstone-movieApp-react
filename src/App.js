import './App.css';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';


// component 불러오기
import Header from './component/Header/Header';

import Main from './component/Container/Main/Main';
import Day1 from './component/Container/Day1/Day1';
import MovieDetail from './component/Container/Day1/MovieDetail';
import Day2 from './component/Container/Day2/Day2';

import Footer from './component/Footer/Footer';


function App() {
  return (
    <Router>
      <Header />
      <Switch>
        {/* exact 를 사용해야 지정해둔 경로에서 원하는 파일이 열림 (exact가 없으면 겹쳐서 랜더링 되는 일이 발생) */}
        <Route exact path='/' component={Main} />
        <Route exact path='/day1' component={Day1} />
        <Route exact path='/day1/movie-detail/:id' component={MovieDetail} />
        <Route exact path='/day2' component={Day2} />
      </Switch>
      <Footer />
    </Router>
  );
}

export default App;
