export const indexColumns = [
  {
    name: 'resort',
    data: 'id',
    title: '',
    render: () => {
      return <span className="action__resort"><i className="bi bi-grip-vertical"></i></span>;
    },
  },
  {
    name: 'check',
    data: 'id',
    title: '',
    render: (name, data, row) => {
      return <input type="checkbox" name={`cb[${row[data]}]`} />;
    },
  },
  {
    name: 'no',
    data: null,
    title: 'No.',
  },
  {
    name: 'id',
    data: 'id',
    title: 'ID',
    render: (name, data, row) => {
      return (
        <div className="row__collapse">
          <span className="row__collapse__icon"><i className="bi bi-chevron-down"></i></span>
          <span>{ row[data] }</span>
        </div>
      );
    },
  },
  {
    name: 'image',
    data: 'image',
    title: 'Image',
    render: () => {
      return (
        <div className="img-small is--circle">
          <img src="https://cdn.dribbble.com/users/1997192/avatars/normal/f4a8360e90be7c63e27096f075d5c5e1.png?1592063135" alt="" />
        </div>
      );
    }
  },
  {
    name: 'name',
    data: 'name',
    title: 'Name',
  },
  {
    name: 'position',
    data: 'position',
    title: 'Position',
  },
  {
    name: 'department',
    data: 'department',
    title: 'Department',
  },
  {
    name: 'email',
    data: 'email',
    title: 'E-mail',
  },
  {
    name: 'experience',
    data: 'experience',
    title: 'Experience',
  },
  {
    name: 'status',
    data: 'status',
    title: 'Status',
    render: (name, data, row) => {
      return (
        <span className="badge text-bg-primary">{ row[data] }</span>
      );
    },
  },
  {
    name: 'actions',
    data: 'id',
    title: 'Actions',
    render: (name, data, row) => {
      return (
        <div className="r__action">
          {/*<a href="javascript:void(0)"><i className="bi bi-three-dots-vertical"></i></a>*/}
          <a href="/" className="r__action p-2"><i className="bi bi-eye"></i></a>
          <a href="/" className="r__action p-2"><i className="bi bi-pencil"></i></a>
          <a href="/" className="r__action r__action__delete p-2"><i className="bi bi-trash3"></i></a>
        </div>
      );
    }
  },
];
