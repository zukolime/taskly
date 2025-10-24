import { useDispatch, useSelector } from 'react-redux';

import { clearValue, setValue } from '../../features/formSlice';
import { createAction } from '../../features/toDoListSlice';
import { RootState } from '../../store';

import './Form.scss';

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
    <div className='form-wrapper'>
      <form
        action='#'
        onSubmit={formSubmit}
      >
        <label>
          <input
            type='text'
            value={text}
            onChange={(e) => dispatch(setValue(e.target.value))}
            placeholder='Введите задачу'
          />
          <button type='submit'></button>
        </label>
      </form>
    </div>
  );
};
