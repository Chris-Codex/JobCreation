import React from 'react'
import loading from "../../assets/loading.gif"

const Loading = () => {
  return (
    <>
        <div style={{textAlign: "center", marginTop: 270}}>
            <img src={loading} alt="name" style={{width: 70, height: 70}} />
        </div>
    </>
  )
}

export default Loading