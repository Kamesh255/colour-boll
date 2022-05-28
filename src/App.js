import logo from './logo.svg';
import './App.css';
import ColourBall from './ColourBall';
 

const colours = [
  {
      id  : 1,
      colour : "#D5E8D4" 
  },
  {
      id  : 2,
      colour : "#FFE6CD" 
  },
  {
      id  : 3,
      colour : "#6801FF" 
  },
  {
      id  : 4,
      colour : "#D9E8FB" 
  },
  {
      id  : 5,
      colour : "#E2D5E7" 
  }
]

function App() {
  return (
    <div className="App">
       <ColourBall />
    </div>
  );
}

export default App;
