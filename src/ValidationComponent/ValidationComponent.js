import React from 'react'


const validationcomponent =  (props) => {
    
    let long = (<p>Text too short</p>);

    if (props.length > 5){
        long = (<p>Text long enough</p>)
    }

    return (
    <div>
      {long}
    </div>
  )
}

export default validationcomponent;