// import { render } from 'tests/utils';
// import Table from '..';

// describe('Table', () => {
//   it('renders JSX correctly', () => {
//     const data = [
//       {
//         id: 1,
//         title: 'Post 001',
//         description: 'This is description 001',
//         image: '',
//         status: 1,
//         created_by: 'Admin',
//         created_at: '2022-11-05 00:00',
//         updated_by: null,
//         updated_at: null
//       },
//       {
//         id: 2,
//         title: 'Post 002',
//         description: 'This is description 002',
//         image: '',
//         status: 1,
//         created_by: 'Admin',
//         created_at: '2022-11-06 00:00',
//         updated_by: null,
//         updated_at: null
//       },
//       {
//         id: 3,
//         title: 'Post 003',
//         description: 'This is description 003',
//         image: '',
//         status: 1,
//         created_by: 'Admin',
//         created_at: '2022-11-02 00:00',
//         updated_by: null,
//         updated_at: null
//       }
//     ];

//     const columns = [
//       {
//         data: 'title',
//         name: 'title',
//         title: 'Title'
//       },
//       {
//         data: 'description',
//         name: 'description',
//         title: 'Description'
//       },
//       {
//         data: 'status',
//         name: 'status',
//         title: 'Status'
//       }
//     ];

//     const { asFragment } = render(
//       <Table data={data} columns={columns}>
//         {'child'}
//       </Table>,
//     );

//     expect(asFragment().firstChild).toMatchSnapshot();
//   });
// });
