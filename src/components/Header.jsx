import React from 'react';
import { FaSignInAlt, FaSignOutAlt, FaUser } from 'react-icons/fa';
import { Button } from './';
import { Link, useNavigate } from 'react-router-dom';
import { signOut, reset } from '../features/auth/authSlice';
import { useSelector, useDispatch } from 'react-redux';

const Header = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { user } = useSelector((state) => state.auth);

  const onSignOut = () => {
    dispatch(signOut());
    dispatch(reset());
    navigate('/');
  };
  return (
    <div className='flex flex-grow justify-between items-center px-0 py-3.5 border-b-2 mb-14 bg-gray-50'>
      <Link to='/'>
        <p className='text-2xl font-semibold mr-4'>Goal Setter</p>
      </Link>

      {user ? (
        <Button
          icon={<FaSignOutAlt />}
          onClick={onSignOut}
          title='Sign Out'
          styles='button'
        />
      ) : (
        <div className='flex gap-3'>
          <Link to='/signin'>
            <Button icon={<FaSignInAlt />} title='Sign In' styles='button' />
          </Link>
          <Link to='/signup'>
            <Button icon={<FaUser />} title='Sign Up' styles='button' />
          </Link>
        </div>
      )}
    </div>
  );
};

export default Header;
