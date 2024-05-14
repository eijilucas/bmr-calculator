import { useState } from "react";
import "./form.scss";

export default function Form() {
  const [age, setAge] = useState(0);
  const [gender, setGender] = useState("");
  const [weight, setWeight] = useState(0);
  const [height, setHeight] = useState(0);
  const [resultBmr, setResultBmr] = useState(0);
  const [resultNcd, setResultNcd] = useState(0);

  const handleForm = (event: React.FormEvent) => {
    event.preventDefault();

    if (gender === "male") {
      const bmr = 66 + (13.7 * weight) + (5 * height) - (6.8 * age);
      const ncd = 88.362 + (13.397 * weight) + (4.799 * height) - (5.677 * age);
      setResultBmr(bmr);  
      setResultNcd(ncd);
    } else if (gender === "female") {
      const bmr = 655 + (9.6 * weight) + (1.8 * height) - (4.7 * age);
      const ncd = 447.593 + (9.247 * weight) + (3.098 * height) - (4.330 * age);
      setResultBmr(bmr);
      setResultNcd(ncd);
    }
  };

  return (
    <form onSubmit={handleForm} className="form">
      <h2>Preencha as informações</h2>

      <div className="inputs">
        <div className="info">
          <label htmlFor="age">Idade:</label>
          <input
            type="text"
            id="age"
            placeholder="Insira sua idade"
            value={age === 0 ? "" : age}
            onChange={(e) => setAge(Number(e.target.value))}
            required
          />
        </div>

        <div className="info">
          <label htmlFor="weight">Peso:</label>
          <input
            type="text"
            placeholder="Insira seu peso (kg)"
            value={weight === 0 ? "" : weight}
            id="weight"
            onChange={(e) => setWeight(Number(e.target.value))}
            required
          />
        </div>

        <div className="info">
          <label htmlFor="height">Altura:</label>
          <input
            type="text"
            placeholder="Insira sua altura (cm)"
            value={height === 0 ? "" : height}
            id="height"
            onChange={(e) => setHeight(Number(e.target.value))}
            required
          />
        </div>
      </div>

      <div className="radio_btns">
        <div className="radio">
          <input
            type="radio"
            value="male"
            id="male"
            onChange={(e) => setGender(e.target.value)}
            checked={gender === "male"}
          />
          <label htmlFor="male">Homem</label>
        </div>

        <div className="radio">
          <input
            type="radio"
            value="female"
            id="female"
            onChange={(e) => setGender(e.target.value)}
            checked={gender === "female"}
          />
          <label htmlFor="female">Mulher</label>
        </div>
      </div>

      <button type="submit">Calcular</button>

      <span className="results">
        <h3>TMB - Taxa de Metabolismo Basal</h3>
        <br/>
        Sua taxa de metabolismo basal aproximado é:
        <br/>
        <input type="text" disabled value={resultBmr.toLocaleString('pt-br', {minimumFractionDigits: 2}) || ""} className="result" />
      </span>

      <span className="results">
        <h3>NCD - Necessidade de Calorias Diárias</h3>
        <br/>
        NCD - <strong>Sedentário</strong>(Pouco ou nenhum exercício):
        <br/>
        <input type="text" disabled value={(resultNcd*1.25).toLocaleString('pt-br', {minimumFractionDigits: 2}) || ""} className="result" />
        <br/>
        <br/>
        NCD - <strong>Levemente ativo</strong>(exercício leve 1-3 dias/semana):
        <br/>
        <input type="text" disabled value={(resultNcd*1.375).toLocaleString('pt-br', {minimumFractionDigits: 2}) || ""} className="result" />
        <br/>
        <br/>
        NCD - <strong>Moderadamente ativo</strong>(exercício moderado 3-5 dias/semana):
        <br/>
        <input type="text" disabled value={(resultNcd*1.55).toLocaleString('pt-br', {minimumFractionDigits: 2}) || ""} className="result" />
        <br/>
        <br/>
        NCD - <strong>Muito ativo</strong>(exercício intenso 6-7 dias/semana):
        <br/>
        <input type="text" disabled value={(resultNcd*1.725).toLocaleString('pt-br', {minimumFractionDigits: 2}) || ""} className="result" />
        <br/>
        <br/>
        NCD - <strong>Extremamente ativo</strong>(exercício muito intenso e trabalho físico):
        <br/>
        <input type="text" disabled value={(resultNcd*1.9).toLocaleString('pt-br', {minimumFractionDigits: 2}) || ""} className="result" />
      </span>

    </form>
  );
}
