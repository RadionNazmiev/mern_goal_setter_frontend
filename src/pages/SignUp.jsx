import React, { useState, useEffect } from 'react';
import { Button, Title, Spinner } from '../components';
import { useSelector, useDispatch } from 'react-redux';
import { toast } from 'react-toastify';
import { useNavigate } from 'react-router-dom';
import { signUp, reset } from '../features/auth/authSlice';

const SignUp = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    password: '',
    password2: '',
  });

  const { name, email, password, password2 } = formData;

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
    dispatch(reset);
  }, [user, isError, isSuccess, message, navigate, dispatch]);

  const onChange = (e) => {
    setFormData((prevState) => ({
      ...prevState,
      [e.target.id]: e.target.value,
    }));
  };

  const onSubmit = (e) => {
    e.preventDefault();

    if (password !== password2) {
      toast.error('Passwords do not match');
    } else {
      const userData = {
        name,
        email,
        password,
      };

      dispatch(signUp(userData));
    }
  };

  if (isLoading) {
    return <Spinner />;
  }

  return (
    <div className='main-container'>
      <Title title='Sign Up' subtitle='Please create an account' />
      <form onSubmit={onSubmit}>
        <input
          type='text'
          id='name'
          value={name}
          placeholder='Enter your name'
          className='input-field'
          onChange={onChange}
          autoComplete='on'
        />
        <input
          type='email'
          id='email'
          value={email}
          className='input-field'
          placeholder='Enter your email'
          required=''
          onChange={onChange}
          autoComplete='on'
        />
        <input
          type='password'
          id='password'
          value={password}
          className='input-field'
          placeholder='Enter your password'
          required=''
          onChange={onChange}
          autoComplete='on'
        />
        <input
          type='password'
          id='password2'
          value={password2}
          className='input-field'
          placeholder='Confirm your password'
          required=''
          onChange={onChange}
          autoComplete='on'
        />
        <Button type='submit' title='Submit' styles='button w-full' />
      </form>
    </div>
  );
};

export default SignUp;
