import {  updateSubCategoryApi } from "../../../API/api"
import { useState } from "react"

export default function UpdateSubCategory({ updatedetail }) {
    const [subupdate, setSubupdate] = useState(updatedetail);
    console.log("details",updatedetail)
    const handleChange = (event) => {
        setSubupdate({ ...subupdate, [event.target.name]: event.target.value })
    }

    const handleSubmit = async (event) => {
        event.preventDefault()
        console.log(subupdate)
        const res = await updateSubCategoryApi(updatedetail?._id,subupdate);
        console.log("res data",res)
        if (res.status === "success") {
            alert("SubCategory Updated")

        } else {
            alert("not updated");
        }

    }

    return (
        <>
            <form onSubmit={handleSubmit}>
                <input type="text" placeholder="SubcatTitle" name="catsubcatTitle" defaultValue={updatedetail?.catsubcatTitle} onChange={handleChange}></input>
                <input type="text" placeholder="SubcatName" name="catsubcatName" defaultValue={updatedetail?.catsubcatName} onChange={handleChange}></input>
                <button type="submit">Subupdate</button>
            </form>
        </>
    )
}