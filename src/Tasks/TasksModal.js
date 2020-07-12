import React, { useState } from 'react';
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';
import RegTasks from './RegTasks';

const TasksModal = (props) => {
  const { className } = props;

  const [modal, setModal] = useState(false);

  const toggle = () => setModal(!modal);

  return (
    <div className='main-container'>
      <Button color="warning" onClick={toggle}>Create new task</Button>
      <Modal isOpen={modal} toggle={toggle} className={className}>
        <ModalHeader toggle={toggle}>Task information</ModalHeader>
        <ModalBody>
            <RegTasks />
        </ModalBody>
        <ModalFooter>
          <Button type="submit" color="success" onClick={toggle}>Confirm</Button>{' '}
          <Button color="danger" onClick={toggle}>Cancel</Button>
        </ModalFooter>
      </Modal>
    </div>
  );
}

export default TasksModal;