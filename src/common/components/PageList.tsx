import React from 'react';
import { Link } from 'react-router-dom';


export default function PageList() {
  const pageLinks = ['/', 'about', 'settings', 'calendar'].map(
    (path, index) => <Link className='link' key={index} to={path}> { path } </Link>
  ).map(
    (link, index) => <li key={index}> { link } </li>
  );

  return (
    <ul>
      { pageLinks }
    </ul>
  );
}
