import React from 'react';
import { Title, GoalCard, Spinner, GoalForm } from '../components';
import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { getGoals, reset } from '../features/goals/goalSlice';

const Main = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const { user } = useSelector((state) => state.auth);
  const { goals, isLoading, isError, message } = useSelector(
    (state) => state.goals
  );
 

  useEffect(() => {
    if (isError) {
      console.log(message);
    }
    if (!user) {
      navigate('/signin');
    }
    dispatch(getGoals());

    return () => {
      dispatch(reset());
    };
  }, [user, isError, navigate, message, dispatch]);

  if (isLoading) {
    return <Spinner />;
  }

  return (
    <div className='main-container'>
      <Title
        title={`Welcome ${user && user.name}`}
        subtitle='Goals Dashboard'
      />

      <GoalForm />

      {goals.length > 0 ? (
        <div className='grid grid-cols-2 mt-6 gap-2'>
          {goals.map((goal) => (
            <GoalCard key={goal._id} goal={goal} />
          ))}
        </div>
      ) : (
        <h3 className='margin-top-6'>You havent set any goals yet</h3>
      )}
    </div>
  );
};

export default Main;
