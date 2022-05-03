
import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';
import { toastMessage } from '../utils/toast';
import { 
    setPatientList, 
    setUser, 
    setClinicalHistory, 
    clearClinicalHistory,
    setTherapy,
    clearTherapy,
    setPrepare,
    clearPrepare,
} from '../redux/actions/PatientListActions'
import { 
    doc, 
    getDocs, 
    where,
    setDoc, 
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
            dispatch(clearClinicalHistory())
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

const getTherapy = async (id,dispatch) => {
    try {
        const userRef = collection(db, "therapy");
        const q = query(userRef, where("idDoc", "==", id));
        const querySnapshot = await getDocs(q);
        if (querySnapshot.docs.length === 0) {
            dispatch(clearTherapy())
        } else {
            querySnapshot.forEach((doc) => {
                dispatch(setTherapy(doc.data()))
            });
        }
    } catch (error) {
        console.log('clinic:', error);
        toastMessage('error', 'Ups, hubo un error, intente de nuevo.', 'error_adding_favorite')
    }
}

const getPrepare = async (id,dispatch) => {
    console.log(id);
    try {
        const userRef = collection(db, "prepare");
        const q = query(userRef, where("idDoc", "==", id));
        const querySnapshot = await getDocs(q);
        if (querySnapshot.docs.length === 0) {
            dispatch(clearPrepare())
        } else {
            querySnapshot.forEach((doc) => {
                dispatch(setPrepare(doc.data()))
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
        const docRef = await setDoc(doc(db, "therapy", patinettherapy.idDoc), {
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
        navigate(`/${patinettherapy.idDoc}/PlayerView`)
    } catch (e) {
        console.log(e);
        toastMessage('error', 'Error al actualizar datos, intente de nuevo.', 'error_adding_favorite')
    }
}

const addPrepare = async (patientPrepare,navigate) => {
    console.log('patientPrepare',patientPrepare);
    try {
        const docRef = await setDoc(doc(db, "prepare", patientPrepare.idDoc), {
            fc: patientPrepare.fc,
            fr: patientPrepare.fr,
            ta: patientPrepare.ta,
            bt: patientPrepare.bt,
            size: patientPrepare.size,
            weight: patientPrepare.weight,
            mci: patientPrepare.weight,
            testMmss: patientPrepare.mci,
            rhandMmss: patientPrepare.rhandMmss,
            lhandMmss: patientPrepare.lhandMmss,
            testMmii: patientPrepare.testMmii,
            rhandMmii: patientPrepare.rhandMmii,
            lhandMmii: patientPrepare.lhandMmii,
            painBool: patientPrepare.painBool,
            painScale: patientPrepare.painScale,
            place: patientPrepare.painScale,
            edema: patientPrepare.edema,
            fovea: patientPrepare.fovea,
            perometer: patientPrepare.perometer || "NA",
            goniometry: patientPrepare.goniometry,
            march: patientPrepare.march,
            idDoc: patientPrepare.idDoc,
        });
        toastMessage('success', 'Datos actualizados correctamente', 'error_adding_favorite')
        navigate(`/${patientPrepare.idDoc}/PlayerView`)
    } catch (e) {
        console.log(e);
        toastMessage('error', 'Error al actualizar datos, intente de nuevo.', 'error_adding_favorite')
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
    getTherapy,
    getPrepare,
    addClinicalHistory,
    addTherapy,
    addPrepare,
    addPatient,
    getPatients,
    logOut,
}