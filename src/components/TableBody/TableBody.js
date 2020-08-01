import React from 'react';
import edit from '../../common/img/edit.png';
import Modal from '../Modal/Modal';
import styles from './TableBody.module.css'
import { NavLink } from 'react-router-dom';
import progress from '../../common/img/progress.png';
import tasks from '../../common/img/tasks.png';
import del from '../../common/img/del.png';


function TableBody(props) {
    const data = props.data; 
    const handleDelete = props.deleteTask
    let id = props.id;
    
    return data.map(function(item,index){
        if(id === 'tasks') {
            return (
                <tr key={item.name} id={item.name}>
                    <td>{index + 1}</td>
                    <td>{item.name}</td>
                    <td>{item.deadline}</td>
                    <td>{item.start}</td>
                    <td>
                        <div className={styles.membersBtn__block}>
                            <Modal text={<img src={edit} />} className={styles.btnEdit} header='Edit task'/>
                            <button className={styles.btnDelete} onClick={handleDelete} ><img src={del} /></button>
                        </div>                       
                    </td>
                </tr>
            )
        }
        if(id === 'users') {
            return (
                <tr key={item.userId} id={item.userId}>
                    <td>{index + 1}</td>
                    <td>{item.userId}</td>
                    <td>{item.direction}</td>
                    <td>{item.education}</td>
                    <td>{item.start}</td>
                    <td>{item.age}</td>
                    <td>
                        <div className={styles.membersBtn__block}>
                            <NavLink to='/membersProgress' className={styles.navMenu__link}><button className={styles.btn}><img src={progress} /></button></NavLink>
                            <NavLink to='/membersTasks' className={styles.navMenu__link}><button className={styles.btn}><img src={tasks} /></button></NavLink>
                            <Modal text={<img src={edit} />} className={styles.btnEdit} header='Edit user'/>
                            <button className={styles.btnDelete} onClick={handleDelete} ><img src={del} /></button>
                        </div>                       
                    </td>
                </tr>
            )
        }
    })

}

export default TableBody; 


