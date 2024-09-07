import { useState } from "react"
import { UpdateCategoryApi } from "../../../API/api";

export default function UpdateSubCategory({ updatedetail }) {
    const [catupdate, setCatupdate] = useState(updatedetail);
    console.log("details",updatedetail)
    const handleChange = (event) => {
        setCatupdate({ ...catupdate, [event.target.name]: event.target.value })
    }

    const handleSubmit = async (event) => {
        event.preventDefault()
        console.log(catupdate)
        const res = await UpdateCategoryApi(updatedetail._id,catupdate);
        console.log(res)
        if (res.status === "success") {
            alert("SubCategory Updated")

        } else {
            alert("not updated");
        }

    }

    return (
        <>
            <form onSubmit={handleSubmit}>
                <input type="text" placeholder="catTitle" name="catTitle" defaultValue={updatedetail?.catTitle} onChange={handleChange}></input>
                <input type="text" placeholder="catName" name="catName" defaultValue={updatedetail?.catName} onChange={handleChange}></input>
                <button type="submit">Catupdate</button>
            </form>
        </>
    )
}