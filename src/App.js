import './App.css';
import Home from './Page1';
import Contact from './Page2';
import About from './Page3';
import MarerialUIDrawer from './Page1';
import { BrowserRouter, Route, Switch } 
    from 'react-router-dom';
  
function App() {
  return (
    <div className="App">
     <h1 style={{color: '#323576'}}>MaUI</h1>
     <BrowserRouter>
     <MarerialUIDrawer/>
      <Switch>
        <Route exact path='/' render=
            {props => <Home {...props} /> }/>
        <Route exact path='/Page2' render=
            {props => <About {...props} /> }/>
        <Route exact path='/Page3' render=
            {props => <Contact {...props} /> }/>
      </Switch>
    </BrowserRouter>
    </div>
  );
}
  
export default App;