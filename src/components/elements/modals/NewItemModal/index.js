import Modal from 'react-bootstrap/Modal';

export default function NewItemModal({ open, onClose }) {
  return (
    <Modal show={open} onHide={onClose}>
      <Modal.Header closeButton>
        <Modal.Title>Add New Item</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        Test
      </Modal.Body>
    </Modal>
  );
}