import React from 'react';
import { Table } from 'reactstrap';

const MembersTasks = (props) => {
    return (
      <Table hover>
        <thead>
          <tr>
            <th>#</th>
            <th>Name</th>
            <th>Start</th>
            <th>Deadline</th>
            <th>Status</th>
            <th></th>
            <th>Admin</th>
          </tr>
        </thead>
        <tbody>
        </tbody>
      </Table>
    );
  }
  
  export default MembersTasks;