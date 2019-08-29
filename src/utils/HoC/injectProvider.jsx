import React from 'react';
import { Link } from 'react-router-dom';

export default function(Component) {
  return (props) => (
    <Component
      {...props}
      provider={(path) => {
        if (window.location.pathname === path) {
          return <span />;
        }

        return <Link to={path} />;
      }}
    />
  );
}
