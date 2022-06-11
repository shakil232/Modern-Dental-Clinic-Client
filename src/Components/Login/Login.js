import React, { useState } from 'react';
import { Form, FloatingLabel, Button, Row, Col } from 'react-bootstrap';
import NavBar from '../Shared/NavBar/NabBar'
import useAuth from '../../hooks/useAuth';
import { useLocation, useNavigate } from 'react-router-dom';
import './Login.css'
// icons 
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebook, faGooglePlus, faGithub } from '@fortawesome/free-brands-svg-icons'


// login-function 
const Login = () => {

    // all-state 
    const [signNewUser, setSignNewUser] = useState({
        name: '',
        email: '',
        password: '',
        success: true,
        error: ''
    });

    const [newUser, setNewUser] = useState(false);
    const [passCheck, setPassCheck] = useState(false);
    const [emailCheck, setEmailCheck] = useState(false);

    // firebaseAUth 
    const {
        user,
        setUser,
        googleLogin,
        facebookLogin,
        githubLogin,
        createWithEmailAndPassword,
        signWithEmailAndPassword,
    } = useAuth();

    // user-Redirect 
    let navigate = useNavigate();
    let location = useLocation();
    let from = location.state?.from?.pathname || "/";

    // formValidation
    const handelBlur = e => {
        let isFieldValid;

        if (e.target.name === 'name') {
            isFieldValid = e.target.value;
        }
        if (e.target.name === 'email') {
            isFieldValid = /\S+@\S+\.\S+/.test(e.target.value);
        }
        if (e.target.name === 'password') {
            const passLength = e.target.value >= 6;
            const passValid = /\d{1}/.test(e.target.value)
            isFieldValid = passLength && passValid;
        }
        if (isFieldValid) {
            const newUserInfo = { ...signNewUser };
            newUserInfo[e.target.name] = e.target.value;
            setSignNewUser(newUserInfo)
        }

    };

    // fromSubmit 
    const handelSubmit = e => {
        e.preventDefault();

        // CreateUserWithEmailAndPassword 
        if (newUser && signNewUser.name && signNewUser.email && signNewUser.password) {
            createWithEmailAndPassword(signNewUser.name, signNewUser.email, signNewUser.password)
                .then(res => {
                    setUser(res);
                    navigate(from, { replace: true });
                })
                .catch(err => {
                    setUser(err)
                })

        };

        // signInWithEmailAndPassword 
        if (!newUser && signNewUser.email && signNewUser.password) {
            signWithEmailAndPassword(signNewUser.email, signNewUser.password)
                .then(res => {
                    setUser(res);
                    navigate(from, { replace: true })
                })
                .catch(err => {
                    setUser(err)
                })
        }
    };


    // fbSignIn  
    const handelFacebookSignIn = () => {
        facebookLogin()
            .then(res => {
                setUser(res);
                navigate(from, { replace: true })
                
            })
            .catch(err => {
                setUser(err)
            })


    };

    // googleSignIn
    const handelGoogleSignIn = () => {
        googleLogin()
            .then(res => {
                setUser(res);
                navigate(from, { replace: true })
                 alert('logged in')
            })
            .catch(err => {
                setUser(err)
            })
    };

    // githubSignIn
    const handelGithubSignIn = () => {
        githubLogin()
            .then(res => {
                setUser(res);
                navigate(from, { replace: true })
            })
            .catch(err => {
                setUser(err)
            })
    };



    return (
        <section>
            <NavBar />
        
            <main className="container my-5">

                <Row>
                    <Col className="mx-auto" md={6} >

                        {newUser ?

                            // Register
                            < Form onSubmit={handelSubmit} className="p-3 shadow ">
                                <h5 className="text-muted">Create an account </h5>

                                {/* inputs  */}
                                <FloatingLabel className="mt-3" controlId="floatingInput" label="Name" >
                                    <Form.Control onBlur={handelBlur} name="name" type="name" placeholder="Name" />
                                </FloatingLabel>

                                <FloatingLabel className="mt-3" controlId="floatingInput" label="Email address" >
                                    <Form.Control onBlur={handelBlur} onClick={() => setEmailCheck(!emailCheck)} name="email" type="email" placeholder="Email address" />
                                </FloatingLabel>
                                {emailCheck && <span style={{ fontWeight: "600" }} className="text-danger my-2">Please Give a Valid Email.</span>}

                                <FloatingLabel className="mt-3" controlId="floatingInput" label="Password" >
                                    <Form.Control onBlur={handelBlur} onClick={() => setPassCheck(!passCheck)} name="password" type="password" placeholder="Password" />
                                </FloatingLabel>
                                {passCheck && <span style={{ fontWeight: "600" }} className="text-danger mt-2 mb-1">password Atleast six characters and with One digit</span>}

                                <Button type="submit" className="form-control btn-success border-0 rounded-3 text-white mt-3" >Create an account </Button>

                                <div className="d-flex justify-content-center mt-3">
                                    <p>
                                        <small style={{ fontWeight: '700' }} className="text-secondary" >Already have an account ?</small>
                                        <small onClick={() => setNewUser(false)} className="cursor  ms-2"> Login </small>
                                    </p>

                                </div>
                            </Form> :

                            // login
                            <Form onSubmit={handelSubmit} className="p-3 shadow">
                                <h5 className="text-muted">Login</h5>

                                {/* inputs  */}
                                <FloatingLabel className="mt-3" controlId="floatingInput" label="Email address" >
                                    <Form.Control onBlur={handelBlur} name="email" type="email" placeholder="Email address" />
                                </FloatingLabel>

                                <FloatingLabel className="mt-3" controlId="floatingInput" label="Password" >
                                    <Form.Control onBlur={handelBlur} name="password" type="password" placeholder="Password" />
                                </FloatingLabel>

                                <Button type="submit" className="form-control btn-success border-0 rounded-3 text-white mt-3" >Login</Button>

                                <div className="d-flex justify-content-center mt-3">
                                    <p>
                                        <small style={{ fontWeight: '700' }} className="text-secondary" >Don't have an account ?</small>
                                        <small onClick={() => setNewUser(true)} className="cursor ms-2"> Create an account </small>
                                    </p>
                                </div>
                            </Form>
                        }

                    </Col>
                </Row>

                {/* Continue-Section  */}
                <div className="m-auto">
                    <h3 className="text-center text-info my-3">Or</h3>

                    {/* googleLogin */}
                    <div className="d-flex justify-content-center align-content-center">
                        <p onClick={handelGoogleSignIn}
                            className="shadow text-muted rounded-3 p-1 cursor"
                            style={{ width: "260px" }}
                        >
                            <FontAwesomeIcon className="me-3 mx-3 text-danger fs-3" icon={faGooglePlus} />
                            Continue with Google
                        </p>
                    </div>

                    {/* fbLogin */}
                    <div className="d-flex justify-content-center align-items-center">
                        <p onClick={handelFacebookSignIn}
                            className="shadow text-muted rounded-3 p-1 cursor"
                            style={{ width: "260px" }}
                        >
                            <FontAwesomeIcon className="me-3 mx-3 text-danger fs-3" icon={faFacebook} />
                            Continue with Facebook
                        </p>
                    </div>

                    {/* githubLogin */}
                    <div className="d-flex justify-content-center align-content-center">
                        <p onClick={handelGithubSignIn}
                            className="shadow text-muted rounded-3 p-1 cursor"
                            style={{ width: "260px" }}
                        >
                            <FontAwesomeIcon className="me-3 mx-3 text-danger fs-3" icon={faGithub} />
                            Continue with Github
                        </p>
                    </div>

                </div>
            </main>
        </section >
    );
};

export default Login;