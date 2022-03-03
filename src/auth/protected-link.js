import React from 'react'
import { useAuth0 } from '@auth0/auth0-react';

const ProtectedLink = ({ url, name }) => {
  const { isAuthenticated } = useAuth0();

  return (
    <>
      { isAuthenticated ? <a href={url} className="nav-link" >{name}</a> : null}
    </>
  )
}

export default ProtectedLink