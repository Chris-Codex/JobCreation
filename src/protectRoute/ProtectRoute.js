import React, { useContext } from 'react'
import { contextUser } from '../context/Context'
import { useSelector } from 'react-redux';
import { Navigate } from 'react-router-dom';


const ProtectRoute = ({children}) => {
    const {user} = useContext(contextUser)
    // const { user } = useSelector((store) => store.user)

    if(!user){
        return <Navigate to="/" />
    } else {
        return children
    }
  
}

export default ProtectRoute