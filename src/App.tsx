import React, { useState } from "react";
import Chip from "@material-ui/core/chip";
import Avatar from "@material-ui/core/Avatar";
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";
import * as math from "mathjs";

function App() {
  const [mesurables, setMesurables] = useState<Array<[string, number]>>([]);
  const [nameValid, setNameValid] = useState<Boolean>(true);
  const [valValid, setValValid] = useState<Boolean>(true);
  const [nameInput, setNameInput] = useState<string>("x");
  const [valInput, setValInput] = useState<number>(0.01);
  const [funcValid, setFuncValid] = useState<Boolean>(true);
  const [funcInput, setFuncInput] = useState<math.MathNode | undefined>(
    math.parse("x^2")
  );
  const [uncertFunc, setUncertFunc] = useState<math.MathNode | undefined>();

  const mesurablesToObj = (mes: Array<[string, number]>): any => {
    let obj: any = {};
    mes.forEach(([name, value]) => {
      obj[name] = value;
    });
    return obj;
  };

  const handleValidateName = (event: any) => {
    let conflict = mesurables.find(
      ([name, val]) => name === event.currentTarget.value
    );
    if (event.currentTarget.value.length === 1 && !conflict) {
      setNameValid(true);
      setNameInput(event.currentTarget.value);
    } else {
      setNameValid(false);
    }
  };
  const handleValidateVal = (event: any) => {
    let val = Number.parseFloat(event.currentTarget.value);
    if (!Number.isNaN(val)) {
      setValValid(true);
      setValInput(val);
    } else {
      setValValid(false);
    }
  };
  const handleAddVar = (event: any) => {
    let conflict = mesurables.find(([name, val]) => name === nameInput);
    if (valValid && nameValid && !conflict) {
      setMesurables([...mesurables, [nameInput, valInput]]);
      setNameValid(false);
    }
  };
  const handleDelete = (key: number) => (event: any) => {
    setMesurables(mesurables.filter((_, index) => index !== key));
  };

  const handleFunctionValidate = (event: any) => {
    try {
      let func = math.parse(event.currentTarget.value);
      setFuncValid(true);
      setFuncInput(func);
    } catch (e) {
      console.error(e);
      setFuncInput(undefined);
      setFuncValid(false);
    }
  };

  const evaluateUncertainty = (event: any) => {
    if (funcInput) {
      if (mesurables.length === 0) {
        setUncertFunc(math.parse("0"));
      } else if (mesurables.length <= 1) {
        let sym = mesurables[0][0];
        let partial = math.derivative(funcInput, sym);
        setUncertFunc(partial);
      } else {
        let syms = mesurables.map(mes => mes[0]);
        let partials = syms
          .map(sym => `(${math.derivative(funcInput, sym).toString()})^2`)
          .join(" + ");
        setUncertFunc(math.parse(`sqrt(${partials})`));
      }
    } else {
      setUncertFunc(undefined);
    }
  };
  return (
    <div className="App">
      <h1>Mesurable Uncertainty Calculator</h1>

      <form>
        <h2>Mesurables</h2>
        <TextField
          error={nameValid ? false : true}
          id="standard-basic"
          label="Var Symbol"
          defaultValue="x"
          style={{ marginRight: "10px" }}
          onChange={handleValidateName}
        />
        <TextField
          error={valValid ? false : true}
          id="standard-basic"
          label={<>Var &Delta;</>}
          defaultValue="0.01"
          onChange={handleValidateVal}
        />
        <Button variant="contained" color="primary" onClick={handleAddVar}>
          Add Var
        </Button>
        <br />
        <br />
        <div
          style={{
            display: "flex",
            flexDirection: "row",
            flexWrap: "wrap"
          }}
        >
          {mesurables.map(([varName, varUncertainty], index) => (
            <Chip
              key={index}
              color="primary"
              label={<>&Delta; = {varUncertainty}</>}
              onDelete={handleDelete(index)}
              avatar={<Avatar>{varName}</Avatar>}
              style={{ marginRight: "2px" }}
            />
          ))}
        </div>
      </form>

      <form>
        <h2>Function</h2>
        <TextField
          error={funcValid ? false : true}
          id="standard-basic"
          label="Function Expression"
          defaultValue="x^2"
          onChange={handleFunctionValidate}
        />
        <br />
        <small>
          uses the math.js{" "}
          <a href="https://mathjs.org/docs/expressions/syntax.html">syntax</a>
        </small>
      </form>
      <br />
      <Button variant="contained" color="primary" onClick={evaluateUncertainty}>
        Evaluate Uncertainty
      </Button>
      <br />
      {uncertFunc ? (
        <h3>
          Uncertainty Function:{" "}
          {`f(${mesurables.map(([name, _]) => name).join(",")}) = `}
          {uncertFunc.toString()}
        </h3>
      ) : null}
      {uncertFunc ? (
        <h3>
          Uncertainty Value: {uncertFunc.evaluate(mesurablesToObj(mesurables))}
        </h3>
      ) : null}
    </div>
  );
}

export default App;
