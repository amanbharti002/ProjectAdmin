import { useState } from "react";
import { addProductApi } from "../../../API/api";

export default function AddProduct() {
    const [addProduct, setAddProduct] = useState({});

    const handleChange = (event) => {
        console.log(addProduct)
            if(event.target.name ==="ProductImage"){
                setAddProduct({...addProduct,[event.target.name]:event.target.files[0]})
                console.log(event.target.files[0])
            }else{
                setAddProduct({...addProduct,[event.target.name]:event.target.value})  
            }
    };

    const handleSubmit = async (event) => {
        event.preventDefault();
        const sendData = new FormData();
        Object.keys(addProduct).forEach((v)=>{
            sendData.append(v,addProduct[v])
        })


        // sendData.append('ProductImage',addProduct.ProductImage)
        // sendData.append('ProdcutPrice',addProduct.productPrice)
        // sendData.append('ProductName',addProduct.ProductName)
        // sendData.append('ProductCurrency',addProduct.ProductCurrency)
        // sendData.append('ProductUnit',addProduct.ProductUnit)
        // sendData.append('ProductRating',addProduct.ProductRating)
        // sendData.append('ProductFeedback',addProduct.ProductFeedback)
        // sendData.append('ProductStock',addProduct.ProductStock)
        // sendData.append('ProductInstock',addProduct.ProductInstock)
        // sendData.append('ProductCatId',addProduct.ProductCatId)
        // sendData.append('ProductSubCatId',addProduct.ProductSubCatId)
        // sendData.append('ProductDescription',addProduct.ProductDescription)
        // sendData.append('ProductTitle',addProduct.ProductTitle)

        const res = await addProductApi(sendData);
        console.log(res);
        if (res.status === "success") {
            alert(res.message);
            console.log(addProduct);
        } else {
            alert(`Error: ${res.message}`);
        }
    };

    return (
        <div>
            <form onSubmit={handleSubmit}>
                <p>
                    <input
                        type="text"
                        placeholder="ProductTitle"
                        name="ProductTitle"
                        onChange={handleChange}
                    />
                </p>
                <p>
                    <input
                        type="text"
                        placeholder="ProductName"
                        name="ProductName"
                        onChange={handleChange}
                    />
                </p>
                <p>
                    <input
                        type="number"
                        placeholder="ProductPrice"
                        name="ProductPrice"
                        onChange={handleChange}
                    />
                </p>
                <p>
                    <input
                        type="text"
                        placeholder="ProductCurrency"
                        name="ProductCurrancy"
                        onChange={handleChange}
                    />
                </p>
                <p>
                    <input
                        type="text"
                        placeholder="ProductUnit"
                        name="ProductUnit"
                        onChange={handleChange}
                    />
                </p>
                <p>
                    <input
                        type="text"
                        placeholder="ProductRating"
                        name="ProductRating"
                        onChange={handleChange}
                    />
                </p>
                <p>
                    <input
                        type="text"
                        placeholder="ProductFeedback"
                        name="ProductFeedback"
                        onChange={handleChange}
                    />
                </p>
                <p>
                    <input
                        type="number"
                        placeholder="ProductStock"
                        name="ProductStock"
                        onChange={handleChange}
                    />
                </p>
                <p>
                    <label>
                        <input
                            type="text"
                            placeholder=" In Stock"
                            name="ProductInstock"
                            onChange={handleChange}
                        />
                       
                    </label>
                </p>
                <p>
                    <input
                        type="text"
                        placeholder="ProductCatId"
                        name="ProductCatId"
                        onChange={handleChange}
                    />
                </p>
                <p>
                    <input
                        type="text"
                        placeholder="ProductSubCatId"
                        name="ProductSubCatId"
                        
                        onChange={handleChange}
                    />
                </p>
                <p>
                    <input
                        type="text"
                        placeholder="ProductDescription"
                        name="ProductDescripton"
                        onChange={handleChange}
                    />
                </p>
                <p>
                    <input
                        type="file"
                        placeholder="productImage"
                        name="ProductImage"
                        onChange={handleChange}
                    />
                </p>
                <p>
                    <button type="submit" className="bt">Add Product</button>
                </p>
            </form>
        </div>
    );
}