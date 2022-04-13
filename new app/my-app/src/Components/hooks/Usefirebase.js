import { useEffect, useState } from "react"

const Usefirebase = () => {
    const [user, setUser] = useState({})


    useEffect(() => {

    }, [])

    const signingoogle = () => {
        console.log('sogn in google')
    }

    // return [user, setUser]
    return { user, setUser, signingoogle }


}

export default Usefirebase;