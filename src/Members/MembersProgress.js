import React from 'react';
import { Table } from 'reactstrap';

const MembersProgress = (props) => {
    return (
      <Table hover>
        <thead>
          <tr>
            <th>#</th>
            <th>Tasks</th>
            <th>Note</th>
            <th>Date</th>
          </tr>
        </thead>
        <tbody>
        </tbody>
      </Table>
    );
  }
  
  export default MembersProgress;