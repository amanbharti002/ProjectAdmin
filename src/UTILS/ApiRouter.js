import { updateProductApi, uploadProductImageApi } from "../API/api";

export const API_ROUTER= {
    signup:"/auth/signup",
    login:"/auth/login",
    getAllCategory:"/getAllCategory",
    deletecategory:"category/deleteCategory",
    addCategory:"/addCategory",
    addSubCategory:"/addSubCategory",
    getAllSubCategory:"/getAllSubCategory", 
    updateSubCategory:"/updateSubCategory",
    deleteSubCategory:"/deleteSubCategory",
    UpdateCategory:"/UpdateCategory",
    getAllProduct:"/getAllProduct",
    addProductApi:"/addProduct",
    deleteProductApi:"/deleteProduct",
    updateProductApi:"/updateProduct",
    uploadProductImageApi:"/uploadProduct",
    searchProductApi:"/searchProduct",
    Cataggregate:"/getsubinfo"
}           