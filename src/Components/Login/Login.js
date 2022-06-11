import React, { useState } from 'react';
import { Form,FloatingLabel } from 'react-bootstrap';
import NavBar from '../Shared/NavBar/NabBar'
import useAuth from '../../hooks/useAuth';
import { useLocation, useNavigate } from 'react-router-dom';
import './Login.css'
// icons 
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebook, faGoogle, faGithub } from '@fortawesome/free-brands-svg-icons'



const Login = () => {
    const [signNewUser, setSignNewUser] = useState({
        name: '',
        email: '',
        password: '',
    });
    const [newUser, setNewUser] = useState(false);
    const [pass, setPass] = useState(false);
    const [email, setEmail] = useState(false);

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


    {/* fbSignIn  */ }
    const handelFbSignIn = () => {
        facebookLogin()
            .then(res => {
                setUser(res);
                navigate(from, { replace: true })
            })
            .catch(err => {
                setUser(err)
            })


    };

    {/* googleSignIn  */ }
    const handelGoogleSignIn = () => {
        googleLogin()
            .then(res => {
                setUser(res);
                navigate(from, { replace: true })
            })
            .catch(err => {
                setUser(err)
            })
    };

    {/* githubSignIn  */ }
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
            <main className="container mt-5 mb-5">
                {/* success & error handel  */}
                <div className="text-center">
                    <h3 className="text-danger">{user.err}</h3>
                    {
                        user.success && <h6 className="text-success">User {newUser ? "Created" : "LoggedIn"} Successfully..</h6>
                    }
                </div>
                <div className="row mt-3">
                    <div className="col-md-6 m-auto shadow-lg rounded-3 ">
                        <div className="p-5">
                            {
                                newUser ?

                                    // register-Section 
                                    <Form className="" onSubmit={handelSubmit} >
                                        <div>
                                            <h4 className="custom-dark">Create an account</h4>
                                        </div>

                                        <FloatingLabel className="mt-4 mb-2" controlId="floatingInput" label="Your Name" >
                                            <Form.Control onBlur={handelBlur} type="name" name="name" placeholder="name" />
                                        </FloatingLabel>

                                        <FloatingLabel className="mb-2" controlId="floatingInput" label="Email" >
                                            <Form.Control onBlur={handelBlur} onClick={() => setEmail(!email)} type="email" name="email" placeholder="email" />
                                            
                                            {email && <span style={{fontWeight:"600"}} className="text-danger mt-2 mb-1">Please Give a Valid Email.</span>}
                                        </FloatingLabel>

                                        <FloatingLabel className="mb-2" controlId="floatingInput" label="Password" >
                                            <Form.Control onBlur={handelBlur} onClick={() => setPass(!pass)} type="password" name="password" placeholder="password"  />

                                            {pass && <span style={{fontWeight:"600"}}  className="text-danger mt-2 mb-1">Password Atleast 6,Digit With 1 Number</span>}
                                        </FloatingLabel>


                                        <div className="text-center mt-3">
                                            <input className="form-control btn btn-info border-0 rounded-3 " type="submit" value="Create Account" />
                                        </div>

                                        <div className="text-center mt-4">
                                            <h6 style={{ fontWeight: '90O' }} className="custom-dark">Already have an account?
                                            <span onClick={() => setNewUser(false)} className="text-success ms-1 text-decoration-underline cursor">Login</span>
                                            </h6>
                                        </div>
                                    </Form>

                                    // login-section 
                                    :
                                    <Form onSubmit={handelSubmit} >
                                        <div>
                                            <h4 className="custom-dark">Login</h4>
                                        </div>
                                    
                                        <FloatingLabel className="mt-4 mb-2" controlId="floatingInput" label="Email" >
                                            <Form.Control onBlur={handelBlur} type="email" name="email" placeholder="email"  />
                                        </FloatingLabel>

                                        <FloatingLabel controlId="floatingInput" label="Password" >
                                            <Form.Control onBlur={handelBlur} type="password" name="password" placeholder="password" />
                                        </FloatingLabel>

                                        <div className="text-center mt-3">
                                            <input className="form-control btn btn-info border-0 rounded-3 " type="submit" value="Login" />
                                        </div>
                                        <div className="text-center mt-4">
                                            <h6 style={{ fontWeight: '9OO' }} className="custom-dark">Don't have an account?
                                        <span onClick={() => setNewUser(true)} className="text-success ms-1 text-decoration-underline cursor">Create an account</span>
                                            </h6>
                                        </div>
                                    </Form>

                            }
                        </div>
                    </div>
                </div>

                {/* Continue-section  */}
                <div className="m-auto mt-4">
                    <div style={{ fontWeight: "600" }} className=" text-center border-bottom border-secondary">
                        <h3 className="custom-primary"  >Or</h3>
                        <h5 className="custom-dark ">Continue with </h5>
                    </div>
                    {/* icons  */}
                    <div className="d-flex justify-content-center align-content-center fs-3 mb-3 p-3">
                        {/* fbSignIn  */}
                        <FontAwesomeIcon onClick={handelFbSignIn} className="icons" icon={faFacebook} />
                        {/* googleSignIn  */}
                        <FontAwesomeIcon onClick={handelGoogleSignIn} className="ms-3 icons" icon={faGoogle} />
                        {/* githubSignIn  */}
                        <FontAwesomeIcon onClick={handelGithubSignIn} className="ms-3 icons" icon={faGithub} />
                    </div>
                </div>

            </main>
        </section>
    );
};

export default Login;