import React, { useContext } from 'react'
import { Container } from 'react-bootstrap';
import Navibar from '../../components/navibar/Navibar';
import "../profile/Profile.css"
import Rows from './../../components/profile/rows';
import { contextUser } from './../../context/Context';

const Profile = () => {
  const {user} = useContext(contextUser)
  const username = user?.displayName
  const uid = user?.uid

  return (
    <>
      <Navibar displayName={username} uid={uid} />
      <Container>
          <Rows />
      </Container>
    </>
  )
}

export default Profile