const firebaseConfig = {
    apiKey: process.env.REACT_APP_FIREBASE_api_Key,
    authDomain: process.env.REACT_APP_FIREBASE_auth_Domain,
    projectId: process.env.REACT_APP_FIREBASE_project_Id,
    storageBucket: process.env.REACT_APP_FIREBASE_messaging_Sender_Id,
    messagingSenderId: process.env.REACT_APP_FIREBASE_app_Id,
    appId: process.env.REACT_APP_FIREBASE_storage_Bucket,
  };

  export default firebaseConfig;