import React, {useState} from "react";
import Footer from "../Footer/footer";
import "./../Home/home.scss";

function Home() {
  // const [interval, setInterval] = useState(1000);
  const latestProducts = [
    {
      image: `${process.env.PUBLIC_URL}/assets/featured-images/7.jpg`,
      name: "LG 27Ml600",
      price: "14,499",
    },

    {
      image: `${process.env.PUBLIC_URL}/assets/featured-images/i_clever.jpg`,
      name: "iClever BTH15",
      price: "2,599",
    },

    {
      image: `${process.env.PUBLIC_URL}/assets/featured-images/Redragon_M686_2.jpg`,
      name: "Redragon M686",
      price: "3,190",
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

  return (
    <div className="col-sm-12">
      <div className="col-sm-12 p-4 row m-0 ">
        <div className="col-sm-7 m-auto p-0">
          <div className="col-sm-8 m-auto">
            <div className="home-content-1 mb-2">
              Best Products for your Productivity
            </div>
            <div className="home-content-2 mb-2">
              New Tech Collections Trends in 2024
            </div>
            <div className="">
              Get the best deals, enjoy fast and free shipping, and shop with
              confidence at our secure online store. Join us now!
            </div>
          </div>
        </div>

        <div className="col-sm-5 p-0">
          <div>
            <img
              src="assets/Home-images/home-img.svg"
              alt="Description of the image"
              className="home-img"
            />
          </div>
        </div>
      </div>

      <div className="col-sm-12 p-0 my-5">
        <p className="home-heading-names">Featured Products</p>
      </div>

      <div className="col-sm-10 mx-auto p-0">
        <div
          id="carouselExampleIndicators"
          className="carousel slide pb-5"
          data-bs-ride="carousel"
        >
           {/* data-interval={interval} */}
          <div className="carousel-indicators">
            <button
              type="button"
              data-bs-target="#carouselExampleIndicators"
              data-bs-slide-to="0"
              className="active"
              aria-current="true"
              aria-label="Slide 1"
            ></button>
            <button
              type="button"
              data-bs-target="#carouselExampleIndicators"
              data-bs-slide-to="1"
              aria-label="Slide 2"
            ></button>
            <button
              type="button"
              data-bs-target="#carouselExampleIndicators"
              data-bs-slide-to="2"
              aria-label="Slide 3"
            ></button>
          </div>
          <div className="carousel-inner">
            <div className="carousel-item active">
              <div className="col-sm-10 mx-auto row p-0 mb-d-flex">
                <div className="carousel-w-25">
                  <img
                    src="assets/featured-images/laptop-1.jpg"
                    className="d-block w-100 carousel-products"
                    alt="..."
                  />
                  <h5 className="pt-4">Honor MagicBook 15</h5>
                  <p>Price : 55,999</p>
                </div>
                <div className="carousel-w-25">
                  <img
                    src="assets/featured-images/hammer_bash.jpg"
                    className="d-block w-100 carousel-products"
                    alt="..."
                  />
                  <h5 className="pt-4">Hammer Bash 2.0</h5>
                  <p>Price : 2199</p>
                </div>
                <div className="carousel-w-25">
                  <img
                    src="assets/featured-images/Logitech_K380_4.jpg"
                    className="d-block w-100 carousel-products"
                    alt="..."
                  />
                  <h5 className="pt-4">Logitech K380</h5>
                  <p>Price : 2465</p>
                </div>
                <div className="carousel-w-25">
                  <img
                    src="assets/featured-images/Logitech_G502_4.jpg"
                    className="d-block w-100 carousel-products"
                    alt="..."
                  />
                  <h5 className="pt-4">Logitech G502</h5>
                  <p>Price : 3995</p>
                </div>
              </div>
            </div>
            <div className="carousel-item">
              <div className="col-sm-10 mx-auto row p-0 mb-d-flex">
                <div className="carousel-w-25">
                  <img
                    src="assets/featured-images/8.jpg"
                    className="d-block w-100 carousel-products"
                    alt="..."
                  />
                  <h5 className="pt-4">LG Qhd 2K - 27Qn600</h5>
                  <p>Price : 20,999</p>
                </div>
                <div className="carousel-w-25">
                  <img
                    src="assets/featured-images/Logitech-G213-Prodigy-4.jpg"
                    className="d-block w-100 carousel-products"
                    alt="..."
                  />
                  <h5 className="pt-4">Logitech G213 Prodigy</h5>
                  <p>Price : 3995</p>
                </div>
                <div className="carousel-w-25">
                  <img
                    src="assets/featured-images/oneodio.jpg"
                    className="d-block w-100 carousel-products"
                    alt="..."
                  />
                  <h5 className="pt-4">Oneodio Pro-10</h5>
                  <p>Price : 2,299</p>
                </div>
                <div className="carousel-w-25">
                  <img
                    src="assets/featured-images/laptop-9.jpg"
                    className="d-block w-100 carousel-products"
                    alt="..."
                  />
                  <h5 className="pt-4">Dell New Alienware x15 R2 Gaming </h5>
                  <p>Price : 4,63,132</p>
                </div>
              </div>
            </div>
            <div className="carousel-item">
              <div className="col-sm-10 mx-auto row p-0 mb-d-flex">
                <div className="carousel-w-25">
                  <img
                    src="assets/featured-images/HP_150_1.jpg"
                    className="d-block w-100 carousel-products"
                    alt="..."
                  />
                  <h5 className="pt-4">HP 150 Keyboard</h5>
                  <p>Price : 579</p>
                </div>
                <div className="carousel-w-25">
                  <img
                    src="assets/featured-images/laptop-8.jpg"
                    className="d-block w-100 carousel-products"
                    alt="..."
                  />
                  <h5 className="pt-4">Acer Predator Helios 500 Gaming </h5>
                  <p>Price : 4,32,159</p>
                </div>
                <div className="carousel-w-25">
                  <img
                    src="assets/featured-images/honywell.jpg"
                    className="d-block w-100 carousel-products"
                    alt="..."
                  />
                  <h5 className="pt-4">Honeywell Suono P20</h5>
                  <p>Price : 1,339</p>
                </div>
                <div className="carousel-w-25">
                  <img
                    src="assets/featured-images/9.jpg"
                    className="d-block w-100 carousel-products"
                    alt="..."
                  />
                  <h5 className="pt-4">ZEBRONICS Gaming AC32FHD</h5>
                  <p>Price : 16,999</p>
                </div>
              </div>
            </div>
          </div>
          <button
            className="carousel-control-prev"
            type="button"
            data-bs-target="#carouselExampleIndicators"
            data-bs-slide="prev"
          >
            <span
              className="carousel-control-prev-icon"
              aria-hidden="true"
            ></span>
            <span className="visually-hidden">Previous</span>
          </button>
          <button
            className="carousel-control-next"
            type="button"
            data-bs-target="#carouselExampleIndicators"
            data-bs-slide="next"
          >
            <span
              className="carousel-control-next-icon"
              aria-hidden="true"
            ></span>
            <span className="visually-hidden">Next</span>
          </button>
        </div>
      </div>

      <div className="col-sm-12 p-0 my-5">
        <p className="home-heading-names">Latest Products</p>
      </div>

      <div className="col-sm-12 p-0">
        <div className="col-sm-9 mx-auto p-0">
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

      <Footer></Footer>
    </div>
  );
}
export default Home;