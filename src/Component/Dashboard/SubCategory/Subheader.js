import './SubCategory.css';
import { useState } from "react";
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import AddSubCategory from "./AddSubCategory";

export default function Subheader() {
    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    return (
        <>
            <div className="Mainhead">
                <div className="left_side">
                    <h3>SubCategory</h3>
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
                        Addsub
                    </button>
                </div>
            </div>

            <Modal show={show} onHide={handleClose}>
                <Modal.Header closeButton>
                    <Modal.Title>Add SubCategory</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <AddSubCategory /> {/* Assuming AddSubCategory is correctly implemented */}
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