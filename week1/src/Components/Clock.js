import React from 'react'

function Clock(props) {

  return (
    <div>
        <center>
            <p>Current time is : {props.time}</p>
        </center>
    </div>
  )
}

export default Clock