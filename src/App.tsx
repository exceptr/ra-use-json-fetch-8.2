import './App.css';
import Component from './components/Component';

const opts = {
  method: 'GET',
  headers: {
      'Content-Type': 'application/json',
  },
  }

function App() {
  return (
    <div className="App">
     <Component url='http://localhost:7070/data' opts={opts}/>
     <Component url='http://localhost:7070/error' opts={opts}/>
     <Component url='http://localhost:7070/loading' opts={opts}/>
    </div>
  );
}

export default App;
