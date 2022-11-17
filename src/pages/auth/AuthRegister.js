import React, { useState } from 'react'
import { Container, Form, Button } from 'react-bootstrap'
import "../auth/Auth.css"
import "../add-jobs/AddJobs.css"
import { toast } from 'react-toastify'
import { createUserWithEmailAndPassword, updateProfile } from 'firebase/auth';
import { useNavigate } from 'react-router-dom'
import { auth } from '../../firebase'
import { useDispatch, useSelector } from 'react-redux'
import { registerUser } from './../../features/user/userSlice';

const initial_state = {
    firstname: "",
    lastname: "",
    email: "",
    password: "",
    cfmPassword: ""
}

const AuthRegister = () => {
    const navigate = useNavigate()
    // const {user, isLoading} = useSelector(store => store.user)
    const dispatch = useDispatch()

    const [state, setState] = useState(initial_state)

    const {firstname, lastname, email, password, cfmPassword} = state

    const handleChange = (e) => {
        setState({...state, [e.target.name]: e.target.value})
    }

    const handleSubmit = (e) => {
        e.preventDefault()
        
        if(firstname && lastname && email && password && cfmPassword){
           if (password !== cfmPassword){
            toast.error("Password doesn't match")
           } else {
            createUserWithEmailAndPassword(auth, email, password)
            .then((authUser) => {
                const user = authUser.user

                if(user) {
                    updateProfile(user, {displayName: `${firstname} ${lastname}`})
                    // dispatch({})
                }
                dispatch(registerUser(user, {displayName: `${firstname} ${lastname}`}))
                navigate("/") 
                setState("") 
            })
           }
        } else {
            toast.error("All fields are mandatory")
        }
     }
    
  return (
    <section>
        <Container>
            <div className='wrapper'>
                <h4 style={{fontWeight: "bold"}}>JobCreation Registration</h4>
               
                <Form onSubmit={handleSubmit}>
                    <div className='forms-inputs'>
                        <Form.Group className="mb-3">
                            <Form.Label>Firstname</Form.Label>
                            <Form.Control style={{width: 500}} name="firstname" value={firstname} onChange={handleChange} type="text" placeholder="Enter Firstname" />
                        </Form.Group>

                        <Form.Group className="mb-3">
                            <Form.Label>Lastname</Form.Label>
                            <Form.Control style={{width: 500}} name="lastname" value={lastname} onChange={handleChange} type="text" placeholder="Enter Lastname" />
                        </Form.Group>

                        <Form.Group className="mb-3">
                            <Form.Label>Email</Form.Label>
                            <Form.Control style={{width: 500}} name="email" value={email} onChange={handleChange} type="text" placeholder="Enter Email" />
                        </Form.Group>

                        <Form.Group className="mb-3">
                            <Form.Label>Password</Form.Label>
                            <Form.Control style={{width: 500}} name="password" value={password} onChange={handleChange} type="password" placeholder="Enter Password" />
                        </Form.Group>

                        <Form.Group className="mb-3">
                            <Form.Label>Confirm Password</Form.Label>
                            <Form.Control style={{width: 500}} name="cfmPassword" value={cfmPassword} onChange={handleChange} type="password" placeholder="Enter Password" />
                        </Form.Group>
                        <Form.Text>If you are a new user <span style={{color: "red", cursor: "pointer"}}>sign up</span></Form.Text>
                    </div>

                    <div className='form-btns'>
                        <Button variant="primary" type="submit">Submit</Button>
                    </div>
               </Form>
            </div>
        </Container>
    </section>
  )
}

export default AuthRegister