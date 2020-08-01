import React from 'react';
import TasksPage from '../TasksPage/TasksPage';
import styles from './Modal.module.css'
import MemberPage from '../MembersPage/MemberPage';

class Modal extends React.Component {
    state = {
      isOpen: false,
    }

  openModal = () => {
    this.setState({isOpen: true})
  }

  closeModal = () => {
    this.setState({isOpen: false})
  }
  
  onConfirmHandle = () => {
    this.props.create();
    this.closeModal();
  }

  render() {
    const {isOpen} = this.state
    const id = this.props.id
    return (
      <>
        <button onClick={this.openModal} className={this.props.className}>{this.props.text}</button>
        <div  className={(isOpen) ? 'open' : 'close'}>
          <div className={styles.modal__body}>
            <header>{this.props.header}</header>
            {(id === 'tasks') ? <TasksPage confirm={this.onConfirmHandle} cancel={this.closeModal} /> :             <MemberPage confirm={this.onConfirmHandle} cancel={this.closeModal} />}

          </div>
        </div>
      </>  
    );
  
  }
}

export default Modal;

