import axiosInstance, { http,privateHttp } from "./axios-helper"

export const fetchProducts = async()=>{
    try {
        const response = await axiosInstance.get("/product/viewAll");
        return response.data;
    } catch (error) {
        console.log("Error fetching Products",error)
        throw error;
    }
}

export const loadSingleProduct= (product_id)=>{
    return http.get(`/product/view/${product_id}`).then((response)=>response.data );
}

export const updateProduct =(product_id,updatedData)=>{
    return privateHttp.put(`/product/update/${product_id}`,updatedData)
    .then(res=>res.data)
    .catch(error=>{
        throw error.response ? error.response.data : error;
    });
};

export const deleteProduct=(product_id)=>{
    return privateHttp.delete(`/product/delete/${product_id}`)
    .then(res=>res.data)
    .catch(error => {
        throw error.response ? error.response.data : error;
    });
};


export const createProduct = (categoryId, productData) => {
  return privateHttp.post(`/product/create/${categoryId}`, productData)
    .then((res) => res.data)
    .catch((error) => {
      throw error.response ? error.response.data : error;
    });
};
