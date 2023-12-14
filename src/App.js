import './App.css';
import Counter from './components/Counter';

function App() {
  return (
    <div className="App">
      <h1 style={{ fontSize: '8vw' }}>Counter App</h1>
      <div
        style={{
          height: '55vh',
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center',
          alignItems: 'center',
        }}
      >
        <Counter />
      </div>
    </div>
  );
}

export default App;
