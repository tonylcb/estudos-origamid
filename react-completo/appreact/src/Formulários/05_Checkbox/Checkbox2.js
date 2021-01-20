import React from 'react';

const Checkbox2 = () => {
  const [cores, setCores] = React.useState(false);

  function handleChange({ target }) {
    if (target.checked) {
      setCores([...cores, target.value]);
    } else {
      setCores(cores.filter((cor) => cor !== target.value));
    }
  }

  function checkColor(cor) {
    return cores.includes(cor);
  }

  return (
    <form>
      <label>
        <input
          type="checkbox"
          value="azul"
          checked={checkColor(`azul`)}
          onChange={handleChange}
        />
        Azul
      </label>
      <label>
        <input
          type="checkbox"
          value="vermelho"
          checked={checkColor(`vermelho`)}
          onChange={handleChange}
        />
        Vermelho
      </label>
    </form>
  );
};

export default Checkbox2;
