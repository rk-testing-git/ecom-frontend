import React from "react";
import "./../adminHome/adminHome.scss";
import {Button } from "reactstrap";
import { Link } from 'react-router-dom';

function AdminHome(){
    return(
        <div className="col-sm-12 p-0">
        <div className="col-sm-12 p-0 text-center my-4">
              <h1><b> Welcome to Admin Dashboard </b></h1>
        </div>
    
        <div className="col-sm-12 p-0 row m-0 admin-home-bg">
    
        <div className="col-sm-6 m-auto px-4">
          <h5>
              From here, you can manage all aspects of your site and view important metrics and analytics.
                Start adding the Products and managing the  order from here
          </h5>
          </div>
    
            <div className="col-sm-6 p-0 admin-img-container">
                <img src="/assets/admin-images/admin_Home.png"
                    alt="Description of the image"
                    className="admin-img"
                />
            </div>
        </div>
        <div className="col-sm-12 p-0 text-center">
          {/* need to add onclick() for add product  */}
              <Link to="/admin-dashboard/add-product" >
                <Button className="add-pro-admin-btn w-50" to="/admin-dashboard/add-product" >Add Product</Button>
              </Link>
        </div>
      </div>
    )
}
export default AdminHome;