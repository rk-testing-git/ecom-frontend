import React from "react";
import { Input, Label,Form} from 'reactstrap'
import '../SignUp/signUp.scss';
import { Link } from "react-router-dom";

function SignUp(){
    return (
        <div className="col-sm-12 signUp-form-ht" >

            <div className="col-sm-5 mx-auto">
                <div className="card shadow-lg signUp-card" >

                    <div className="card-body">
                        {/* {JSON.stringify(loginData)} */}
                        <h3 className='text-center '>Sign Up</h3>
                        <Form >
                            
                            <div className='my-3 input-container'>
                                <Label for="username">Name</Label>
                                <Input type="text" id="name" placeholder='Enter Your Name Here'
                                />
                            </div>

                            <div className='my-3 input-container'>
                                <Label for="email">Email</Label>
                                <Input type="email" id="email" placeholder='Enter Your Email Here'  
                                />
                            </div>

                            <div className='my-3 input-container'>
                                <Label for="password">Passwoard</Label>
                                <Input type="password" id="passwoard" placeholder='Enter Your Passwoard Here'
                                />
                            </div>

                            <div className='my-3 input-container'>
                                <Label for="address">Address</Label>
                                <Input id="address" type="textarea" placeholder='Enter Your Address'
                                />
                            </div>

                            <div className='my-3 input-container'>
                                <Label for="Gender">Gender</Label>
                                <Input type="select" id="gender">
                                    <option>Select</option>
                                    <option>Male</option>
                                    <option>Female</option>
                                    <option>Other</option>
                                </Input>
                            </div>

                            <div className='my-3 input-container'>
                                <Label for="mobileNo">Mobile Number</Label>
                                <Input type="number" id="phone" placeholder='Enter your Mobile Number'

                                />
                            </div>

                            <div className="mb-3 pt-3">
                                <button type="button" className="signUp-btn btn btn-lg" >Sign Up</button>
                            </div>

                            <div className="mt-3 mb-2 text-center ">
                                <p className="mb-2">Already have an Account?  </p>

                                <Link to="/login" className="mx-2 route-link-css"> Login !</Link>
                            </div>

                        </Form>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default SignUp