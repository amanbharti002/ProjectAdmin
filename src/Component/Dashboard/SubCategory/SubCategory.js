import 'bootstrap/dist/css/bootstrap.min.css';
import { useEffect, useState } from "react"
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import './SubCategory.css'
import { AddCategoryApi,  deleteSubCategoryApi,  getAllCategoryApi, getAllSubCategoryApi, UpdateCategoryApi, } from "../../../API/api"
import Subheader from "./Subheader";
import { MdDelete, MdUpdate } from "react-icons/md";
import AddSubCategory from "./AddSubCategory";
import UpdateSubCategory from './UpdateSubCategory';



export default function SubCategory() {

    const [subCat, setSubCat] = useState([])
    const [show, setShow] = useState();

    // delete
    const [showdel, setShowDel] = useState(false);
    const [delete_id, setDelete_id] = useState(null);
    console.warn(delete_id)
//    update
    const [subdata ,setsubdata] =useState()
    const handleClose = () => setShow(false);
    const handleShow1 = () => setShow(true);

    const handleClose1 = ()=>{
        setShowDel(false)
    }

    


    const apiCaaling = async () => {
        console.log("fghjkl;")
        const res = await getAllSubCategoryApi()
        console.log("resData" ,res)
        if (res.status === 'success') {
            setSubCat(res.data)

        }
    }
    useEffect(() => {
        apiCaaling();
    }, [])


const DataDelete = async() =>{
    const res =  await deleteSubCategoryApi(delete_id);
    if(res.status === "success"){
        alert("SubCategory deleted")
    }
    else{
        alert("fail to delete")
    }

    handleClose1()
}







    return (
        <>
            <Subheader />
            <div className="table">
                <table className="table1">
                    <thead>
                        <tr className="tablesete">
                            <th>SrNo</th>
                            <th>subcattittle</th>
                            <th>subcatName</th>
                            <th>Update</th>
                            <th>Delete</th>

                        </tr>


                    </thead>
                    <tbody>
                        {subCat?.map((e, pos) =>
                            <tr className="bodewjfsdk" key={pos}>
                                <td>{++pos}</td>
                                <td>{e.catsubcatTitle}</td>
                                <td>{e.catsubcatName}</td>

                                <td className="icon">
                                <button  onClick={()=>{setShow(true);setsubdata(e)}} style={{ color: "skyblue", fontSize: "15px" }}><MdUpdate /></button>
                                </td>
                                <td>
                                <button  onClick={()=>{setShowDel(true);setDelete_id(e?._id)}} style={{ color: "red", fontSize: "15px" }}><MdDelete /></button>
                                </td>
                            </tr>)}


                    </tbody>
                </table>


        <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
        <Modal.Title>Modal heading</Modal.Title>
        </Modal.Header>
        <Modal.Body><UpdateSubCategory updatedetail={subdata} /></Modal.Body>
         
      </Modal>

      {/* delete */}



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




            </div>


        </>


    )
}