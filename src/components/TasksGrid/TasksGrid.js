import React from 'react';
import TasksModal from '../Modal/Modal';
import {firebaseMethods} from '../Firebase/Firebase';
import TableBody from '../TableBody/TableBody';
import styles from '../MembersGrid/MembersGrid.module.css'


class TasksGrid extends React.Component {
      state = {
          tasks: [],
      } 

  handleDelete = ({target}) => {
    let taskId = target.closest('tr').id;
    console.log(taskId)
    firebaseMethods.deleteTask(taskId);
    firebaseMethods.getTasks()
    .then(
        (list) => {
            this.setState({ tasks: list });
          }
    )  
}

  componentDidMount() {
    firebaseMethods.getTasks()
    .then(
        (tasksList) => {
            this.setState({ tasks: tasksList });
          }
    )  
  }

  createTask = () => {
    firebaseMethods.getTasks()
    .then(
        (tasksList) => {
            this.setState({ tasks: tasksList });
          }
    )
  }

  render() {
    const {tasks} = this.state

    return(
      <>
    <TasksModal create={this.createTask} text='Create' id='tasks' className={styles.regBtn} header='Task information' />
      <table>
      <thead>
        <tr>
          <th>#</th>
          <th>Task</th>
          <th>Start</th>
          <th>Deadline</th>
          <th>Manage</th>
        </tr>
      </thead>
      <tbody>
        <TableBody data={tasks} deleteTask={this.handleDelete} id='tasks'/>
      </tbody>
    </table>
    </>
    )
  }
};

export default TasksGrid; 


