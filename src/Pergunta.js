import React from "react";

const Pergunta = ({ pergunta, options, resposta, id, step, respostas, setRespostas }) => {
  const [optSelecionada, setOptSelecionada] = React.useState("");

  function handleChange({ target }) {
    setOptSelecionada(target.value);
  }

  React.useEffect(() => {
    setRespostas({...respostas, [id]: optSelecionada})
  }, [optSelecionada])

  if ("p" + step === id) {
    return (
      <fieldset>
        <legend>{pergunta}</legend>
        {options.map((opt) => (
          <div key={opt}>
            <label>
              <input
                type="radio"
                value={opt}
                id={id}
                name="pergunta"
                checked={opt === optSelecionada}
                onChange={handleChange}
              />
              {opt}
            </label>
          </div>
        ))}
      </fieldset>
    );
  }

  return null;
};

export default Pergunta;
