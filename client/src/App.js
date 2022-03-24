import './App.css';
import Main from './views/Main';
import { Route, Switch } from 'react-router';
import { Link } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css'

function App() {
  return (
    <div className="App">
      <Main/>
    </div>
  );
}

export default App;
