import React from 'react';

const style = {
  backgroundColor: '#FFC0CB',
  font: 'inherit',
  border: '1px solid #ca2c92',
  padding: '8px',
  cursor: 'pointer'
}

const userinput = (props) => {
  return (
    <div>
      <input style={style} type="text" onChange={props.changed} value={props.uname}/>
    </div>
  )
}

export default userinput;