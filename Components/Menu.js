import React from 'react';
import { ListGroup } from 'react-bootstrap';
import { Link } from 'react-router-dom';

export const Menu = () => {
  return (
    <ListGroup>
      <Link to='/' className='list-group-item list-group-item-action'>Home</Link>
      <Link to='/add-course' className='list-group-item list-group-item-action'>Add Courses</Link>
      <Link to='/view-courses' className='list-group-item list-group-item-action'>View Courses</Link>
      <Link to='/about-us' className='list-group-item list-group-item-action'>About us</Link>
      <Link to='/contact-us' className='list-group-item list-group-item-action'>Contact us</Link>
    </ListGroup>
  );
};

export default Menu;
