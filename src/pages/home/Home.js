import React, { useState, useEffect } from 'react'
import "../home/Home.css"
import { Col, Container, Row } from 'react-bootstrap'
import Cards from '../../components/card/Cards'
import List from './../../components/list/List';
import Navibar from './../../components/navibar/Navibar';
import { auth } from '../../firebase';
import { useSelector, useDispatch } from 'react-redux';
import { loginUser } from '../../features/user/userSlice';
import Loading from './../../components/loading/Loading';



const Home = () => {
    const dispatch = useDispatch()
    const [displayName, setDisplayName] = useState('')
    const [uid, setUid] = useState("")
    const [isLoading, setisLoading] = useState(true)

    useEffect(() => {
        auth.onAuthStateChanged((getUser) => {
            const user = getUser
            const userID = getUser?.uid
            setUid(userID)
            setDisplayName(user.displayName)
            dispatch(loginUser(user))
        })
    }, [])

  return (
    <>
        <Navibar displayName={displayName} uid={uid} />
        <Container>
            <Row>
                <Col md={2}>
                    <div className='sideNavs'>
                        <List />
                    </div>
                </Col>
               
                    <Col md={10} className="content-col">
                        {isLoading && <Cards />}
                        
                    </Col>

            </Row>
        </Container>
    </>
  )
}

export default Home