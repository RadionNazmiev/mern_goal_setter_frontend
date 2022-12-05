import React, { useState, useEffect } from 'react';
import { Title, Button, Spinner } from '../components';
import { useSelector, useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';
import { signIn, reset } from '../features/auth/authSlice';

const SignIn = () => {
  const [formData, setFormData] = useState({
    email: '',
    password: '',
  });

  const { email, password } = formData;

  const navigate = useNavigate();
  const dispatch = useDispatch();

  const { user, isLoading, isError, isSuccess, message } = useSelector(
    (state) => state.auth
  );

  useEffect(() => {
    if (isError) {
      toast.error(message);
    }

    if (isSuccess || user) {
      navigate('/');
    }

    dispatch(reset());
  }, [user, isError, isSuccess, message, navigate, dispatch]);

  const onChange = (e) => {
    setFormData((prevState) => ({
      ...prevState,
      [e.target.name]: e.target.value,
    }));
  };

  const onSubmit = (e) => {
    e.preventDefault();

    const userData = {
      email,
      password,
    };

    dispatch(signIn(userData));
  };

  if (isLoading) {
    return <Spinner />;
  }

  return (
    <div className='main-container'>
      <Title title='Sign In' subtitle='Please sign an account' />
      <form onSubmit={onSubmit}>
        <input
          type='email'
          id='email'
          onChange={onChange}
          className='input-field'
          placeholder='Enter your email'
          required=''
          value={email}
          autoComplete='on'
        />
        <input
          type='password'
          id='password'
          onChange={onChange}
          className='input-field'
          placeholder='Enter your password'
          required=''
          value={password}
          autoComplete='on'
        />
        <Button type='submit' title='Submit' styles='button w-full' />
      </form>
    </div>
  );
};

export default SignIn;
