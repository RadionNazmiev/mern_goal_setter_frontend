import React from 'react';
import { useDispatch } from 'react-redux';
import { deleteGoal } from '../features/goals/goalSlice';

const GoalCard = ({ goal }) => {
  const dispatch = useDispatch();
  return (
    <div
      className='relative bg-zinc-100 text-black font-normal py-3
    border rounded-md border-gray-300'
    >
      <h1 className='text-sm'>{goal.text}</h1>
      <h2 className='font-medium'>
        {new Date(goal.createdAt).toLocaleString('en-US')}
      </h2>
      <button
        onClick={() => dispatch(deleteGoal(goal._id))}
        className='absolute top-0 right-2.5'
      >
        x
      </button>
    </div>
  );
};

export default GoalCard;
