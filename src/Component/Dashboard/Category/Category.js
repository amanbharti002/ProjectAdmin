import { useEffect, useState } from "react"
import { AddCategoryApi, CatagregateApi, getAllCategoryApi } from "../../../API/api"
import CategoryHeader from "./CategoryHeader"
import { MdUpdate,MdDelete } from "react-icons/md"
import UpdateCategory from "./UpdateCategory"
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import { MdOutlineViewHeadline } from "react-icons/md";
import Cataggregate from "./Cataggregate"


export default function Category(){
const[catData , setCatData]  = useState([])
const [updatedata ,setUpdatedata] =useState()
const[show,setShow] = useState()
const[aggshow,setAggShow] = useState()

const handleClose = () => setShow(false);
const handleShow1 = () => setShow(true);
const[formshow,setFormshow] = useState(false)
const CancelForm = () => {
        setAggShow(false)
        setFormshow(false)

    };




    
    const CategoryApiCall = async ()=>{
        const res = await getAllCategoryApi()
       setCatData(res.data)
       
    }

    
    useEffect(()=>{
        CategoryApiCall()
    },[])



//   Aggregate categoryapi

    const AggregateCall = async(id)=>{
        const res = await CatagregateApi(id)
        console.log("aagregate data",res)
        setAggShow(res)
        
        }
   return (
    <>
    <CategoryHeader />
   
   <div className="table">
                <table className="table1">
                    <thead>
                        <tr className="tablesete">
                            <th>SrNo</th>
                            <th>categorytittle</th>
                            <th>categoryName</th>
                            <th>Update</th>
                            <th>Delete</th>
                            <th>SubCategory</th>


                        </tr>


                    </thead>
                     <tbody>
                        {
                        catData?.map((e, pos) =>
                            <tr className="bodewjfsdk" key={pos}>
                                <td>{++pos}</td>
                                <td>{e.catTitle}</td>
                                <td>{e.catName}</td>


                                <td className="icon">
                                <button onClick={()=>{setShow(true);setUpdatedata(e)}} style={{ color: "skyblue", fontSize: "15px" }}><MdUpdate /></button>
                                </td>
                                <td>
                                    <button style={{ color: "red", fontSize: "15px" }}><MdDelete /></button>

                                </td> 
                                <td>
                                    <button style={{color:"blue",fontSize:"15px"}} onClick={()=>{AggregateCall(e._id);setFormshow(true)}}><MdOutlineViewHeadline /></button>
                                    
                                </td>
                            </tr>)}


                    </tbody> 
                </table>
                </div>


        <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
        <Modal.Title>Modal heading</Modal.Title>
        </Modal.Header>
        <Modal.Body><UpdateCategory  updatedetail={updatedata}/></Modal.Body>
        </Modal>

        <Modal show={formshow} onHide={CancelForm}>
        <Modal.Header closeButton>
        <Modal.Title>SubCategory Details</Modal.Title>
        </Modal.Header>
        <Modal.Body><Cataggregate data={aggshow}/></Modal.Body>
        </Modal>
    </>
   )
}