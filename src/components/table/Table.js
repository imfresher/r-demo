import React, { useMemo } from 'react';
import THeader from './THeader';
import TBody from './TBody';

function Table(props) {
  const { columns, data } = props;

  return <div className="table__wrapper table-responsive">
    <table className="table">
      <THeader columns={ columns } />
      <TBody columns={columns} data={data} />
    </table>
  </div>;
}

export default Table;
