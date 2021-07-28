import './App.css';
import Page1 from './Page1';
import Page2 from './Page2';
import Page3 from './Page3';
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
            {props => <Page1 {...props} /> }/>
        <Route exact path='/Page2' render=
            {props => <Page2 {...props} /> }/>
        <Route exact path='/Page3' render=
            {props => <Page3 {...props} /> }/>
      </Switch>
    </BrowserRouter>
    </div>
  );
}
  
export default App;