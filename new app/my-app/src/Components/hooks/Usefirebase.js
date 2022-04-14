import { useEffect, useState } from "react"
import { getAuth, GoogleAuthProvider, signInWithPopup } from "firebase/auth";
import app from "../../firbase.init";

const Usefirebase = () => {
    const provider = new GoogleAuthProvider();
    const auth = getAuth(app);

    const [user, setUser] = useState({})


    useEffect(() => {

    }, [])

    const signingoogle = () => {
        signInWithPopup(auth, provider)
            .then(result => {
                const user = result.user;
                setUser(user);
                console.log(user)
            })
    }

    // return [user, setUser]
    return { user, setUser, signingoogle }


}

export default Usefirebase;