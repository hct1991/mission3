import './App.css';
import One from './components/one.js';
import Two from './components/two';
import Three from './components/three';
import Four from './components/four';
import Five from './components/five';
import { FourK } from '@material-ui/icons';


function App() {
  return (
    <div className="App">
      <div className="mainContainer">
      <One/>
      <Two/>
      <Three/>
      <Four/>
      <Five/>
      </div>


    </div>
  );
}

export default App;
