import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { Table, Space } from 'antd';

import { Heading } from '../layout/Heading';

const data = [
  {
    id: 1,
    name: 'John Brown',
  },
  {
    id: 2,
    name: 'Jim Green',
  },
  {
    id: 3,
    name: 'Joe Black',
  },
];

export const Authors = () => {

  const [authors, setAuthors] = useState([]);

  useEffect(() => {
    setAuthors(data.map(author => (
      { ...author, key: author.name }
    )))
  }, [])

  const columns = [
    {
      title: 'Name',
      dataIndex: 'name',
    },
    {
      title: 'Action',
      key: 'action',
      render: (text, record) => (
        <Space size="middle">
          <Link to={{
            pathname: `/authors/${record.id}/edit`,
            state: {
              record: record,
            }
          }}
          >
            Edit
          </Link>
          <a>Delete</a>
        </Space>
      ),
    },
  ];

  return (
    <>
      <Heading
        title="Authors"
        link="/authors/new"
        linkText="Add Author"
      />
      <Table columns={columns} dataSource={authors} />
    </>
  )

}
