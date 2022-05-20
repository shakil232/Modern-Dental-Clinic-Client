import {
    getAuth,
    signInWithPopup,
    GoogleAuthProvider,
    FacebookAuthProvider,
    GithubAuthProvider,
    createUserWithEmailAndPassword,
    signInWithEmailAndPassword,
    onAuthStateChanged,
    updateProfile,
    signOut
} from "firebase/auth"
import { useEffect, useState } from "react";
import firebaseInitialization from "../Components/Login/Firebase/firebase.init";


// firebaseInitialize
firebaseInitialization()

const useFirebase = () => {
    const auth = getAuth();
    const [user, setUser] = useState({
        name: '',
        email: '',
        password: '',
        success: false,
        error: '',
        imageUrl: ''
    })

    // googleLogin
    const googleLogin = () => {
        const googleProvider = new GoogleAuthProvider();
        return signInWithPopup(auth, googleProvider)
            .then(res => {
                const { displayName, email } = res.user;
                const signInUser = {
                    displayName: displayName,
                    email: email,
                    success: true,
                    error: false
                }
                return signInUser;
            })
            .catch(err => {
                const newUserInfo = {};
                newUserInfo.success = false;
                newUserInfo.error = err.message;
                return newUserInfo;
            });
    };

    // facebookLogin
    const facebookLogin = () => {
        const fbProvider = new FacebookAuthProvider();
        return signInWithPopup(auth, fbProvider)
            .then(res => {
                const { displayName, email } = res.user;
                const signInUser = {
                    displayName: displayName,
                    email: email,
                    success: true,
                    error: false
                }
                return signInUser;
            })
            .catch(err => {
                const newUserInfo = {};
                newUserInfo.success = false;
                newUserInfo.error = err.message;
                return newUserInfo;
            });

    };

    // githubLogin 
    const githubLogin = () => {
        const provider = new GithubAuthProvider();
        return signInWithPopup(auth, provider)
            .then(res => {
                const { displayName, email } = res.user;
                const signInUser = {
                    displayName: displayName,
                    email: email,
                    success: true,
                    error: false
                }
                return signInUser;
            })
            .catch(err => {
                const newUserInfo = {};
                newUserInfo.success = false;
                newUserInfo.error = err.message;
                return newUserInfo;
            });
    };

    // createWithEmailAndPassword
    const createWithEmailAndPassword = (name, email, password) => {
        return createUserWithEmailAndPassword(auth, email, password)
            .then(res => {
                const newUserInfo = res.user;
                newUserInfo.success = true;
                newUserInfo.error = false;
                updateProfileInfo(name)
                return newUserInfo;
            })
            .catch(err => {
                const newUserInfo = {};
                newUserInfo.success = false;
                newUserInfo.error = err.message;
                return newUserInfo;
            });
    };

    // signWithEmailAndPassword
    const signWithEmailAndPassword = (email, password) => {
        return signInWithEmailAndPassword(auth, email, password)
            .then(res => {
                const newUserInfo = res.user;
                newUserInfo.success = true;
                newUserInfo.error = false;
                return newUserInfo;

            })
            .catch(err => {
                const newUserInfo = {};
                newUserInfo.success = false;
                newUserInfo.error = err.message;
                return newUserInfo
            });

    };

    // AuthStateChanged 
    useEffect(() => {
        const unSubscribe = onAuthStateChanged(auth, (user) => {
            if (user) {
                setUser(user);
            } else {

            }
        });
        return () => unSubscribe;
    }, []);

    // updateProfileInfo
    const updateProfileInfo = name => {
        updateProfile(auth.currentUser, {
            displayName: name
        }).then(() => { })
            .catch((error) => { });
    };

    // logOut 
    const logOut = () => {
        signOut(auth)
            .then(() => setUser({}))
            .catch((error) => { });
    }

    return {
        user,
        setUser,
        googleLogin,
        facebookLogin,
        githubLogin,
        createWithEmailAndPassword,
        signWithEmailAndPassword,
        logOut
    }
}

export default useFirebase;