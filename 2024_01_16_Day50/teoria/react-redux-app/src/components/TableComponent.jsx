import React from 'react';
import { Table } from 'react-bootstrap'
import RowTableComponent from './RowTableComponent';
import { useSelector } from 'react-redux';

export default function TableComponent() {

  const userlist = useSelector( state => state );

  return (
    <Table striped bordered hover variant="dark">
        <thead>
          <tr>
            <th>#</th>
            <th>FullName</th>
            <th>Username</th>
            <th>Email</th>
            <th></th>
          </tr>
        </thead>
        <tbody>
            {userlist.map((row, index) => <RowTableComponent key={index} user={row} index={index} />)}
        </tbody>
      </Table>
  )
}
