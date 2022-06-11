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


// useFirebase-Function 
const useFirebase = () => {
    const auth = getAuth();
    const [ isLoading, setIsLoading ] = useState(true);
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
        setIsLoading(true);
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
            })
            .finally(()=> setIsLoading(false))
    };

    // facebookLogin
    const facebookLogin = () => {
        setIsLoading(true);
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
            })
            .finally(()=> setIsLoading(false))

    };

    // githubLogin 
    const githubLogin = () => {
        setIsLoading(true);
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
            })
            .finally(()=> setIsLoading(false))
    };

    // createWithEmailAndPassword
    const createWithEmailAndPassword = (name, email, password) => {
        setIsLoading(true);
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
            })
            .finally(()=> setIsLoading(false))
    };

    // signWithEmailAndPassword
    const signWithEmailAndPassword = (email, password) => {
        setIsLoading(true);
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
            })
            .finally(()=> setIsLoading(false))

    };

    // AuthStateChanged 
    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, (user) => {
            if (user) {
                setUser(user)
            }
            else { setUser({}) }
            setIsLoading(false)
        });
        return () => unsubscribe;
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
        setIsLoading(true);
        signOut(auth)
            .then(() => setUser({}))
            .catch((error) => { })
            .finally(()=> setIsLoading(false))
    }

    return {
        user,
        setUser,
        isLoading,
        googleLogin,
        facebookLogin,
        githubLogin,
        createWithEmailAndPassword,
        signWithEmailAndPassword,
        logOut
    }
}

export default useFirebase;