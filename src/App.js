import './App.css';

import Header from './Header/Header';
import Home from './Home/Home'
import List from './List/List';
import PokemonDetails from './PokemonDetails/PokemonDetails'

import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';

function App() {
  return (
    <div className="App">
      <Router>
        <Header/>
        <Switch>
          <Route path="/" exact component={Home}></Route>
          <Route path="/list" component={List}></Route>
          <Route path="/details/:id" component={PokemonDetails}></Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
