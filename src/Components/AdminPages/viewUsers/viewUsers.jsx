import React from "react";
import { FormGroup,Input,Table } from "reactstrap";

function ViewUsers(){
    return (
      <div className="col-sm-12 p-0">
        <h1 className="text-center m-0 my-3">View All Users</h1>
        <div className="col-sm-11 m-auto p-0">
          <FormGroup>
            <Input
              className="w-50 m-auto"
              type="text"
              placeholder="Search User"
            ></Input>
          </FormGroup>

          <Table
            bordered
            borderless
            responsive
            hover
            className={"text-center bg-white"}
          >
            <thead>
              <tr>
                <th>User Id</th>
                <th>Name</th>
                <th>UserName</th>
                <th>Address</th>
                {/* <th>About</th> */}
                <th>Gender</th>
                <th>Created At</th>
                <th>Active</th>
                <th>User Roles</th>
                <th>Mobile</th>

                {/* <th>Delete User</th> */}
                {/* <th>Update User</th> */}
              </tr>
            </thead>

            <tbody>
              <tr >
                <td>userId </td>
                <td>name </td>
                <td>email </td>
                <td>address </td>
                {/* <td>{u.about}</td> */}
                <td>gender </td>
                <td>Date</td>
                <td>active </td>

                <td>Admin/Normal</td>

                <td>phone</td>

                {/* <td> 
                     <Button color="primary" tag={Link} to={'/admin-dashboard/update-user/'+u.userId} action='true'>Update</Button>
                                            
                                         </td> 
                                         
                                         <td> 
                                            <Button color="danger" onClick={()=>deleteU(u.userId)} >Delete</Button>
                                            
                                         </td>  */}
              </tr>
            </tbody>
          </Table>
        </div>
      </div>
    );
}

export default ViewUsers