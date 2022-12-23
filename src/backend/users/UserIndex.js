import BackendLayout from 'layouts/BackendLayout' ;
// import TableHTML from 'components/table/TableHTML';
import Table from 'components/table';
import { indexColumns } from './columns';
import { userListData } from '_fake/users';

function UserIndex() {
  return (
    <BackendLayout>
      <Table
        columns={indexColumns}
        data={userListData}
      />
    </BackendLayout>
  );
}

export default UserIndex;
