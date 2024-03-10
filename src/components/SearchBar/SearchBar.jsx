import { useState } from "react";

import { SelectBase } from "@/components/SelectBase/SelectBase";
import { Form, FormGroup, SubmitBtn } from "./SearchBar.styled";

import makes from "@/data/makes.json";

export const SearchBar = ({ onSubmit }) => {
  const [make, setMake] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit({ make });
  };

  const makeOptions = makes.map((make) => ({ value: make, label: make }));

  return (
    <Form onSubmit={handleSubmit}>
      <FormGroup>
        Car brand
        <SelectBase
          name="make"
          placeholder="Enter the text"
          options={makeOptions}
          menuHeight={272}
          controlWidth={224}
          onChange={setMake}
        />
      </FormGroup>
      <SubmitBtn type="submit">Search</SubmitBtn>
    </Form>
  );
};
