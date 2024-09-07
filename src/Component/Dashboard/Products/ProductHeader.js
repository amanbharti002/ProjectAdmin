import './Products.css';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import AddProduct from './AddProduct';
import { useState } from 'react';
import { searchProductApi } from '../../../API/api';



export default function ProductHeader() {
    const[search,setSearch] = useState(false)
    const [sho , setSho] =useState(false)
    const Searchcall = async (event)=>{

        const res = await searchProductApi(event.target.value)
        if(event.target.value !== "undefine"  || event.target.value!==null){
            setSearch(res)
        }   
    }


    const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);


    return (
        <>
            <div className="Mainhead1">
                <div className="left_side1">
                    <h3>Products</h3>
                </div>
                <div className='search'>
                    <input className='search' type='text' placeholder='product search' name='ProductName' onChange={Searchcall}></input>
                </div>



                <div>
                    <button
                        role="button"
                        onClick={handleShow}
                        style={{
                            backgroundColor: "green", // Removed extra space after "green"
                            fontSize: "12px",
                            width: "80px",
                            height: "40px",
                            color: "white"
                        }}
                    >
                        AddProducts
                    </button>
                </div>
            </div>


            <Modal show={show} onHide={handleShow}>
                <Modal.Header closeButton>
                    <Modal.Title>Add Product</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <AddProduct />
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