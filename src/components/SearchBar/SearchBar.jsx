import { useMemo, useState } from 'react';

import makes from '@/data/makes.json';

import { SelectBase } from '@/components/SelectBase/SelectBase';
import { Form, FormGroup, SubmitBtn } from './SearchBar.styled';

export const SearchBar = ({ onSubmit }) => {
  const [make, setMake] = useState('');
  const [rentalPrice, setRentalPrice] = useState('');

  const handleSubmit = e => {
    e.preventDefault();
    onSubmit({ make, rentalPrice });
  };

  const makesOptions = useMemo(
    () => makes.map(make => ({ value: make, label: make })),
    []
  );
  const priceOptions = useMemo(() => {
    const options = [];
    for (let i = 30; i <= 500; i += 10) {
      options.push({ value: i, label: i });
    }
    return options;
  }, []);

  return (
    <Form onSubmit={handleSubmit}>
      <FormGroup>
        Car brand
        <SelectBase
          name="make"
          placeholder="Enter the text"
          options={makesOptions}
          menuHeight={272}
          controlWidth={224}
          onChange={setMake}
        />
      </FormGroup>
      <FormGroup>
        Price / 1 hour
        <SelectBase
          name="price"
          placeholder="To $"
          options={priceOptions}
          controlWidth={125}
          menuHeight={188}
          onChange={setRentalPrice}
        />
      </FormGroup>
      <SubmitBtn type="submit">Search</SubmitBtn>
    </Form>
  );
};
