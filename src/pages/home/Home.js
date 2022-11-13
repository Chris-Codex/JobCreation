import React from 'react'
import "../home/Home.css"
import { Col, Container, Row } from 'react-bootstrap'
import { FaDeezer, FaAccessibleIcon } from "react-icons/fa"

const Home = () => {
  return (
    <Container>
        <Row>
            <Col md={2}>
                <div className='sideNavs'>
                    <ul className='list'>
                        <li><FaDeezer size={22} />&nbsp;Stats</li>
                        <li><FaAccessibleIcon size={22} />&nbsp;All Jobs</li>
                        <li>Add Job</li>
                        <li>Profile</li>
                    </ul>
                </div>
            </Col>
            <Col md={10} className="content-col">

            </Col>
        </Row>
    </Container>
  )
}

export default Home