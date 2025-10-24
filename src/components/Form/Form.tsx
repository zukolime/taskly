import { useDispatch, useSelector } from 'react-redux';

import { clearValue, setValue } from '../../features/formSlice';
import { createAction } from '../../features/toDoListSlice';
import { RootState } from '../../store';

import {
  FormBlock,
  FormControl,
  FormField,
  FormLabel,
  FormWrapper,
} from './Form.styled';
import plusIcon from '../../assets/images/plus.png';

export const Form = () => {
  const dispatch = useDispatch();
  const text = useSelector((state: RootState) => state.form.value);

  const formSubmit = (e: React.SyntheticEvent) => {
    e.preventDefault();

    if (text.trim()) {
      dispatch(createAction(text));
      dispatch(clearValue());
    }
  };

  return (
    <FormWrapper>
      <FormBlock
        action='#'
        onSubmit={formSubmit}
      >
        <FormLabel>
          <FormField
            type='text'
            value={text}
            onChange={(e) => dispatch(setValue(e.target.value))}
          />
          <FormControl
            icon={plusIcon}
            type='submit'
          />
        </FormLabel>
      </FormBlock>
    </FormWrapper>
  );
};
