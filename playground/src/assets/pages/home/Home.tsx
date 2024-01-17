import { useState } from "react";

interface homeProps{
    titulo: string;
    texto: string;

}

function Home(props: homeProps) {
    const [isLogged, setIsLogged] = useState(false);

    return (
        <>
        {  /* isLogged? expressão verdadeira : expressão falsa */
            isLogged ?(
                <div style={{
                    backgroundColor: "rgba(120, 120, 120, 4)",
                    width: "100vw",
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                    flexDirection: "column",
                    marginBottom: "20px",
                    borderRadius:"10px"
                  }}>
                    <h2>{props.titulo}</h2>
                    <p>{props.texto} </p>
                </div> 
            ):(
                <div style={{
                    backgroundColor: "rgba(80, 80, 80, 4)",
                    width: "98vw",
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                    flexDirection: "column",
                    marginBottom:"10px",
                    borderRadius:"10px"
                  }}>
                    <h2>Login</h2>
                    <button style={{marginBottom: "20px", borderRadius:"4px"}} onClick={() => setIsLogged(true)}>Entrar</button>
                </div>
            )
        }
    </>
  )
}

export default Home