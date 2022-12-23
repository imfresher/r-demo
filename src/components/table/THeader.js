import React from 'react';

function THeader({ columns }) {
  return (
    <thead>
      <tr>
        {columns.map((column, index) => {
          return (
            <th key={column.name}>{column.title}</th>
          );
        })}
      </tr>
    </thead>
  );
}

export default THeader;
