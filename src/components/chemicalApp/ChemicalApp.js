import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { Button, Table } from "reactstrap";
import { deleteChemical, addChemical } from "../../redux/chemicalSlice";
import AddChemical from "../add/AddChemical";
import {
  Container,
  Dropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem,
} from "reactstrap";
import PropTypes from "prop-types";
export default function ChemicalApp() {
  const { chemicals } = useSelector((state) => state.chemicals);
  const dispatch = useDispatch();

  const deleteChe = (id) => {
    dispatch(deleteChemical(id));
  };
  const [dropdownOpen, setDropdownOpen] = useState(false);

  const toggle = () => setDropdownOpen((prevState) => !prevState);
  return (
    <div>
      <h1>Add a chemical...</h1>
      <AddChemical />

      <Container>
        <Table>
          <thead>
            <td>ID</td>
            <td>Name</td>
            <td>Formula</td>
          </thead>

          {chemicals.map((item, index) => (
            <tbody key={index}>
              <td>{item.id}</td>
              <td>{item.name}</td>
              <td>{item.formula}</td>
              <td>
                <Button
                  color="success"
                  size="sm"
                  onClick={() => deleteChe(item.id)}
                >
                  Delete
                </Button>
              </td>
              <td>
                <Button>Edit</Button>
              </td>
            </tbody>
          ))}
        </Table>
      </Container>
    </div>
  );
}
