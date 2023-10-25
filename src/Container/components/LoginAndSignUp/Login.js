import React, { useState } from 'react';
import { Divider, Input } from 'antd';
import { useGlobalState } from '../../../store';
import { LeftOutlined } from '@ant-design/icons'
import "./loginSignup.css"
import { useHistory, useLocation } from 'react-router-dom';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';

const Login = () => {


    const [loginStatus, setLoginStatus] = useGlobalState('loginStatus');
    const [customers, setCustomers] = useGlobalState('customers');
    const [currentUser, setCurrentUser] = useGlobalState('currentUser');
    let [checkInfo, setCheckInfo] = useState(false);
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");


    const history = useHistory();
    const location = useLocation();
    const { state } = location;
    let checkOut = state?.checkOut;


    const backtoMove = () => {
        history.push('/page4')
    }

    const handalClick = () => {

        checkInfo = customers.find(user => user.email == email && user.password == password);

        if (checkInfo) {
            setCurrentUser(checkInfo)
            setLoginStatus(true)

            
            localStorage.setItem("loginStatus",true)
            localStorage.setItem("user",JSON.stringify(checkInfo))

            if (checkOut) {
                localStorage.getItem("subtotal")
                history.push("/checkout")
            } else {
                history.push("/layout")
            }

        } else {
            alert("password or email not match")
        }

    }
    const handalClickSignUp = () => {
        history.push('/signUp')
    }


    const loginSchema = Yup.object({
        email: Yup.string()
            .required('Email is required'),
        password: Yup.string()
            .required('Password is required')

    });

    return (
        <div className="grid  grid-cols-6" style={{minHeight:"100vh"}}>

            <div className="col-start-1 col-span-6 sm:col-start-2 sm:col-span-4 lg:col-start-3 lg:col-span-2">



                <LeftOutlined style={{ color: "#54B175", paddingLeft: "8px", marginTop: "16px" }} onClick={backtoMove} />

                <p className="font-Nunito font-bold text-xl mx-3.5 mt-2">Log In Continue!</p>
                <div className="flex flex-col mt-12 ">
                    <button type="submit" className="pl-4 text-green-deep bg-green-light h-14 mx-3.5 rounded-lg text-left font-Nunito text-lg font-bold">Login with Facebook</button>
                    <button type="submit" className="pl-4 text-green-deep bg-green-light h-14 mx-3.5 rounded-lg text-left mt-6 font-Nunito text-lg font-bold">Login with Google</button>
                </div>

                <div className="mx-3.5 ">
                    <Divider orientation="center" > <p className="font-Nunito text-lg mt-4 text-black-light"> OR</p> </Divider>
                </div>
                <div className="mx-3.5 font-Nunito text-black-light ">

                    {/* <Formik
                        initialValues={{
                            email: '',
                            password: ''
                        }}
                        validationSchema={loginSchema}

                        onSubmit={values => {
                            // same shape as initial values
                            handalClick(values)

                        }}
                    >
                        {() => (
                            <div className="mx-3.5">

                                <Form>
                                   
                                    <Field name="email" type="email"  className="h-14 w-full rounded-md border border-black-light px-4 text-lg bg-transparent" />
                                    <ErrorMessage name="email" >
                                        {msg => <div style={{ color: 'red', marginLeft: "20px", marginTop: "10px",  position: "relative" }}>{msg}</div>}
                                    </ErrorMessage>

                                   
                                    <Field name="password" className="h-14 w-full rounded-md border border-black-light mt-8 px-4 text-lg bg-transparent" type="password " />
                                    <ErrorMessage name="password" >
                                        {msg => <div style={{ color: 'red', marginLeft: "20px", marginTop: "10px", fontFamily: "Poppins", position: "relative" }}>{msg}</div>}
                                    </ErrorMessage>

                                    <p className="text-right text-green-deep font-semibold mt-4 text-base">Forgot Password?</p>
                                    <div className="bg-green-deep flex justify-center items-center rounded-lg mt-10 sm:mt-16 mx-3.5 h-14  ">
                                      <button type="submit" className="text-white font-Nunito text-lg font-medium w-full h-full" > Login</button>
                                    </div>

                                </Form>
                            </div>
                        )}


                    </Formik> */}

                    <Input placeholder="io.bitsofts@gmail.com" className="h-14" onChange={(e) => setEmail(e.target.value)} />
                    <Input.Password placeholder="123456" className="h-14 mt-8" onChange={(e) => setPassword(e.target.value)} />


                    <p className="text-right text-green-deep font-semibold mt-4 text-base">Forgot Password?</p>

                </div>

                <div className="bg-green-deep flex justify-center items-center rounded-lg mt-10 sm:mt-16 mx-3.5 h-14  ">

                    <button type="submit" className="text-white font-Nunito text-lg font-medium w-full h-full" onClick={handalClick}> Login</button>

                </div>

                <p className="font-Nunito text-md text-center mt-12 font-bold text-black-light">Don't have an account? <span onClick={handalClickSignUp} className="text-green-deep cursor-pointer">Sign Up</span></p>
                <div className="flex justify-center items-center">
                    <div className="bg-black-deep w-32 h-1.5 rounded-full mt-4"></div>
                </div>


            </div>
        </div>
    );
};

export default Login;