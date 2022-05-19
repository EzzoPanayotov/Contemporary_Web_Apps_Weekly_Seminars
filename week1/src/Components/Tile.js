import React from 'react'
import '../CSS/Tile.css'

function Tile(props) {
  return (
      <center>
        <div className = 'tile'>
            {props.children}
        </div>
    </center>

  );
}

export default Tile