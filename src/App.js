import React from "react";
import Pergunta from "./Pergunta";

const perguntas = [
  {
    pergunta: "Qual método é utilizado para criar componentes?",
    options: [
      "React.makeComponent()",
      "React.createComponent()",
      "React.createElement()",
    ],
    resposta: "React.createElement()",
    id: "p1",
  },
  {
    pergunta: "Como importamos um componente externo?",
    options: [
      'import Component from "./Component"',
      'require("./Component")',
      'import "./Component"',
    ],
    resposta: 'import Component from "./Component"',
    id: "p2",
  },
  {
    pergunta: "Qual hook não é nativo?",
    options: ["useEffect()", "useFetch()", "useCallback()"],
    resposta: "useFetch()",
    id: "p3",
  },
  {
    pergunta: "Qual palavra deve ser utilizada para criarmos um hook?",
    options: ["set", "get", "use"],
    resposta: "use",
    id: "p4",
  },
];

function App() {
  const [step, setStep] = React.useState(1);
  const [totalAcertos, setTotalAcertos] = React.useState(null);
  const [respostas, setRespostas] = React.useState({
    p1: "",
    p2: "",
    p3: "",
    p4: "",
  });

  function calculaTotalAcertos() {
    setTotalAcertos(
      perguntas.reduce((acertos, pergunta) => {
        pergunta.resposta === respostas[pergunta.id] && acertos++;
        return acertos;
      }, 0)
    );
  }

  function handleSubmit(event) {
    event.preventDefault();
    if(validaResposta()){
      setStep(step + 1);
      step === perguntas.length && calculaTotalAcertos();
    }
  }

  function validaResposta(){
    if(respostas["p" + step] === ""){
      alert('Selecione uma resposta!');
      return false;
    }
    return true;
  }

  return (
    <form onSubmit={handleSubmit}>
      {perguntas.map((pergunta) => (
        <Pergunta
          key={pergunta.id}
          step={step}
          respostas={respostas}
          setRespostas={setRespostas}
          {...pergunta}
        />
      ))}
      {!totalAcertos ? (
        <button>Próxima</button>
      ) : (
        <p>Total de acertos: {totalAcertos}</p>
      )}
    </form>
  );
}

export default App;
