import React, { useEffect, useState, createContext } from 'react'
import { auth } from '../firebase'

export const contextUser = createContext()

export const ContextProvider = ({children}) => {
    const [user, setUser] = useState({})

    useEffect(() => {
        auth.onAuthStateChanged((getUser) => {
            const user = getUser
            setUser(user)
        })
    }, [])

  return (
    <contextUser.Provider value={{user}}>
        {children}
    </contextUser.Provider>
  )
}

