
import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';
import { toastMessage } from '../utils/toast';
import { setPatientList, setUser, setClinicalHistory, cleanClinicalHistory } from '../redux/actions/PatientListActions'
import { 
    doc, 
    getDocs, 
    where,
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

const signUpWithEmailAndPassword = async (name, profesion, email, password) => {
    try {
      const res = await auth.createUserWithEmailAndPassword(email, password)
      const user = res.user
      await db.collection("users").add({
        uid: user.uid,
        name,
        profesion,
        authProvider: "local",
        email,
      })
    } catch (err) {
        console.log(err);
        toastMessage('error', 'Error al crear usuario, posiblemente el usuario ya exista, intente de nuevo', 'error_register')
    }
}

const signInWithEmailAndPassword = async (email, password) => {
    try {
      const res = await auth.signInWithEmailAndPassword(email, password)
    } catch (err) {
      console.error(err)
      toastMessage('error', 'Correo o contraseña erroneos', 'error_auth')
    }
}

const getUserName = async (id,dispatch) => {
    try {
        const userRef = collection(db, "users");
        const q = query(userRef, where("uid", "==", id));
        const querySnapshot = await getDocs(q);
        querySnapshot.forEach((doc) => {
            dispatch(setUser(doc.data()))
        });
    } catch (error) {
        console.log('doctor:', error);
        toastMessage('error', 'Ups, hubo un error, intente de nuevo.', 'error_adding_favorite')
    }
}

const getclinicalHistory = async (id,dispatch) => {
    try {
        const userRef = collection(db, "clinicalHistory");
        const q = query(userRef, where("idDoc", "==", id));
        const querySnapshot = await getDocs(q);
        if (querySnapshot.docs.length === 0) {
            dispatch(cleanClinicalHistory())
        } else {
            querySnapshot.forEach((doc) => {
                dispatch(setClinicalHistory(doc.data()))
            });
        }
    } catch (error) {
        console.log('clinic:', error);
        toastMessage('error', 'Ups, hubo un error, intente de nuevo.', 'error_adding_favorite')
    }
}

const addPatient = async (patientInfo,navigate) => {
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
            inCharge: patientInfo.inCharge
        });
        navigate("/PlayerList")
        toastMessage('success', 'Paciente añadido correctamente', 'error_adding_favorite')
    } catch (e) {
        toastMessage('error', 'Error al agregar paciente, intente de nuevo.', 'error_adding_favorite')
    }
}

const addClinicalHistory = async (patinetHistory,navigate) => {
    try {
        const docRef = await setDoc(doc(db, "clinicalHistory", patinetHistory.idDoc), {
            allergy: patinetHistory.allergy,
            bloodType: patinetHistory.bloodType,
            consultation: patinetHistory.consultation,
            doctor: patinetHistory.doctor,
            illness: patinetHistory.illness,
            injury: patinetHistory.injury,
            medicine: patinetHistory.medicine,
            sex: patinetHistory.sex,
            surgery: patinetHistory.surgery,
            surgeryBool: patinetHistory.surgeryBool,
            tranfusion: patinetHistory.tranfusion,
            tranfusionReaction: patinetHistory.tranfusionReaction,
            idDoc: patinetHistory.idDoc
        });
        navigate(`/${patinetHistory.idDoc}/PlayerView`)
        toastMessage('success', 'Historia clinica actualizada correctamente', 'error_adding_favorite')
    } catch (e) {
        console.log(e);
        toastMessage('error', 'Error al actualizar historia clinica, intente de nuevo.', 'error_adding_favorite')
    }
}

const addTherapy = async (patinettherapy,navigate) => {
    console.log('patinettherapy', patinettherapy);
    try {
        const docRef = await setDoc(doc(db, "clinicalHistory", patinettherapy.idDoc), {
            inDate: patinettherapy.inDate,
            outDate: patinettherapy.outDate,
            injuryBool: patinettherapy.injuryBool,
            injuryDate: patinettherapy.injuryDate,
            orthesisBool: patinettherapy.orthesisBool,
            orthesis: patinettherapy.orthesis,
            diagnosis: patinettherapy.diagnosis,
            record: patinettherapy.record,
            idDoc: patinettherapy.idDoc
        });
        toastMessage('success', 'Datos actualizados correctamente', 'error_adding_favorite')
    } catch (e) {
        console.log(e);
        toastMessage('error', 'Error al actualizar historia clinica, intente de nuevo.', 'error_adding_favorite')
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
    getUserName,
    getclinicalHistory,
    addClinicalHistory,
    addTherapy,
    addPatient,
    getPatients,
    updateFavorites,
    removeFavorites,
    logOut,
}