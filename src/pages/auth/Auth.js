import React, { useState } from 'react'
import { Container, Form, Button } from 'react-bootstrap'
import "../auth/Auth.css"
import "../add-jobs/AddJobs.css"
import { toast } from 'react-toastify'
import { signInWithEmailAndPassword } from 'firebase/auth';
import { Link, useNavigate } from 'react-router-dom'
import { auth } from '../../firebase'
import { useSelector, useDispatch } from 'react-redux';
import { loginUser } from '../../features/user/userSlice'

const initial_state = {
    firstname: "",
    lastname: "",
    email: "",
    phone: "",
    password: "",
    cfmPassword: ""
}

const Auth = () => {
    const navigate = useNavigate();
    const dispatch = useDispatch();
    const [state, setState] = useState(initial_state);
    const [data, setData] = useState([]);

    const { email, password } = state

    const handleChange = (e) => {
        setState({...state, [e.target.name]: e.target.value})
    }

    const handleSubmit = (e) => {
        e.preventDefault()
        
            if(email && password){
                signInWithEmailAndPassword(auth, email, password)
                .then((authUser) => {
                    const users = authUser.user
                    console.log("USER", users)
                    dispatch(loginUser({...users}));
                    setData({...users})
                    navigate("/home")
                })
                .catch((error) => {
                    setTimeout(() => {
                        toast.error("User or password doesn't exist")
                    }, 500)
                })
            } else {
                 toast.error("All fields are required")
            }
    }
    
  return (
    <section>
        <Container>
            <div className='wrapper'>
                    <h4 style={{fontWeight: "bold"}}>JobCreation Login Accesss</h4>
    
                    <Form onSubmit={handleSubmit}>
                        <div className='forms-inputs'>
                            <Form.Group className="mb-3">
                                <Form.Label>Email</Form.Label>
                                <Form.Control style={{width: 300}} name="email" value={email} onChange={handleChange} type="text" placeholder="Enter Email" />
                            </Form.Group>

                            <Form.Group className="mb-3">
                                <Form.Label>Password</Form.Label>
                                <Form.Control style={{width: 300}} name="password" value={password} onChange={handleChange} type="password" placeholder="Enter Password" />
                            </Form.Group>
                            <Form.Text>If you are a new user <span style={{color: "red", cursor: "pointer"}}><Link to="/register">sign up</Link></span></Form.Text>
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

export default Auth