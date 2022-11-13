import React from 'react'
import "../home/Home.css"
import { Col, Container, Row } from 'react-bootstrap'
import { FaDeezer, FaAccessibleIcon, FaAddressCard, FaAddressBook, FaWpforms, FaBlenderPhone, FaExpandArrowsAlt } from "react-icons/fa"

const Home = () => {
  return (
    <Container>
        <Row>
            <Col md={2}>
                <div className='sideNavs'>
                    <ul className='list'>
                        <li><FaDeezer size={22} />&nbsp;Stats</li>
                        <li><FaAccessibleIcon size={22} />&nbsp;All Jobs</li>
                        <li><FaAddressCard size={22} />&nbsp;Add Job</li>
                        <li><FaAddressBook size={22} />&nbsp;Profile</li>
                    </ul>
                </div>
            </Col>
            <Col md={10} className="content-col">
                <div className='cards'>
                    <Row>
                        <Col md={4}>
                            <div className='card-control'>
                                <div className='card-1'>
                                    <div className='faP1'>
                                        <h6 style={{color: "rgb(254, 235, 208)", fontSize: 26}}>21</h6>
                                    </div>
                                    <div className='faP'>
                                        <FaWpforms className='FawpformsIcon' />
                                    </div>
                                </div>
                                <h5>Pending Application</h5>
                            </div>
                        </Col>
                        <Col md={4}>
                            <div className='card-control'>
                                    <div className='card-1'>
                                        <div className='faP1'>
                                            <h6 style={{color: "rgb(254, 235, 208)", fontSize: 26}}>50</h6>
                                        </div>
                                        <div className='faP'>
                                            <FaBlenderPhone className='FawpformsIcon' />
                                        </div>
                                    </div>
                                    <h5>Interviews Scheduled</h5>
                            </div>
                        </Col>
                        <Col md={4}>
                        <div className='card-control'>
                            <div className='card-1'>
                                <div className='faP1'>
                                    <h6 style={{color: "rgb(254, 235, 208)", fontSize: 26}}>8</h6>
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
            </Col>
        </Row>
    </Container>
  )
}

export default Home