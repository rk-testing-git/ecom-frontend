import React,{useEffect,useState} from "react";
import "../Store/store.scss";
import Carousel from "react-bootstrap/Carousel";
import { fetchCategories } from "../../Services/categoryService";

function Store() {
  const latestProducts = [
    {
      image: `${process.env.PUBLIC_URL}/assets/featured-images/7.jpg`,
      name: "LG 27Ml600",
      price: "14,499",
    },

    {
      image: `${process.env.PUBLIC_URL}/assets/featured-images/8.jpg`,
      name: "iClever BTH15",
      price: "2,599",
    },

    {
      image: `${process.env.PUBLIC_URL}/assets/featured-images/9.jpg`,
      name: "ZEBRONICS Gaming AC32FHD",
      price: "16,999",
    },

    {
      image: `${process.env.PUBLIC_URL}/assets/featured-images/mi-notebook-pro.png`,
      name: "MI Notebook Pro QHD+",
      price: "1,10,000",
    },

    {
      image: `${process.env.PUBLIC_URL}/assets/featured-images/Microsoft-Wired-Ergonomic-1.jpg`,
      name: "Microsoft Wired Ergonomic",
      price: "10,372",
    },

    {
      image: `${process.env.PUBLIC_URL}/assets/featured-images/boat-rockerz.jpg`,
      name: "BoAt Rockerz 450",
      price: "1,499",
    },
  ];
  
  const [categories, setCategories] = useState([]);

  useEffect(() => {
    fetchCategories().then((data) => {
      setCategories(data);
    }).catch(error => {
      console.error("Error fetching categories:", error);
    });
  }, []);
  
  return (
    <div className="col-sm-12 p-0">
      <Carousel>
        <Carousel.Item>
          <img src="assets/featured-images/oneodio.jpg" className="carousel-img" alt="First slide"/>

          <Carousel.Caption>
            <h3>First slide label</h3>
            <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img src="assets/featured-images/laptop-9.jpg" className="carousel-img" alt="Second slide" />

          <Carousel.Caption>
            <h3>Second slide label</h3>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img src="assets/featured-images/Logitech-G213-Prodigy-4.jpg" className="carousel-img" alt="First slide"/>

          <Carousel.Caption>
            <h3>Third slide label</h3>
            <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p>
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>

      <div className="col-sm-10 mx-auto mt-5 pt-5">
        <div className="col-sm-12 p-0 row m-0 d-flex justify-content-around">
          <div className="col-sm-3 p-0">
            <div className="list-group">
              <button type="button"className="list-group-item list-group-item-action active text-center p-3 category-font">Categories</button>

              <button type="button" className="list-group-item list-group-item-action text-center p-3 category-font">All</button>
            { categories.map( (category)=>(

              <button type="button" className="list-group-item list-group-item-action text-center p-3 category-font" key={category.categoryId} > {category.categoryName} </button> 
            ))}
              </div>
          </div>
          <div className="col-sm-8 p-0">
            <h2 className="text-center">All Products</h2>
            <div className="col-sm-12 p-0 row m-0 justify-content-between">

              {latestProducts.map((product, index) => (
                <div key={index} className="latest-product-card-w-33 p-0">
                  <img
                    src={product.image}
                    className="d-block w-100 carousel-latest-products"
                    alt={product.name}
                    style={{ width: "100%", height: "auto" }} // Optional: Control image dimensions
                  />
                  <div className="row m-0 justify-content-between">
                    <div className="w-auto p-0">
                      <h4 className="pt-4">{product.name}</h4>{" "}
                    </div>
                    <div className="w-auto p-0">
                      <p className="pt-4">Price: {product.price}</p>{" "}
                    </div>
                  </div>
                </div>
              ))}

          </div>
          </div>
        </div>
      </div>
    </div>
  );
}
export default Store;
