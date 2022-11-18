import React, { useContext, useState, useEffect } from 'react'
import { Row, Col } from 'react-bootstrap';
import { FaDeezer, FaAccessibleIcon, FaAddressCard, FaAddressBook, FaWpforms, FaBlenderPhone, FaExpandArrowsAlt } from "react-icons/fa"
import { contextUser } from '../../context/Context';
import "../../pages/home/Home.css"
import { onSnapshot } from 'firebase/firestore';
import { collection } from 'firebase/firestore';
import { db } from '../../firebase';
import Auth from './../../pages/auth/Auth';

const Cards = () => {
    const {datas, user, getLength} = useContext(contextUser)
    const [data, setData] = useState([])
    const [authID, setAuthID] = useState({})

    const userID = user?.uid

    


    const getStatus = data,
        status = getStatus.reduce(function (r, a) {
            r[a.status] = (r[a.status] || 0) + 1;
            return r;
    }, {});
    

    useEffect(() => {
        const list = []
        const snapshot = onSnapshot(collection(db, "AddJobs"),
            (snapshot) => {
                snapshot.docs.forEach((doc) => {
                    list.push({id: doc.id, ...doc.data()})
                })
                setData(list)
            }
        )
       
        return () => {
        snapshot();
        }
    }, [])
    
  return (
    <section>
        <div className='cards'>
                    <Row>
                        <Col md={3}>
                            <div className='card-control'>
                                <div className='card-1'>
                                    <div className='faP1'>
                                        <h6 style={{color: "rgb(245, 212, 165)", fontSize: 26}}>{status.Pending ? status.Pending : 0}</h6>
                                    </div>
                                    <div className='faP'>
                                        <FaWpforms className='FawpformsIcon' />
                                    </div>
                                </div>
                                <h5>Pending Application</h5>
                            </div>
                        </Col>
                        <Col md={3}>
                            <div className='card-control'>
                                    <div className='card-1'>
                                        <div className='faP1'>
                                            <h6 style={{color: "rgb(245, 212, 165)", fontSize: 26}}>{status.interview  ? status.interview : 0}</h6>
                                        </div>
                                        <div className='faP'>
                                            <FaBlenderPhone className='FawpformsIcon' />
                                        </div>
                                    </div>
                                    <h5>Interviews Scheduled</h5>
                            </div>
                        </Col>
                        <Col md={3}>
                        <div className='card-control'>
                            <div className='card-1'>
                                <div className='faP1'>
                                    <h6 style={{color: "rgb(245, 212, 165)", fontSize: 26}}>{status.Approved ? status.Approved : 0}</h6>
                                </div>
                                <div className='faP'>
                                    <FaExpandArrowsAlt className='FawpformsIcon' />
                                </div>
                                </div>
                                <h5>Approved Application</h5>
                            </div>
                        </Col>
                        <Col md={3}>
                        <div className='card-control'>
                            <div className='card-1'>
                                <div className='faP1'>
                                    <h6 style={{color: "rgb(245, 212, 165)", fontSize: 26}}>{status.Declined ? status.Declined : 0}</h6>
                                </div>
                                <div className='faP'>
                                    <FaExpandArrowsAlt className='FawpformsIcon' />
                                </div>
                                </div>
                                <h5>Jobs Declined</h5>
                            </div>
                        </Col>
                    </Row>
                </div>
    </section>
  )
}

export default Cards