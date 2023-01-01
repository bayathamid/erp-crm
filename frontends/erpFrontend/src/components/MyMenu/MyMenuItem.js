import React from 'react';
import { Link } from 'react-router-dom';

export default function MyMenuItem({ icon, caption, collapse, link }) {
  return (
    <Link to={link}>
      <div
        style={{
          display: 'flex',
          justifyContent: 'space-between',
          marginBottom: '10px',
        }}
      >
        {collapse ? <div /> : <div>{caption}</div>}
        <div style={{ marginLeft: '32px', width: 'auto' }}>{icon}</div>
      </div>
    </Link>
  );
}
