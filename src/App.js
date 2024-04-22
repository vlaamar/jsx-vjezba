import "./App.css";

function App() {
  const firstStr = "Prvi";
  const secStr = "Drugi";

  return (
    <div>
      <p>Ovo je neki tekst za prikaz na ekranu!</p>;
      <p>Ovo je prikaz prve varijable: {firstStr}</p>;
      <p>
        Ovo je prikaz obje varijable odvojene razamkom: {firstStr}
        <span> </span>
        {secStr}
      </p>
    </div>
  );
}

export default App;
