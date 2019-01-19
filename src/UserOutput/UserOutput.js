import React from 'react'
import './UserOutput.css';

const useroutput = (props) => {
  return (
    <div className="UserOutput">
      <p>Hello, this is {props.username}</p>
      <p>:D</p>
    </div>
  )
}

export default useroutput;