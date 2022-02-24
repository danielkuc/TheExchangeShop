import React from 'react';
import { withAuthenticationRequired } from '@auth0/auth0-react';

const ProtectedRoute = ({ component, ...args }) => {
  const Comp = withAuthenticationRequired(component);
  return <Comp {...args} /> 
}

export default ProtectedRoute;