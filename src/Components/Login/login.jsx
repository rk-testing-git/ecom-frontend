import React from 'react'
import { Input, Label,Form} from 'reactstrap'
import '../Login/login.scss';
import { Link } from "react-router-dom";

function Login(){

    return (
        <div className="col-sm-12 login-form-ht" >

            <div className="col-sm-5 mx-auto">
                <div className="card shadow-lg login-card" >

                    <div className="card-body">
                        {/* {JSON.stringify(loginData)} */}
                        <h3 className='text-center '>Login</h3>
                        <Form >
                            <div className="my-3 input-container">
                                <Label for="username">Email Id</Label>
                                <Input
                                    className="" id="username" type="email" placeholder="Enter your User Name here"
                                ></Input>
                            </div>

                            <div className="mt-4 mb-3 input-container" >
                                <Label for="password">Password</Label>
                                <Input
                                    className="" type="password" id="password" placeholder="Enter your Password"

                                ></Input>
                            </div>

                            <div className="mb-3 pt-3">
                                <button type="button" className="Login-btn btn btn-lg" >Login</button>
                            </div>

                            <div className="mt-3 mb-2 text-center ">
                                <p className="mb-2">
                                    Don't have an Account?
                                </p>

                                <Link to="/signup" className="mx-2 route-link-css">
                                    Create Account !
                                </Link>
                            </div>

                        </Form>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default Login