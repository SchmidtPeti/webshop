import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

const config = {
    apiKey: "AIzaSyCaj5G9JoEXtdLiYY1VYiu8bSW2fn2qYhM",
    authDomain: "webshop-db-9330e.firebaseapp.com",
    projectId: "webshop-db-9330e",
    storageBucket: "webshop-db-9330e.appspot.com",
    messagingSenderId: "643006913672",
    appId: "1:643006913672:web:8ab5774920617a20bd533d",
    measurementId: "G-NDG8048X2W"
};

export const createUserProfileDocument = async (userAuth,additionalData) =>{
    if(!userAuth) return;

    const userRef = firestore.doc(`users/${userAuth.uid}`);
    const snapShot = await userRef.get();

    if(!snapShot.exists){
        const {displayName, email} = userAuth;
        const createdAt = new Date();

        try{
            await userRef.set({
                displayName,
                email,
                createdAt,
                ...additionalData
            })
        }
        catch(error){
            console.log('error creating user',error.message);
        }
    }
    return userRef;
}

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provoider = new firebase.auth.GoogleAuthProvider();
provoider.setCustomParameters({prompt:'select_account'});
export const signInWithGoogle = () => auth.signInWithPopup(provoider);

export default firebase;
  