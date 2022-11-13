import React from 'react'
import "../navibar/Navibar.css"
import { FaAccessibleIcon } from "react-icons/fa"
import { Container, Navbar } from 'react-bootstrap'

const Navibar = () => {
  return (
    <section>
        <Navbar bg="dark" variant="dark">
            <Container>
                <div className='navigation'>
                    <div className='nav-1'>
                        <FaAccessibleIcon size={30} />&nbsp;&nbsp;
                        <h6>Job<span>Target</span></h6>
                    </div>
                    <div className='login'>
                        <h6>Welcome: Christian Iheacho</h6>
                        <h6>Login</h6>
                    </div>
                </div>
            </Container>
       </Navbar>
    </section>
  )
}

export default Navibar