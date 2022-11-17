import React, {useState, useEffect} from 'react'
import "../navibar/Navibar.css"
import { FaAccessibleIcon } from "react-icons/fa"
import { Container, Navbar } from 'react-bootstrap'
import { auth } from '../../firebase'
import {signOut} from "firebase/auth"
import { useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify'



const Navibar = ({displayName, uid}) => {
    const [logout, setLogout] = useState(null)
    const navigate = useNavigate()
    const userID = uid

    const handleLogout = () => {
        signOut(auth).then(() => {
            setTimeout(() => {
                setLogout(null)
                navigate("/")
                toast.success("Logout successful")
            })
        })
    }
    
  return (
    <section>
        <Navbar bg="dark" variant="dark">
            <Container>
                <div className='navigation'>
                    <div className='nav-1'>
                        <FaAccessibleIcon size={30} />&nbsp;&nbsp;
                        <h6>Job<span>Target</span></h6>
                    </div>
                    <div className='login'>
                        <h6>Welcome: {displayName}</h6>
                        {!userID ? (
                            <h6>Login</h6>
                        ) : (
                            <h6 style={{cursor: "pointer"}} onClick={handleLogout}>Logout</h6>
                        )}
                        
                    </div>
                </div>
            </Container>
       </Navbar>
    </section>
  )
}

export default Navibar