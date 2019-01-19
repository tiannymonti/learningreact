import React from 'react'

const style =  {
    display: 'inline-block',
    font: 'inherit',
    border: '1px solid black',
    padding: '16px',
    margin: '16px',
    cursor: 'pointer',
    textAlign: 'center'
};

const charcomponent = (props) => {
  return (
    <div style={style}>
      <p onClick={props.click}>{props.value}</p>
    </div>
  )
}

export default charcomponent;