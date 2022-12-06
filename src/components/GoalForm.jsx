import React from 'react';
import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { setGoal } from '../features/goals/goalSlice';
import { Button } from './';

const GoalForm = () => {
  const [text, setText] = useState('');
  const dispatch = useDispatch();
  const onSubmit = (e) => {
    e.preventDefault();
    dispatch(setGoal({ text }));
    setText('');
  };
  return (
    <form onSubmit={onSubmit}>
      <input
        type='text'
        id='goal'
        placeholder='Enter your goal'
        className='input-field'
        name='text'
        value={text}
        onChange={(e) => setText(e.target.value)}
        required=''
        autoComplete='on'
      />
      <Button type='submit' title='Submit' styles='button w-full' />
    </form>
  );
};

export default GoalForm;
