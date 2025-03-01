import React, { useState,useEffect } from "react";
import "./../addProduct/addProduct.scss";
import { Input, Form, Button, FormGroup, Label } from "reactstrap";
import { Link } from "react-router-dom";
import { createProduct } from "../../../Services/productService";
import { fetchCategories } from "../../../Services/categoryService";

function AddProduct() {

  // const [products, setProducts] = useState([]);

  // const [product, setProduct] = useState({
  //   productId: "",
  //   productName: "",
  //   productDescription: "",
  //   productPrice : "",
  //   productQuantity : "",
  //   productCategory : ""
  // });

  // const [content, setContent] = useState(""); // For JoditEditor

  // const handleChange = (e) => {
  //   setProduct({ ...product, [e.target.name]: e.target.value });
  // };

  // const handleSubmit = (e) => {
  //   e.preventDefault();

  //   // Call API to create product
  //   createProduct({ ...product, description: content })
  //     .then((data) => {
  //       console.log("Product added successfully:", data);
  //       setProduct({ name: "", description: "", price: "", quantity: "", category: "" });
  //       setContent(""); // Reset editor
  //     })
  //     .catch((error) => {
  //       console.error("Failed to add product:", error);
  //     });
  // };

  const [product, setProduct] = useState({
    product_name: "",
    product_desc: "",
    product_price: "",
    product_quantity: "",
    categoryId: "",
  });



  const handleChange = (e) => {
    setProduct({ ...product, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // Ensure categoryId is selected
    if (!product.categoryId) {
      console.error("Please select a category!");
      return;
    }

    // Create payload matching backend structure
    const productData = {
      product_name: product.product_name,
      product_desc: product.product_desc,
      product_price: parseFloat(product.product_price),
      product_quantity: parseInt(product.product_quantity),
    };

    // Call API to create product with categoryId in the URL
    createProduct(product.categoryId, productData)
      .then((data) => {
        console.log("Product added successfully:", data);
        // Reset form after successful submission
        setProduct({ product_name: "",product_desc:"" ,product_price: "", product_quantity: "", categoryId: "" });
        
      })
      .catch((error) => {
        console.error("Failed to add product:", error);
      });
  };

  const [categories, setCategories] = useState([]); // Store fetched categories

    // Fetch categories from backend when the component loads
    useEffect(() => {
      fetchCategories()
        .then((data) => {
          setCategories(data); // Update state with fetched categories
        })
        .catch((error) => {
          console.error("Error fetching categories:", error);
        });
    }, []);
  return (
    <div className="col-sm-12 p-0">
      <div className="col-sm-12 p-0 text-center">
        <h1 className=""> Add New Product </h1>
      </div>
      <div className="col-sm-11 m-auto p-0">
      <Form onSubmit={handleSubmit}>
        <FormGroup>
          <Label>
            <h5><b>Product Name</b></h5>
          </Label>
          <Input
            placeholder="Enter Product Name"
            type="text"
            name="product_name"
            value={product.product_name}
            onChange={handleChange}
          />
        </FormGroup>

        {/* <FormGroup>
          <Label>
            <h5><b>Product Description</b></h5>
          </Label>
          <JoditEditor value={description} onChange={setDescription} />
        </FormGroup> */}

<FormGroup>
  <Label>
    <h5><b>Product Description</b></h5>
  </Label>
  <Input
    type="textarea"
    placeholder="Enter Product Description"
    value={product.product_desc}
    onChange={(e) => setProduct({ ...product, product_desc: e.target.value })}
  />
</FormGroup>


        <FormGroup>
          <Label>
            <h5><b>Product Price</b></h5>
          </Label>
          <Input
            placeholder="Enter Product Price"
            type="number"
            name="product_price"
            value={product.product_price}
            onChange={handleChange}
          />
        </FormGroup>

        <FormGroup>
          <Label>
            <h5><b>Product Quantity</b></h5>
          </Label>
          <Input
            placeholder="Enter Product Quantity"
            type="number"
            name="product_quantity"
            value={product.product_quantity}
            onChange={handleChange}
          />
        </FormGroup>

        <FormGroup>
          <Label>
            <h5><b>Product Category</b></h5>
          </Label>
          <Input type="select" name="categoryId" value={product.categoryId} onChange={handleChange}>
            <option value="" disabled>Select a category</option>
            {categories.map((category) => (
              <option key={category.categoryId} value={category.categoryId}>
                {category.categoryName}
              </option>
            ))}
          </Input>
        </FormGroup>

        <FormGroup>
          <div className="col-sm-12 p-0 row m-0 justify-content-around">
            <Button type="submit" className="w-25 add-pro-btn">
              Add Product
            </Button>
            <Link to="/admin-dashboard/home" className="p-0 w-25">
              <Button className="w-100 cancel-btn">
                Cancel
              </Button>
            </Link>
          </div>
        </FormGroup>
      </Form>
      </div>
    </div>
  );
}

export default AddProduct;