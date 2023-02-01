import './App.css';

function App() {
  const a = 2 
  const b = 4
  return (
    <div className="App">
      <ul>
        <li>hola</li>
        <li>hi</li>
        <li>konichiwa</li>
      </ul>
      <h1 data-testid="mytestid">Hello</h1>
      <span title="sum">{a+b}</span>
    </div>
  );
}

export default App;
