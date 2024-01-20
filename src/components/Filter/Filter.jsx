import { useDispatch } from 'react-redux';
import { setFilter } from '../../redux/filter/slice';
import { FormControl, Input } from '@chakra-ui/react';

export const Filter = () => {
  const dispatch = useDispatch();

  const handleChange = event => {
    dispatch(setFilter(event.currentTarget.value.toLowerCase()));
  };

  return (
    <>
      <FormControl>
        <Input
          className="input"
          type="text"
          id="filter"
          placeholder="Filter contacts"
          onChange={handleChange}
          width={320}
        />
      </FormControl>
    </>
  );
};
