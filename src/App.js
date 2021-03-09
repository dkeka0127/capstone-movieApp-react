import './App.css';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';


// component 불러오기
import Header from './component/Header/Header';

import Day1 from './component/Container/Day1/Day1';
import Day2 from './component/Container/Day2/Day2';

import Footer from './component/Footer/Footer';


function App() {
  return (
    <Router>
      <Header />
      <Switch>
        <Route exact path='/day1' component={Day1} />
        <Route exact path='/day2' component={Day2} />
      </Switch>
      <Footer />
    </Router>
  );
}

export default App;
