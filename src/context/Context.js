import React, { useEffect, useState, createContext } from 'react'
import { auth, db } from '../firebase'
import { onSnapshot } from 'firebase/firestore';
import { collection } from 'firebase/firestore';

export const contextUser = createContext()

export const ContextProvider = ({children}) => {
    const [user, setUser] = useState({})
    const [datas, setData] = useState([])

    const getLength = (text) => {
      if(text.length > 0) {
        return text.length
      }
    }

    useEffect(() => {
        auth.onAuthStateChanged((getUser) => {
            const user = getUser
            setUser(user)
        })
    }, [])

    useEffect(() => {
      const snapshot = onSnapshot(collection(db, "AddJobs"),
            (snapshot) => {
                let list = []
                snapshot.docs.forEach((doc) => {
                    list.push({id: doc.id, ...doc.data()})
                })
                setData(list)
            }
        )

        return () => {
            snapshot()
        }
    }, [])

  return (
    <contextUser.Provider value={{user, getLength, datas}}>
        {children}
    </contextUser.Provider>
  )
}

