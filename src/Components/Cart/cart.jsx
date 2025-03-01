import React from "react";
import "../Cart/cart.scss";
import { Button } from "reactstrap";

function Cart(){
    return (
      <div className="col-sm-12 p-0 mb-5">
        <div className="col-sm-12 p-0 text-center my-4">
          <h1 className="m-0">Your Cart</h1>
        </div>
        <div className="col-sm-12 p-0 px-3">
          <div className="col-sm-10 card m-auto shadow p-4 " >
            <img
              src="/assets/featured-images/Logitech G502 4.jpg"
              className="cart-product-img"
              alt="..."
            />
            <div>
              <h4 className="text-center">productName</h4>
            </div>

            <div>
                <b>
                <p className="">Quantity: 5</p>
                </b>
            </div>

            <div className="m-0">
              <b>
                <p className="">Price: 121325 (Put sum here) total product price </p>
              </b>
            </div>

            <div className="m-0">
                <p className="m-0">Description: keep 100 words..use overflow css Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ducimus vitae illum minus excepturi autem ab ex laudantium, distinctio illo, quae aliquam, unde voluptas provident odio aperiam aspernatur cumque asperiores? Quae! </p>
            </div>

            <div>
              <Button color="success" size="sm" className="my-3 ">
                Increase Quantity
              </Button>
              <Button color="primary" size="sm" className="my-3 ms-3">
                Decrease Quantity
              </Button>
              <Button color="danger" size="sm" className="my-3 ms-3">Remove Item</Button>
            </div>

            <div className="text-center my-3">
                <Button className="click-proceed-btn" size="lg">
                    Click Here To Proceed
                </Button>
            </div>

          </div>
        </div>
      </div>
    );
}

export default Cart;