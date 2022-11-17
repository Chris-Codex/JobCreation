import React, { useContext } from 'react'
import { Row, Col, Alert, Tab, Tabs, Button } from 'react-bootstrap';
import List from './../list/List';
import { contextUser } from './../../context/Context';

const Rows = () => {
    const {user} = useContext(contextUser)

  return (
    <>
        <Row>
            <Col md={2}>
                <div className='sideNavs'>
                    <List />
                </div>
            </Col>
            <Col md={10} className="content-col">
                <Alert variant="light" className='alerts'>
                    <h3>Profile</h3>
                    <Row>
                        <Col md="3">
                            <img src="https://th.bing.com/th/id/R.fd5a137d4cc43657449836c511c422e1?rik=RL8thP2DW9fxVg&pid=ImgRaw&r=0" className='img' alt="name" />
                        </Col>
                        <Col md="5">
                            <h6>{user?.displayName}</h6>
                            <h6 style={{color: "rgb(12, 227, 227);"}}>{user?.email}</h6>
                            <p style={{fontSize: 13}}>Dated Created: 14/11/2022</p>

                            <Tabs
                            
                            id="uncontrolled-tab-example"
                            className="mb-3"
                            >
                                <Tab eventKey="home" title="About">
                                    <Row>
                                        <Col md={4}>
                                            <ul className='list'>
                                                <li>User Id:</li>
                                                <li>Name:</li>
                                                <li>Email:</li>
                                            </ul>
                                        </Col>
                                        <Col md={8}>
                                            <ul className='list'>
                                                <li>{user?.uid}</li>
                                                <li>{user?.displayName}</li>
                                                <li>{user?.email}</li>
                                            </ul>
                                        </Col>
                                    </Row>
                                </Tab>
            
                                <Tab eventKey="contact"  disabled>
                                   ddasd
                                </Tab>
                            </Tabs>
                        </Col>
                        <Col md="4">
                            <Button variant="primary">Edit Profile</Button>
                        </Col>
                    </Row>
                </Alert>
            </Col>
        </Row>
    </>
  )
}

export default Rows