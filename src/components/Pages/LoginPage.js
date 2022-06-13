import React from 'react';
import { Navigate } from 'react-router-dom';

const LoginPage = ({ login, onLogin }) => {
  if (login) {
    return <Navigate to='/secret' />;
  }

  return (
    <div className='jumbotron'>
      <p>Login to see secret page!</p>
      <button
        className='btn btn-primary'
        onClick={onLogin}>
        Login
      </button>
    </div>
  );
};

export {LoginPage};
