import { useState } from 'react';
import './Category.css';
import AddCategory from './AddCategory';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';

export default function CategoryHeader(){
    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    return (
        <>
            <div className="Mainhead1">
                <div className="left_side1">
                    <h3>Category</h3>
                </div>
                <div>
                    <button
                        role="button"
                        onClick={handleShow} // Corrected onClick handler
                        style={{
                            backgroundColor: "green", // Removed extra space after "green"
                            fontSize: "12px",
                            width: "80px",
                            height: "40px",
                            color: "white"
                        }}
                    >
                        AddCategory
                    </button>
                </div>
            </div>

            <Modal show={show} onHide={handleClose}>
                <Modal.Header closeButton>
                    <Modal.Title>Add Category</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <AddCategory /> 
                </Modal.Body>
                <Modal.Footer>
                    <Button variant="secondary" onClick={handleClose}>
                        Close
                    </Button>
                    <Button variant="primary" onClick={handleClose}>
                        Save Changes
                    </Button>
                </Modal.Footer>
            </Modal>


            </>
    )
}