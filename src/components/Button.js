import React from 'react';
import { Link } from 'react-router-dom';

function Logout({ onClick, label }) {
  return (
    <Link to='logout' onClick={onClick}>{ label }</Link>
  )
}

export default Logout;