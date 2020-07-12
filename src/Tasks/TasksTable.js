import React from 'react';
import { Table } from 'reactstrap';
import GetTasks from './GetTasks';

function TasksTable() {
  return (
    <Table hover>
      <thead>
        <tr>
          <th>#</th>
          <th>Task</th>
          <th>Start</th>
          <th>Deadline</th>
          <th></th>
        </tr>
      </thead>
      <tbody>
        <GetTasks />
      </tbody>
    </Table>
  );
}

export default TasksTable;