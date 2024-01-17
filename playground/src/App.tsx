import "./App.css";
import Home from "./assets/pages/home/Home";
import Contador from "./assets/pages/contador/Contador";
import Tarefa from "./assets/pages/tarefa/Tarefa";

function App() {
  return (
    <>
      <Home
        titulo="Componente Home"
        texto="Este texto foi enviado pelo Componente App."
      />
      <div style={{display:"flex", backgroundColor:"#c0c0c0", borderRadius:"10px"}}>
        <Contador />

        <Tarefa />
      </div>
    </>
  );
}

export default App;
