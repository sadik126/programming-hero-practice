import { useEffect, useState } from "react"
import { getAuth, GoogleAuthProvider, onAuthStateChanged, signInWithPopup, signOut } from "firebase/auth";
import app from "../../firbase.init";

const Usefirebase = () => {
    const provider = new GoogleAuthProvider();
    const auth = getAuth(app);

    const [user, setUser] = useState({})


    useEffect(() => {
        onAuthStateChanged(auth, user => {
            setUser(user);
        })
    }, [])

    const handlesignout = () => {
        signOut(auth)
            .then(() => {

            })
    }

    const signingoogle = () => {
        signInWithPopup(auth, provider)
            .then(result => {
                const user = result.user;
                setUser(user);
                console.log(user)
            })
    }

    // return [user, setUser]
    return { user, setUser, signingoogle, handlesignout }


}

export default Usefirebase;