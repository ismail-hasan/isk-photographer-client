
import { initializeApp } from "firebase/app";

const firebaseConfig = {
    apiKey:process.env.REACT_APP_apiKey,
    authDomain:process.env.REACT_APP_authDomain,
    projectId:process.env.REACT_APP_projectId,
    storageBucket:process.env.REACT_APP_storageBucket,
    messagingSenderId:process.env.REACT_APP_messagingSenderId,
    appId:process.env.REACT_APP_appId,
};
// const firebaseConfig = {
//     apiKey: "AIzaSyDYzEgdw6gwElMdrsWh734cZrpTB7zWf7o",
//     authDomain: "review-assignment.firebaseapp.com",
//     projectId: "review-assignmentreview-assignment",
//     storageBucket: "review-assignment.appspot.com",
//     messagingSenderId: "57148985926",
//     appId: "1:57148985926:web:d3169fbd15370b12c7b047"
// };

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export default app