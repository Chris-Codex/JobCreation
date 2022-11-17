import React, { useContext, useState, useEffect } from 'react'
import { FaDeezer, FaAccessibleIcon, FaAddressCard, FaAddressBook } from "react-icons/fa"
import { Link } from 'react-router-dom'
import { contextUser } from './../../context/Context';
import ProtectRoute from './../../protectRoute/ProtectRoute';


const List = () => {
  const {user} = useContext(contextUser)
  const userID = user?.uid
  console.log(user?.email)
 
  return (
    <section>
        <ul className='list'>
            <ProtectRoute>
              <Link to="/home" style={{textDecoration: "none", color: "#000"}}>
                <li><FaDeezer size={22} />&nbsp;Stats</li>
              </Link>
            </ProtectRoute>
            <Link to="/all-jobs" style={{textDecoration: "none", color: "#000"}}>
              <li><FaAccessibleIcon size={22} />&nbsp;All Jobs</li>
            </Link>
            <ProtectRoute>
              <Link to="/add-jobs" style={{textDecoration: "none", color: "#000"}}>
                <li><FaAddressCard size={22} />&nbsp;Add Job</li>
              </Link>
            </ProtectRoute>
            <Link to="/profile" style={{textDecoration: "none", color: "#000"}}>
              <li><FaAddressBook size={22} />&nbsp;Profile</li>
            </Link>
        </ul>
    </section>
  )
}

export default List