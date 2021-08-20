import React, { Component } from 'react';
import { Table, Space } from 'antd';

const data = [
  {
    name: 'John Brown',
  },
  {
    name: 'Jim Green',
  },
  {
    name: 'Joe Black',
  },
];

export class Authors extends Component {

  constructor(props) {
    super(props);

    this.state = {
      authors: data.map(
        author => (
          { ...author, key: author.name }
        )
      )
    }

    this.columns = [
      {
        title: 'Name',
        dataIndex: 'name',
      },
      {
        title: 'Action',
        key: 'action',
        render: (text, record) => (
          <Space size="middle">
            <a>Details</a>
            <a>Edit</a>
            <a>Delete</a>
          </Space>
        ),
      },
    ];

  }


  render() {
    return <Table columns={this.columns} dataSource={this.state.authors} />
  }

}