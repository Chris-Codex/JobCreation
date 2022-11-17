import React from 'react'
import { Button, Container } from 'react-bootstrap'
import "../errorpage/ErrorPage.css"
import error from "../../assets/error.png"
import { Link } from 'react-router-dom';

const ErrorPage = () => {
  return (
    <Container className='wrappers'>
        <img src={error} alt="name" />
        <Button variant="primary"><Link to="/" className='links'>Back to Login</Link></Button>
    </Container>
  )
}

export default ErrorPage