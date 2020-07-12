import React from 'react';
import { Table } from 'reactstrap';
import GetUsers from './GetUsers';

function MembersTable() {
  return (
    <Table hover>
      <thead>
        <tr>
          <th>#</th>
          <th>Full Name</th>
          <th>Direction</th>
          <th>Education</th>
          <th>Start</th>
          <th>Age</th>
          <th></th>
        </tr>
      </thead>
      <tbody>
        <GetUsers />
      </tbody>
    </Table>
  );
}

export default MembersTable;