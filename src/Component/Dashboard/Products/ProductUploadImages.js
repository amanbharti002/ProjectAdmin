import { useState } from "react"
import { uploadProductImageApi } from "../../../API/api"

useState
export default function ProductUploadImages(){

    const[upload,setUpload] = useState()

    const handleChange = (event)=>{
        setUpload({...upload ,[event.target.name]:event.target.value})

    }

    const handleSubmit = async (event)=>{
        event.preventDefault()

        const res =  await uploadProductImageApi()
        


    }
    return(
        <>
        <form onSubmit={handleSubmit}>
        <p><input type="file" name="image" onChange={handleChange}></input></p>
        <p><input type="submit" value={submit}></input></p>
        </form>

        </>
    )

}