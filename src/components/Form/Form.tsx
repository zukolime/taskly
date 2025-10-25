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
import plusIcon from '../../assets/images/plus.svg';
import { useRef, useEffect } from 'react';

export const Form = () => {
  const dispatch = useDispatch();
  const inputRef = useRef<HTMLInputElement>(null);

  const text = useSelector((state: RootState) => state.form.value);

  useEffect(() => {
    inputRef.current?.focus();
  }, []);

  const formSubmit = (e: React.SyntheticEvent) => {
    e.preventDefault();

    if (text.trim()) {
      dispatch(createAction(text));
      dispatch(clearValue());
      inputRef.current?.focus();
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
            ref={inputRef}
            placeholder='Type your plan for world domination 📝'
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
