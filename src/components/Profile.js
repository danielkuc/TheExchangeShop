import React from 'react';
import { useAuth0 } from '@auth0/auth0-react';
import { Container } from 'react-bootstrap';

const Profile = () => {
  const { user } = useAuth0();
  const { nickname, email } = user;

  return (
    <div>
      <Container className='text-center'>
        <p>{nickname}</p>
        <p>{email}</p>
        {JSON.stringify(user, null, 2)}
      </Container>
    </div>
  );
};

export default Profile;