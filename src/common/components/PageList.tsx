import React from 'react';
import { Link } from 'react-router-dom';


export default function PageList() {
  // NOTE(gr3yknigh1): extract page path list
  const pageLinks = ['/', 'about', 'settings', 'calendar'].map(
    (path, index) => {
      return <li key={index}>
        <Link className='link' to={ path }> { path } </Link>
      </li>;
    }
  );

  return (
    <ul>
      { pageLinks }
    </ul>
  );
}
