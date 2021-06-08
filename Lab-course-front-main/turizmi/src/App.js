import logo from './logo.svg';
import './App.css';

import {Home} from './Home';
import {Parku} from './Parku';
import {Shpellat} from './Shpellat';
import {MonumentetHistorike} from './MonumentetHistorike';
import {VendeNatyrore} from './VendeNatyrore';
import {Navigation} from './Navigation';

import {BrowserRouter, Route, Switch} from 'react-router-dom';

function App() {
  return (
    <BrowserRouter>
    <div className="container">
      <h3 className="m-3 d-flex justify-content-center">
        Llojet E Vendeve Turistike
        </h3>

        <Navigation/>
     <Switch>
       <Route path='/' component={Home} exact/>
       <Route path='/Parku' component={Parku}/>
       <Route path='/Shpellat' component={Shpellat}/>
       <Route path='/MonumentetHistorike' component={MonumentetHistorike}/>
       <Route path='/VendeNatyrore' component={VendeNatyrore}/>
     </Switch>
    </div>
    </BrowserRouter>
  );
}

export default App;
