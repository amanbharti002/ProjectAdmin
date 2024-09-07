import { MdUpdate, MdDelete } from "react-icons/md";
import ProductHeader from "./ProductHeader";
import './Products.css';
import { deleteProductApi, getAllProductApi, searchProductApi } from "../../../API/api";
import { useState, useEffect } from "react";
import Table from 'react-bootstrap/Table';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import UpdateProduct from "./updateProduct";
import { GrAccessibility, GrView } from "react-icons/gr";
import { APi_IMAGE } from "../../../URL/URL";
import AddProduct from "./AddProduct";


export default function Products(props) {
    const [search, setSearch] = useState(false)
    const [sho, setSho] = useState(false)
    
    const [pdata, setPdata] = useState();
    const ProductCall = async () => {
        const res = await getAllProductApi(page);
        if (res.status === "success") {
            setPdata(res);

        }
    };
    const Searchcall = async (event) => {
        
        const res = await searchProductApi(event.target.value)
        if (event.target.value !== "undefine" || event.target.value !== null) {
            console.log("res",res)
           setPdata(res)
        }
    }
    const [show1, setShow1] = useState(false);
    const handleClose2 = () => setShow(false);
    const handleShow2 = () => setShow(true);

    // Delete
    const [showdel, setShowDel] = useState(false);
    const [show, setShow] = useState(false);

    const [delete_id, setDelete_id] = useState(null);

    const handleClose1 = async () => {
        setShowDel(false)
    }

    // update


    const [updatedata, setupdatedata] = useState()
    const handleClose = () => setShow(false);
    const handleShow1 = () => setShow(true);



    const DataDelete = async () => {
        const res = await deleteProductApi(delete_id);
        if (res.status === "success") {
            alert("Product deleted")
        }
        else {
            alert("fail to delete")
        }

        handleClose1()
    }



    const [currentPage, setCurrentPage] = useState(1);

   
    const [page, setPage] = useState(1);
    
    useEffect(() => {
        ProductCall(page);
    }, [page]);



    const handlePageChange = (page) => {
        setCurrentPage(page);
    };



    const [data, setData] = useState([]);
    const [totalPages, setTotalPages] = useState(1);





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
                        onClick={handleShow2}
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


            <Modal show={show1} onHide={handleShow2}>
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
            <div style={{ overflowX: "scroll" }}>
                <table className="tab">
                    <thead>
                        <tr>
                            <th>SRNo</th>
                            <th>ProductName</th>
                            <th>ProductPrice</th>
                            <th>ProductCurrancy</th>
                            <th>ProductFeedback</th>
                            <th>ProductCatId</th>
                            <th>ProductSubCatId</th>
                            <th>ProductDescription</th>
                            <th>ProductTitle</th>
                            <th>ProductUpdate</th>
                            <th>ProductDelete</th>
                            <td>ProductImage</td>


                        </tr>
                    </thead>
                    <tbody className="tbody">
                        {pdata?.data?.map((e, index) => (
                            <tr key={index}>
                                <td>{index + 1}</td>
                                <td>{e.ProductName}</td>
                                <td>{e.ProductPrice}</td>
                                <td>{e.ProductCurrancy}</td>
                                <td>{e.ProductFeedback}</td>
                                <td>{e.ProductCatId}</td>
                                <td>{e.ProductSubCatId}</td>
                                <td>{e.ProductDescripton}</td>
                                <td>{e.ProductTitle}</td>
                                <td><button onClick={() => { setShow(true); setupdatedata(e) }} style={{ color: "skyblue", fontSize: "15px" }}><MdUpdate /></button></td>
                                <td><button onClick={() => { setShowDel(true); setDelete_id(e?._id) }} style={{ fontSize: "15px", color: "red" }}><MdDelete /></button></td>
                                <td><img src={`http://localhost:5000/images/${e.ProductImage}`} width={100} height={100}></img></td>

                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>


            <div>
                <ul>
                    {data.map(item => (
                        <li key={item.id}>{item.name}</li> // Adjust based on API response
                    ))}
                </ul>
                <div className="pagination">
                    <div className="bt1">
                        <button
                            onClick={() => setPage(page - 1)}>Previous </button>
                    </div>

                    <span>Page {currentPage} of {totalPages}</span>

                    <div className="bt2">
                        <button onClick={() => setPage(page + 1)}> Next </button>
                    </div>





                </div>
            </div>




            <Modal show={showdel} onHide={handleClose1}>
                <Modal.Header closeButton>
                    <Modal.Title>Modal heading</Modal.Title>
                </Modal.Header>
                <h1>delete</h1>
                <Modal.Footer>
                    <Button variant="secondary" onClick={handleClose1}>
                        Cansel
                    </Button>
                    <Button variant="primary" onClick={DataDelete}>
                        Ok
                    </Button>
                </Modal.Footer>

            </Modal>


            <Modal show={show} onHide={handleClose}>
                <Modal.Header closeButton>
                    <Modal.Title>Modal heading</Modal.Title>
                </Modal.Header>
                <Modal.Body><UpdateProduct updatedetail={updatedata} /></Modal.Body>

            </Modal>





        </>
    )
}