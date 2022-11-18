import React, { useRef, useEffect, useContext, useState } from 'react'
import { Form, Button, Alert } from 'react-bootstrap';
import { doc, getDoc, addDoc, updateDoc, deleteDoc, collection, serverTimestamp} from "firebase/firestore"
import { db } from '../../firebase';
import { contextUser } from '../../context/Context';
import Navibar from '../navibar/Navibar';
import { toast } from 'react-toastify';
import { jobs, statux } from '../../utility/dropdownData';
import { useParams } from 'react-router-dom';
import { useSelector } from 'react-redux';

const initial_state = {
    position: "",
    company: "",
    location: "",
    status: "",
    type: "",
    description: ""
}

const AddForms = () => {
    const {id} = useParams()
    console.log("ID", id)
    const {user} = useContext(contextUser)
    const username = user?.displayName
    const userID = user?.uid

    const [state, setState] = useState(initial_state)

    const { position, company, location, status, type, description } = state


    const handleChange = (e) => {
        setState({...state, [e.target.name]: e.target.value})
    }

    const handleSubmit = async (e) => {
        e.preventDefault()

        if(!id){
            if(position && company && location && status && type && description){
                try{
                    await addDoc(collection(db, "AddJobs"), {
                        ...state,
                        timeStamp: serverTimestamp(),
                        author: username,
                        authorID: userID
                    })
                    setState(initial_state)
                    toast.success("Add Successfully")
                }catch(error){
                    toast.error("Unable to submit data")
                }
            } else{
                toast.error("All fields are required")
            }
        }else{
            try{
                await updateDoc(doc(db, "AddJobs", id),{
                    ...state,
                    timeStamp: serverTimestamp(),
                    author: username,
                    authorID: userID
                })
                setState(initial_state)
                toast.success("Update was Successful")
            }catch(error){
                toast.error("An error occured")
            }
        }

    }

    const getEditDetaails = async () => {
        const getRef = doc(db, "AddJobs", id);
        const snapResult = await getDoc(getRef)
        if(snapResult.exists()){
            setState({...snapResult.data()})
        }
    }

    useEffect(() => {
        id && getEditDetaails()
    }, [])
  return (
    <section>
        <div className='job-card'>
            <Alert variant="light">
                <h3>Add Jobs</h3>
                    <Form onSubmit={handleSubmit}>
                        <div className='forms-input'>
                            <Form.Group className="mb-3">
                                <Form.Label>Position</Form.Label>
                                <Form.Control style={{width: 300}} type="text" name="position" value={position} onChange={handleChange} placeholder="Enter Position" />
                            </Form.Group>

                            <Form.Group className="mb-3">
                                <Form.Label>Company</Form.Label>
                                <Form.Control style={{width: 300}} type="text" name="company" value={company} onChange={handleChange} placeholder="Enter Company" />
                            </Form.Group>

                            <Form.Group className="mb-3">
                                <Form.Label>Job Location</Form.Label>
                                <Form.Control style={{width: 300}} type="text" name="location" value={location} onChange={handleChange} placeholder="Enter Job Location" />
                            </Form.Group>
                        </div>

                        <div className='forms-input'>
                            <Form.Select style={{width: 500}} name="status" value={status} onChange={handleChange} aria-label="Default select example">
                                <option>Status</option>
                                {statux.map((stat, index) => {
                                     return (
                                        <option name="status" value={stat || ""} key={index}>{stat}</option>
                                     )
                                })}
                            </Form.Select>

                            <Form.Select style={{width: 500}} name="type" value={type} onChange={handleChange}>
                                <option>Job Type</option>
                                {jobs.map((job, index) => {
                                    return (
                                        <option name="type" value={job || ""} key={index}>{job}</option>
                                    )
                                })}
                            </Form.Select>
                        </div>

                        <div className='forms-inputs'>
                            <Form.Group className="mb-3">
                                <Form.Label>Description</Form.Label>
                                <Form.Control name="description" value={description} onChange={handleChange} as="textarea" rows={3} />
                            </Form.Group>
                        </div>

                        <div className='form-btns'>
                            <Button variant="dark" type="submit">Clear List</Button>
                            &nbsp;
                            <Button variant="primary" type="submit">Submit</Button>
                        </div>

                        
                    </Form>
            </Alert>
        </div>
    </section>
  )
}

export default AddForms