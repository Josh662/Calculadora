import {Switch, Route, Router, Routes, Link, BrowserRouter} from 'react-router-dom'
import Header from "./partials/Header";
import Footer from "./partials/Footer";

import Home from './partials/Home';
import About from './partials/About';
import Calculators from './partials/Calculators';


import { createBrowserHistory } from 'history'

function App() {
  const newHistory = createBrowserHistory();
  return (
    <BrowserRouter history={newHistory}>
    <Header history={newHistory}/>
    <main>
        <Switch history={newHistory}>
          <Route exact path='/' component={Home} />
          <Route exact path='/about' component={About} />
          <Route exact path='/calculators' component={Calculators} />
        </Switch>
    </main>
    <Footer />
    </BrowserRouter>
  );
}

export default App;
