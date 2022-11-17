import React from 'react'
import List from '../../components/list/List';
import Cards from '../../components/card/Cards';
import { Container, Row, Col, Alert, Form, Button } from 'react-bootstrap';
import "../add-jobs/AddJobs.css"
import AddForms from '../../components/addforms/AddForms';

const AddJobs = () => {
  return (
    <Container>
        <Row>
            <Col md={2}>
                <div className='sideNavs'>
                    <List />
                </div>
            </Col>
            <Col md={10} className="content-col">
                <AddForms />
            </Col>
        </Row>
    </Container>
  )
}

export default AddJobs