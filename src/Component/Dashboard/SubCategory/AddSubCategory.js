import { useState, useEffect } from "react"
import { addSubCategoryApi } from "../../../API/api";
import { getAllCategoryApi } from "../../../API/api";
import './SubCategory.css';
export default function AddSubCategory() {
    const [getCat, setCategory] = useState([]);
    const [addData, setAddData] = useState({
        catsubcatTitle: "",
        catsubcatName: "",
        cat_id: ""
    });
    useEffect(() => {
        categoryApicall();
    }, [])
    const categoryApicall = async () => {
        const res = await getAllCategoryApi()
        console.log("category", res)
        setCategory(res)
    }
    const handleChangeadd = (event) => {
        setAddData({ ...addData, [event.target.name]: event.target.value });
        console.log(addData)
    }

    const handleSubmitadd = async (event) => {
        event.preventDefault()
        const res = await addSubCategoryApi(addData);
        console.log(res);
        if (res.status === "success") {
            alert(res.message)
            console.log(addData)

        } else {
            alert(`Error: ${res.message}`);
        }

    }


    return (
        <>
            <div className='pk'>
                <form onSubmit={handleSubmitadd}>

                    <select onChange={handleChangeadd} name='cat_id'>
                        
                        {
                            getCat.data?.map((e, pos) =>
                                <option value={e._id} key={pos}>
                                    {e.catTitle}

                                </option>)
                        }
                    </select>

                    <p><input type="text" className='inpk1' placeholder="subcatTitle" name="catsubcatTitle" onChange={handleChangeadd}></input></p>
                    <p><input type="text" className='inpk1' placeholder="subcatName" name="catsubcatName" onChange={handleChangeadd}></input></p>
                    <p><button type="submit" className="bt">add</button></p>


                </form>




            </div>

        </>
    )

}