import React from "react";
import { Outlet,Link } from "react-router-dom";
import { ListGroup, ListGroupItem} from 'reactstrap';
import "../adminDashboard/adminDashboard.scss"

function AdminDashboard() {
  return (
    <div className="col-sm-12 p-0 row m-0">
      <div className="col-sm-3 p-0 mt-5">
        <ListGroup className="text-center">
          <ListGroupItem
            className="py-3"
            tag={Link}
            to={"/admin-dashboard/home"}
            action="true"
          >
            <h5 className="admin-nav-font"> Home</h5>
          </ListGroupItem>

          <ListGroupItem className="py-3"
              tag={Link}
              to={"/admin-dashboard/view-products"}
              action="true"
            >
              <h5 className="admin-nav-font">View Products</h5>
            </ListGroupItem>

          <ListGroupItem
            className="py-3"
            tag={Link}
            to={"/admin-dashboard/add-product"}
            action="true"
          >
            <h5 className="admin-nav-font">Add Product</h5>
          </ListGroupItem>

          <ListGroupItem className="py-3"
              tag={Link}
              to={"/admin-dashboard/upload-product-image"}
              action="true"
            >
              <h5 className="admin-nav-font">Upload Product Image</h5>
            </ListGroupItem>

            <ListGroupItem className="py-3"
              tag={Link}
              to={"/admin-dashboard/add-category"}
              action="true"
            >
              <h5 className="admin-nav-font">Add Category</h5>
            </ListGroupItem>

            <ListGroupItem className="py-3" tag={Link} to={"/admin-dashboard/manage-categories"} action="true">
              <h5 className="admin-nav-font">Manage Categories</h5>
            </ListGroupItem>

            <ListGroupItem className="py-3"
              tag={Link}
              to={"/admin-dashboard/manage-orders"}
              action="true"
            >
              <h5 className="admin-nav-font">Manage Orders</h5>
            </ListGroupItem>

            <ListGroupItem className="py-3"
              tag={Link}
              to={"/admin-dashboard/view-users"}
              action="true"
            >
              <h5 className="admin-nav-font"> View Users</h5>
            </ListGroupItem>          
            
        </ListGroup>
      </div>
      <div className="col-sm-9 p-0 ">
        <Outlet />
      </div>
    </div>
  );
}

export default AdminDashboard;


