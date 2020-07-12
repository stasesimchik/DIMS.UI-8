import React, { useState } from 'react';
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';
import RegForm from './RegForm';

const RegModal = (props) => {
  const { className } = props;

  const [modal, setModal] = useState(false);

  const toggle = () => setModal(!modal);

  return (
    <div className='main-container'>
      <Button color="warning" onClick={toggle}>Register</Button>
      <Modal isOpen={modal} toggle={toggle} className={className}>
        <ModalHeader toggle={toggle}>User information</ModalHeader>
        <ModalBody>
            <RegForm />
        </ModalBody>
        <ModalFooter>
          <Button type="submit" color="success" onClick={toggle}>Confirm</Button>{' '}
          <Button color="danger" onClick={toggle}>Cancel</Button>
        </ModalFooter>
      </Modal>
    </div>
  );
}

export default RegModal;