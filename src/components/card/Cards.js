import React from 'react'
import { Row, Col } from 'react-bootstrap';
import { FaDeezer, FaAccessibleIcon, FaAddressCard, FaAddressBook, FaWpforms, FaBlenderPhone, FaExpandArrowsAlt } from "react-icons/fa"
import "../../pages/home/Home.css"

const Cards = () => {
  return (
    <section>
        <div className='cards'>
                    <Row>
                        <Col md={4}>
                            <div className='card-control'>
                                <div className='card-1'>
                                    <div className='faP1'>
                                        <h6 style={{color: "rgb(245, 212, 165)", fontSize: 26}}>21</h6>
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
                                            <h6 style={{color: "rgb(245, 212, 165)", fontSize: 26}}>50</h6>
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
                                    <h6 style={{color: "rgb(245, 212, 165)", fontSize: 26}}>8</h6>
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