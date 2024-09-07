import { API_BASE_URL } from "../URL/URL"
import { API_ROUTER } from "../UTILS/ApiRouter"

export const SignupApi =async (signupData)=>{
   try{
    const header ={
        method:"POST",
        headers:{"Content-type":"application/json"},
        body:JSON.stringify(signupData)
    }
    const res = await fetch(`${API_BASE_URL}${API_ROUTER.signup}`,header)
    const resData = res.json()
    return resData;
   }catch(err){
    console.log(err)
   }
}

//loging api

export const LoginApi =async (loginData)=>{
    try{
     const header ={
         method:"POST",
         headers:{"Content-type":"application/json"},
         body:JSON.stringify(loginData)
     }
     const res = await fetch(`${API_BASE_URL}${API_ROUTER.signup}`,header)
     const resData = res.json()
     return resData;
    }catch(err){
     console.log(err)
    }
 }
 
 //category api
 export const AddCategoryApi = async(data)=>{
    try{
        const header ={
            method:"POST",
            headers:{"Content-type":"application/json"},
            body:JSON.stringify(data)
        }
        
    const resData =await fetch(`${API_BASE_URL}${API_ROUTER.addCategory}`,header)
    return await resData.json()
    }catch(err){console.log(err)}
 }

export const getAllCategoryApi = async()=>{
    try{
        const header = {
            method:"GET",
            headers:{
                "Content-type":"application/json"
            }
        }
        const resData = await fetch(`${API_BASE_URL}${API_ROUTER.getAllCategory}`,header)
        return await resData.json()
    }catch(err){console.log(err)}
}

export const UpdateCategoryApi = async(_id,UpdateData)=>{
    try{
        const header = {
            method:"PUT",
            headers:{
                "Content-type":"application/json"
            },
            body:JSON.stringify((UpdateData))
        }
        const resData = await fetch(`${API_BASE_URL}${API_ROUTER.UpdateCategory}/${_id}`,header)
        return await resData.json()
    }catch(err){console.log(err)}
}



 //subCategory api
 export const addSubCategoryApi = async(data)=>{
    try{
        const header ={
            method:"POST",
            headers:{"Content-type":"application/json"},
            body:JSON.stringify(data)
        }
    const resData = await fetch(`${API_BASE_URL}${API_ROUTER.addSubCategory}`,header)
        const resObjData = await resData.json()
        return resObjData;
    }catch(err){console.log(err)}
 }

 export const getAllSubCategoryApi = async()=>{
    try{
        const header ={
            method:"get",
            headers:{"Content-type":"application/json"}
        }
        const resData = await fetch(`${API_BASE_URL}${API_ROUTER.getAllSubCategory}`,header)
        const resObjData = await resData.json()
        return resObjData;
    }catch(err){console.log(err)}
 }

 export const updateSubCategoryApi = async(_id,UpdateData)=>{
    try{
        const header={
            method:"PUT",
            headers:{
                "Content-type":"application/json"
            },
            body:JSON.stringify((UpdateData))
        }
        const resData = await fetch(` ${API_BASE_URL}${API_ROUTER.updateSubCategory}/${_id}`,header)
        const resObjData = await resData.json()
        return resObjData
    }
    catch(err){
        console.log(err)
 }
    
    }

export const deleteSubCategoryApi = async (_id) => {
    try {
        const header = {
            method: "DELETE",
            headers: {
                "Content-Type": "application/json"
            },
            
        };
        const res = await fetch(`${API_BASE_URL}${API_ROUTER.deleteSubCategory}/${_id}`, header);
        
        if (!res.ok) {
            throw new Error(`HTTP error! Status: ${res.status}`);
        }
        
        const resObjData = await res.json();
        return resObjData;
    } catch (err) {
        console.log(err);
        throw err; // Re-throw the error to be handled by the caller
    }
};

// aggregate category

export const CatagregateApi = async (id)=>{
   console.log(id)
    try{
        const header = {
          method:"Get",
          headers:{
            "Content-Type":"application/json"
          }

    };
    const res = await fetch(`${API_BASE_URL}${API_ROUTER.Cataggregate}/${id}`,header)
    const resObjData = await res.json()
    return resObjData
}
catch(err){
    console.log(err)
}
}


// ProductApi

export const getAllProductApi = async (page = 1) => {
    try {
        const res = await fetch(`${API_BASE_URL}${API_ROUTER.getAllProduct}?pageno=${page}`, {
            method: "GET",
            headers: {
                "Content-Type": "application/json"
            }
        });

        if (!res.ok) {
            throw new Error(`HTTP error! Status: ${res.status}`);
        }

        const resObjData = await res.json();
        return resObjData;

    } catch (err) {
        console.error('Error fetching products:', err);
        return { status: 'failed', message: err.message }; // Return an object to handle the error gracefully
    }
};


export const addProductApi = async function(data) {
    try {
        // Ensure ProductInstock is a boolean
        data.ProductInstock = !!data.ProductInstock;
        
        const header = {
            method: "POST",
            body: data
        };

        const res = await fetch(`${API_BASE_URL}${API_ROUTER.addProductApi}`, header);

        // Check if the response status is not in the range of 200-299
        if (!res.ok) {
            const errorData = await res.json();
            throw new Error(errorData.message || 'Something went wrong');
        }

        const resObjData = await res.json();
        return resObjData;
    } catch (err) {
        console.error('Error in addProductApi:', err);
        return {
            status: "failed",
            message: err.message || 'An unknown error occurred'
        };
    }
};



export const deleteProductApi = async function(id) {
    try {
        const header = {
            method: "DELETE",   // Use DELETE method
            headers: {
                "Content-Type": "application/json",
                // Add Authorization if needed, e.g.,
                // "Authorization": `Bearer ${token}`
            }
        };

        const res = await fetch(`${API_BASE_URL}${API_ROUTER.deleteProductApi}/${id}`, header);
        if (!res.ok) {
            throw new Error(`HTTP error! Status: ${res.status}`);
        }
        const resObjData = await res.json();
        return resObjData;
    } catch (err) {
        console.error('Error deleting product:', err);
        return {
            status: 'failed',
            message: 'An error occurred while deleting the product',
            error: err.message
        };
    }
};

export const updateProductApi = async function(id, updateData) {
    try {
        const header = {
            method: "PUT",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify((updateData))
        };

        const res = await fetch(`${API_BASE_URL}${API_ROUTER.updateProductApi}/${id}`, header);
        const resObjData = await res.json();
        return resObjData;
        } catch (error) {
        console.log(error); 
        return null; 
    }
}

export const uploadProductImageApi = async function(Data){
    const header = {
        method:"POST",
        body:Data

        
    }
    const res = await fetch(`${API_BASE_URL}${API_ROUTER.uploadProductImageApi}`,header)
    return  await res.json()
}

export const searchProductApi = async function(name){
    const header = {
        method:"GET",
        headers:{
            "Content-Type":"application/json"
        }
    }
    const res = await fetch(`${API_BASE_URL}${API_ROUTER.searchProductApi}?name=${name}`,header)
    return await res.json()
}