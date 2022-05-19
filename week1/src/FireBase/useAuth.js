import {useState} from 'react'
import {useNavigate} from 'react-router-dom'
import FireBaseConfig from './FireBaseConfig'
import {getAuth, 
        signOut, 
        signInWithEmailAndPassword, 
        createUserWithEmailAndPassword,
        onAuthStateChanged,
} from 'firebase/auth'

function useAuth() {
    const [user, setUser] = useState({});
    const [isAuth, setAuth] = useState(false);
    const auth = getAuth();
    
    onAuthStateChanged(auth, (currentUser) => {
        if(currentUser){
            console.log(currentUser)
            setAuth(true)
            return;
        }
        setAuth(false);
        return;
    });

    const registration = async (email, password) =>{
            await createUserWithEmailAndPassword(auth, email, password);

    };
    const login = async (email, password) =>{
            await signInWithEmailAndPassword(auth, email, password)
    };
    const logout = async () =>{
        await signOut(auth)
        console.log("click")
    };


    return {registration, login, logout}
}
export default useAuth