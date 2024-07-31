import React, { useState } from "react";
import { Container, Input, Button } from "reactstrap";
import { addChemical } from "../../redux/chemicalSlice";
import { useDispatch } from "react-redux";



export default function AddChemical() {
  const [idd, setIdd] = useState(6);
  const [name, setName] = useState("");
  const [formula, setFormula] = useState("");

  const dispatch = useDispatch();
  const addChe = (name, formula) => {
    dispatch(addChemical({ id: idd, name: name, formula: formula }));
    setName("");
    setFormula("");
    setIdd(idd + 1);
  };


  return (
    <Container className="d-flex">
      <Input
        value={name}
        placeholder="Name"
        onChange={(e) => setName(e.target.value)}
        onKeyDown={(e) => {
          if (e.key === "Enter") {
            addChe(name, formula);
          }
        }}
      />
      <Input
        value={formula}
        placeholder="fomrula"
        onChange={(e) => setFormula(e.target.value)}
        onKeyDown={(e) => {
          if (e.key === "Enter") {
            addChe(name, formula);
            setFormula("");
            setName("");
          }
        }}
      />
      <Button color="success" onClick={() => addChe(name, formula)}>
        Add
      </Button>
    </Container>
  );
}
