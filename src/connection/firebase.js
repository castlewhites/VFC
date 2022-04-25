
import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';
import { toastMessage } from '../utils/toast';
import { setPatientList } from '../redux/actions/PatientListActions'
import { 
    doc, 
    setDoc, 
    arrayUnion, 
    arrayRemove, 
    updateDoc,  
    collection, 
    query,
    onSnapshot
} from "firebase/firestore";

const firebaseConfig  = {
    apiKey: "AIzaSyCjOA3VHiltKRDexpnLJguv9clcloQeofM",
    authDomain: "vpfc-4c8ca.firebaseapp.com",
    projectId: "vpfc-4c8ca",
    storageBucket: "vpfc-4c8ca.appspot.com",
    messagingSenderId: "668601407048",
    appId: "1:668601407048:web:3bf1515e7cb303b407ea7d"
};
const fb  = firebase.initializeApp(firebaseConfig);
const auth = fb.auth();
const db = fb.firestore();

const googleProvider = new firebase.auth.GoogleAuthProvider();

const signUpWithEmailAndPassword = async (name, email, password) => {
    try {
      const res = await auth.createUserWithEmailAndPassword(email, password)
      const user = res.user
      await db.collection("users").add({
        uid: user.uid,
        name,
        authProvider: "local",
        email,
      })
    } catch (err) {
        toastMessage('error', '!Upss user was not created, plaese check and try again!', 'error_register')
    }
}

const signInWithEmailAndPassword = async (email, password) => {
    try {
      const res = await auth.signInWithEmailAndPassword(email, password)
    } catch (err) {
      console.error(err)
      toastMessage('error', '!Upss user does not exists, please check and try again!', 'error_auth')
    }
}

// pop up for google login
const googleLogin = async () => {
    try {
      const res = await auth.signInWithPopup(googleProvider)
      const user = res.user
      const query = await db
        .collection("users")
        .where("uid", "==", user.uid)
        .get()
      if (query.docs.length === 0) {
        await db.collection("users").add({
          uid: user.uid,
          name: user.displayName,
          authProvider: "google",
          email: user.email,
        })
      }
    } catch (err) {
        toastMessage('error', '!Upss credentials erros, please check and try again!', 'error_adding_favorite');
    }
}

const addPatient = async (patientInfo) => {
    console.log('patientInfo:',patientInfo);
    try {
        const docRef = await setDoc(doc(db, "patients", patientInfo.idDoc), {
            nameP: patientInfo.nameP,
            age: patientInfo.age,
            bdate: patientInfo.bdate,
            idDoc: patientInfo.idDoc,
            address: patientInfo.address,
            email: patientInfo.email,
            tel: patientInfo.tel,
            weight: patientInfo.weight,
            height: patientInfo.height,
        });
    } catch (e) {
      toastMessage('error', 'Upps could not add to favorite, please try again!', 'error_adding_favorite')
    }
}

const getPatients = async (dispatch) => {
   try {
        const q = query(collection(db, "patients"));
        const unsubscribe = onSnapshot(q, (querySnapshot) => {
        const patients = [];
        querySnapshot.forEach((doc) => {
            patients.push(doc.data());
        });
        dispatch(setPatientList(patients));
        });
    } catch (error) {
       console.log(error);
    }
}
  
const updateFavorites = async (id, email) => {
    const document = doc(db, "fav_users", email);
    try {
        await updateDoc(document, {
        favorites: arrayUnion(id)
        })
    } catch (e) {
        toastMessage('error', 'Upps could not update favorites, please try again!', 'error_updating_favorite')
    }
};
  
const removeFavorites = async (id, email) => {
    const document = doc(db, "fav_users", email);
    try {
        await updateDoc(document, {
        favorites: arrayRemove(id)
        })
    } catch (e) {
        toastMessage('error', 'Upps an error has occurred, please try again!', 'error_removing_favorite')
    }
};


const logOut = () => {
    auth.signOut();
}

export {
    auth,
    db,
    signUpWithEmailAndPassword,
    signInWithEmailAndPassword,
    googleLogin,
    addPatient,
    getPatients,
    updateFavorites,
    removeFavorites,
    logOut,
}