import { Button, Typography } from '@material-ui/core';
import React, { useEffect } from 'react';
import { NavLink } from 'react-router-dom';

const Error404 = () => {
  useEffect(() => {
    document.title = 'Crypto | 404 Page Not Found';
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <Typography
      variant="h3"
      style={{
        fontFamily: 'Montserrat',
        textAlign: 'center',
        marginTop: '20%',
        color: 'gold',
      }}
    >
      <div variant="h4">
        <div>Invalid API Request: Could not find coin with the given id</div>
        <Button variant="contained" color="primary">
          <NavLink
            to="/"
            style={{
              fontFamily: 'Montserrat',
              textAlign: 'center',
            }}
          >
            {' '}
            Go Back to Homepage{' '}
          </NavLink>
        </Button>
      </div>
    </Typography>
  );
};

export default Error404;
