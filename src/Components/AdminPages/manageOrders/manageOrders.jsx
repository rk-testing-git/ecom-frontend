import React from "react";
import { Table,Button,FormGroup,Input} from "reactstrap";

function ManageOrders() {
  return (
    <div className="col-sm-12 p-0">
      <h1 className="text-center m-0 my-3">View All Orders</h1>
      <div className="col-sm-11 m-auto p-0">
        
        <FormGroup>
          <Input className="w-50 m-auto" type="text" placeholder="Search Order/Product" ></Input>
        </FormGroup>
        
        <Table bordered borderless responsive hover className="text-center bg-white" >
          <thead>
            <tr>
              <th>Id</th>
              <th>Billing Address</th>
              <th>Order Amount</th>
              <th>Order Create</th>
              <th>Order Delivered</th>
              <th>Order Status</th>
              <th>Payment Status</th>
              <th>Oder User Id</th>
              <th>View Product</th>
              <th>Update Order</th>
              <th>Cancel Order</th>
            </tr>
          </thead>

          <tbody>
            <tr>
              <td> orderId </td>
              <td> billingAddress </td>
              <td> orderAmount </td>
              <td> orderCreated </td>
              <td> orderDelivered </td>
              <td> orderStatus </td>
              <td> paymentStatus </td>
              <td> cancel order</td>
              <td>
                <Button color="primary" className="mt-2" size="sm">
                  View
                </Button>
              </td>

              <td>
                <Button color="info" className="mt-2" size="sm">
                  Update
                </Button>
              </td>

              <td>
                <Button color="danger" className="mt-2" size="sm">
                  Cancel
                </Button>
              </td>
            </tr>
          </tbody>
        </Table>
      </div>
    </div>
  );
}

export default ManageOrders;
