import React from 'react';

function TBody(props) {
  const { data, columns } = props;
  const dataKeys = columns ? columns.map((column) => column.name) : [];

  const bodyRender = function () {
    return data.map((record, index) => {
      return (
        <tr key={index}>
          { columns.map((column, colIndex) => {
            let cellRender = '';

            if ('render' in column && typeof column.render === 'function') {
              cellRender = column.render(column.name, column.data, record);
            } else if (column.name in record && (! 'render' in column || typeof column.render !== 'function')) {
              cellRender = record[column.name];
            }

            return <td key={`${index}-${colIndex}`}>{ cellRender }</td>;
          }) }
        </tr>
      );
    });
  };

  return (
    <tbody>
      { bodyRender() }
    </tbody>
  );
}

export default TBody;
