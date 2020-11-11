import './App.css';
import Posts from './components/Posts'
import Nav from './components/Nav'

function App() {
  return (
    <div id="App">
      <div  className='container'>
        <Nav />
        <Posts />
      </div>
    </div>
  );
}

export default App;
