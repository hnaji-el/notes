function HelloC() {
  return <div>Hello World</div>;
}

function App() {
  return <div>{HelloC()}</div>;
}

export default App;
