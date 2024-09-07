import { useState } from "react";
import { updateProductApi } from "../../../API/api";

export default function UpdateProduct({ updatedetail }) {
    const [productupdate, setProductupdate] = useState(updatedetail);
    console.log("details", updatedetail);

    const handleChange = (event) => {
        setProductupdate({ ...productupdate, [event.target.name]: event.target.value });
    }

    const handleSubmit = async (event) => {
        event.preventDefault();
        console.log(productupdate);
        const res = await updateProductApi(updatedetail?._id, productupdate);
        console.log(res);
        if (res?.status === "success") {
            alert("Product Updated");
        } else {
            alert("Not updated");
        }
    }

    return (
        <>
            <form onSubmit={handleSubmit}>
                <input 
                    type="text" 
                    placeholder="ProductName" 
                    name="ProductName" 
                    defaultValue={updatedetail?.ProductName} 
                    onChange={handleChange} 
                />
                <input 
                    type="number" 
                    placeholder="ProductPrice" 
                    name="ProductPrice" 
                    defaultValue={updatedetail?.ProductPrice} 
                    onChange={handleChange} 
                />
                <input 
                    type="text" 
                    placeholder="ProductCurrancy" 
                    name="ProductCurrancy" 
                    defaultValue={updatedetail?.ProductCurrancy} 
                    onChange={handleChange} 
                />
                <input 
                    type="text" 
                    placeholder="ProductUnit" 
                    name="ProductUnit" 
                    defaultValue={updatedetail?.ProductUnit} 
                    onChange={handleChange} 
                />
                <input 
                    type="number" 
                    placeholder="ProductRating" 
                    name="ProductRating" 
                    defaultValue={updatedetail?.ProductRating} 
                    onChange={handleChange} 
                />
                <input 
                    type="text" 
                    placeholder="Productfeedback" 
                    name="Productfeedback" 
                    defaultValue={updatedetail?.Productfeedback} 
                    onChange={handleChange} 
                />
                <input 
                    type="number" 
                    placeholder="Productstock" 
                    name="Productstock" 
                    defaultValue={updatedetail?.Productstock} 
                    onChange={handleChange} 
                />
                <input 
                    type="text" 
                    placeholder="Productinstock" 
                    name="Productinstock" 
                    defaultValue={updatedetail?.Productinstock} 
                    onChange={handleChange} 
                />
                <input 
                    type="text" 
                    placeholder="ProductCatId" 
                    name="ProductCatId" 
                    defaultValue={updatedetail?.ProductCatId} 
                    onChange={handleChange} 
                />
                <input 
                    type="text" 
                    placeholder="ProductSubCatId" 
                    name="ProductSubCatId" 
                    defaultValue={updatedetail?.ProductSubCatId} 
                    onChange={handleChange} 
                />
                <input 
                    type="text" 
                    placeholder="ProductDescription" 
                    name="ProductDescription" 
                    defaultValue={updatedetail?.ProductDescription} 
                    onChange={handleChange} 
                />
                <input 
                    type="text" 
                    placeholder="ProductTitle" 
                    name="ProductTitle" 
                    defaultValue={updatedetail?.ProductTitle} 
                    onChange={handleChange} 
                />

                <button type="submit">Update</button>
            </form>
        </>
    );
};