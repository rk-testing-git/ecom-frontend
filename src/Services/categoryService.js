import axiosInstance, { http,privateHttp } from "./axios-helper";

// Service method to fetch all categories
export const fetchCategories = async () => {
  try {
    const response = await axiosInstance.get("/categories/viewAll");
    return response.data; // Return the categories data
  } catch (error) {
    console.error("Error fetching categories:", error);
    throw error; // Rethrow the error 
  }
};

export const loadSingleCategory = (productId) => {
  return http.get(`/categories/viewById/${productId}`).then((response) => response.data);
};

//  create category
export const createCategory=(title)=>{
  return privateHttp.post(`/categories/create-category`,{
    "categoryName":title
  }
  ).then(res=>res.data)
}

//  delete category
export const deleteCategory = (categoryId) => {
  return privateHttp.delete(`/categories/delete/${categoryId}`)
    .then(res => res.data)
    .catch(error => {
      // Handle error
      throw error.response ? error.response.data : error;
    });
};

//  update category
export const updateCategory = (categoryId, updatedData) => {
  return privateHttp.post(`/categories/update/${categoryId}`, updatedData)
    .then(res => res.data)
    .catch(error => {
      throw error.response ? error.response.data : error;
    });
};

// Search category by name
export const searchCategoryByName = (name) => {
  return http.get(`/categories/search/${name}`)
    .then(res => res.data)
    .catch(error => {
      // Handle error
      throw error.response ? error.response.data : error;
    });
};