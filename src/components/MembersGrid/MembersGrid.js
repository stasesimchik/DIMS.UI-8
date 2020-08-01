import React from 'react';
import {firebaseMethods} from '../Firebase/Firebase';
import Modal from '../Modal/Modal';
import TableBody from '../TableBody/TableBody';
import styles from './MembersGrid.module.css'

class MembersGrid extends React.Component {
        state = {
            users: [],
        } 

    handleDelete = ({target}) => {
        let userId = target.closest('tr').id;
        firebaseMethods.deleteUser(userId);
        firebaseMethods.getUsers()
        .then(
            (members) => {
                this.setState({ users: members });
              }
        )  
    }

    createUser = () => {
        firebaseMethods.getUsers()
        .then(
            (members) => {
                this.setState({ users: members });
              }
        )  
    }

    componentDidMount() {
        firebaseMethods.getUsers()
        .then(
            (members) => {
                this.setState({ users: members });
              }
        )  
    }

    render() {
        const {users} = this.state
            return (
                <>
                    <Modal create={this.createUser} id='users' text='Register' className={styles.regBtn} header='User information'/>
                    <table>
                        <thead>
                            <tr>
                            <th>#</th>
                            <th>Full Name</th>
                            <th>Direction</th>
                            <th>Education</th>
                            <th>Start</th>
                            <th>Age</th>
                            <th>Manage</th>
                            </tr>
                        </thead>
                        <tbody>
                            <TableBody data={users} deleteUser={this.handleDelete} id='users' />
                        </tbody>
                    </table>
               </>
            )
        
    }
}

export default MembersGrid; 


