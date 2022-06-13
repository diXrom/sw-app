import React from 'react';
import { Navigate } from 'react-router-dom';

const SecretPage = ({ login }) => {
  if (login) {
    return (
      <div className='jumbotron text-center yoda'>
        <img src={`https://helios-i.mashable.com/imagery/articles/
05Ym34W6tH3CyuWYOCbpCAr/hero-image.fill.size_1248x702.v1623391769.jpg`}
        alt='baby yoda' />
      </div>
    );
  }
  return <Navigate to='/login' />;
};
export { SecretPage };
