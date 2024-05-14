import { useState } from "react";
import "./form.scss";

export default function Form() {
  const [age, setAge] = useState(0);
  const [gender, setGender] = useState("");
  const [weight, setWeight] = useState(0);
  const [height, setHeight] = useState(0);
  const [result, setResult] = useState(0);

  const handleForm = (event: React.FormEvent) => {
    event.preventDefault();

    if (gender === "male") {
      const bmr = 66 + 13.7 * weight + 5 * height - 6.8 * age;
      return setResult(bmr);
    } else if (gender === "female") {
      const bmr = 655 + 9.6 * weight + 1.8 * height - 4.7 * age;
      return setResult(bmr);
    } else {
      return alert("Please select a gender");
    }
  };

  return (
    <form onSubmit={handleForm} className="form">
      <h1>Preencha as informações</h1>

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

      <span>
        Sua taxa de metabolismo basal é:
        <br/> 
        <input type="text" disabled value={result} className="result" />
      </span>


    </form>
  );
}
