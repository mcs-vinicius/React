import { useEffect, useState } from "react";

function Tarefa() {
  const [completed, setCompleted] = useState(false);
  const [tarefa, setTarefa] = useState("");

  useEffect(() => {
    if (completed) {
      setTarefa("Parabén! Você concluiu a Tarefa!");
    }
  }, [completed]);
  return (
    <div
      style={{
        width: "100vw",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        flexDirection: "column"
      }}
    >
      <h2>Componente Tarefa</h2>
      <h3>{tarefa}</h3>
      <p>Conclua a Tarefa</p>
      <button onClick={() => setCompleted(true)}>Concluir Tarefa</button>
    </div>
  );
}

export default Tarefa;
