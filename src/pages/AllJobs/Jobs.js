import React, { useContext, useEffect, useState } from 'react'
import List from '../../components/list/List'
import Navibar from '../../components/navibar/Navibar'
import { Container, Row, Col, Alert, Form, Button } from 'react-bootstrap';
import { contextUser } from './../../context/Context';
import "../AllJobs/Jobs.css"
import {FaTelegramPlane, FaWeightHanging, FaRegCalendarAlt} from "react-icons/fa"
import {onSnapshot, deleteDoc, doc, collection} from "firebase/firestore";
import { db } from '../../firebase';
import { Link, useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';
import { statux } from '../../utility/dropdownData';


const Jobs = () => {
    const navigate = useNavigate()
    const {user} = useContext(contextUser)
    const username = user?.displayName
    const uid = user?.uid

    const [data, setData] = useState([])
    const [query, setQuery] = useState("")
    const [qry, setQry] = useState("")

    //Search form
    const keys = ["position", "company", "type", "status"]

    const handleSearch = (data) => {
        return data.filter((item) => keys.some((key) => item[key].toLowerCase().includes(query,qry)))
    }

    //fetch all details from firestore
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
    },[])

    
    const handleDelete = async (id) => {
        try{
         await deleteDoc(doc(db, "AddJobs", id))
         setTimeout(() => {
             toast.success("Deleted Successfully")
         })
        }catch(error){
            console.log("ERRO", error.message)
         toast.error("An error occured")
        }
     }
        


  return (
    <>
        <Navibar displayName={username} uid={uid}  />
        <Container>
            <Row>
                <Col md={2}>
                    <div className='sideNavs'>
                        <List />
                    </div>
                </Col>

                <Col md={10} className="content-cols">
                    <div className='job-card'>
                        <Alert variant="light">
                            <h3 style={{marginLeft: 30}}>Search Form</h3>
                            <form  >
                                <div className='forms-display'>
                                    <Form.Group className="mb-3">
                                        <Form.Label>Search</Form.Label>
                                        <Form.Control name={query} value={query} onChange={(e) => setQuery(e.target.value)}  style={{width: 300}} type="text" />
                                    </Form.Group>

                                    <Form.Group className='mb-3'>
                                        <Form.Label>Status</Form.Label>
                                        <Form.Select style={{width: 300}} name={qry} value={qry} onChange={(e) => setQry(e.target.value)}  aria-label="Default select example">
                                            <option>Status</option>
                                            {statux.map((getStat, index) => {
                                                return (
                                                    <option name={query} key={index}>{getStat}</option>
                                                )
                                            })}
                                        </Form.Select>
                                    </Form.Group>

                                    <Form.Group className='mb-3'>
                                        <Form.Label>Type</Form.Label>
                                        <Form.Select style={{width: 300}}  aria-label="Default select example">
                                            <option>All</option>
                                            <option>Status</option>
                                            <option>Status</option>
                                        </Form.Select>
                                    </Form.Group>
                                </div>

                                <div className='forms-displays'>
                                    <Form.Group className='mb-3'>
                                        <Form.Label>Sort</Form.Label>
                                        <Form.Select style={{width: 300}}  aria-label="Default select example">
                                            <option>All</option>
                                            <option>Status</option>
                                            <option>Status</option>
                                        </Form.Select>
                                    </Form.Group>

                                    <Form.Group className='clearList'>
                                        <Button variant="danger" style={{width: 300}}>Clear List</Button>
                                    </Form.Group>
                                </div>
                        
                            
                            </form>      
                        </Alert>
                    </div>

                  
                    <Row style={{marginTop: 10}}>
                       {handleSearch(data).map((list) => {
                        const {id, authorID, position, company, location, status, type, timeStamp} = list
                       
                        return(
                            <>
                                {user?.uid && authorID === user?.uid ? (
                                    <Col md={6} key={id}>
                                    <Alert variant='light'>
                                        <div className='split-title'>
                                            <div className='logo'>
                                                <p>S</p>
                                            </div>
                                            <h6>{position} <p style={{fontWeight: 10, fontSize: 13}}>{company}</p></h6>
                                        </div>
    
                                        <div className='features'>
                                            <div className='row-1'>
                                                <p><FaTelegramPlane size={15} /> <span style={{fontSize: 12, fontWeight: "bold", color: "#000"}}>{location}</span></p>
                                                <p style={{marginTop: -10}}><FaWeightHanging size={15} /> <span style={{fontSize: 12, fontWeight: "bold", color: "#000"}}>{type}</span></p>
                                                <p style={{marginTop: -10}}>
                                                    <Link to={`/update-jobs/${id}`}><Button variant="success">Edit</Button></Link>&nbsp;
                                                    <Button variant="danger" onClick={()=> handleDelete(id)}>Delete</Button>
                                                </p>
                                            </div>
                                            <div className='row-2'>
                                            <p><FaRegCalendarAlt size={15} /> <span style={{fontSize: 12, fontWeight: "bold", color: "#000"}}>{timeStamp?.toDate()?.toDateString()}</span></p>
                                            <div className='job-status'>
                                                <p>{status}</p>
                                            </div>
                                            </div>
                                        </div>
                                    </Alert>
                                </Col>
                                ) : null}
                            </>
                        )
                       })}

                        
                    </Row>
                </Col>
            </Row>
        </Container>
    </>
  )
}

export default Jobs