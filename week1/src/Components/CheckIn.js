import React from 'react'
import '../CSS/CheckedIn.css'

function CheckIn(props) {
    let fn = props.name
    let sn = props.surname
    // let number_of_likes = props.numberOfLikes
  return (

    <div className = 'main'>
        <div className = 'img-name'>
          <img className = 'img' src = {'/images/Vector.png'} alt = ' '/>
            <h4 className = "name">{fn} {sn}<br/>2 hours ago </h4>
            <h4 className = 'checkedIn'>Checked In</h4>
        </div>
        <div className = 'flex'>
          <div className = 'svg-heart' >
            <img className = 'heart' src = {'/images/Heart.png'} alt = ' '/>
            <p className = 'numberOfLikes'>12</p>
          </div>

            <div className = 'total-days'>
              <p className = 'total'>Total</p>
              <p className= 'days'>{props.days}</p>
            </div>
       <div>
          <div className="progressBar">
            <strong className="pBar" style={{ height: `${props.ch1}%` }}></strong>
          </div>
          <div className="progressBar">
            <strong className="pBar" style={{ height: `${props.ch2}%` }}></strong>
          </div>
          <div className="progressBar">
            <strong className="pBar" style={{ height: `${props.ch3}%` }}></strong>
          </div>
          <div className="progressBar">
            <strong className="pBar" style={{ height: `${props.ch4}%` }}></strong>
          </div>
          <div className="progressBar">
            <strong className="pBar" style={{ height: `${props.ch5}%` }}></strong>
          </div>
          <div className="progressBar">
            <strong className="pBar" style={{ height: `${props.ch6}%` }}></strong>
          </div>
          <div className="progressBar">
            <strong className="pBar" style={{ height: `${props.ch7}%` }}></strong>
          </div>
          <div className="progressBar">
            <strong className="pBar" style={ {height: `${props.ch8}%` }}></strong>
          </div>
          <div className="progressBar">
            <strong className="pBar" style={{ height: `${props.ch9}%` }}></strong>
          </div>
          <div className="progressBar">
            <strong className="pBar" style={{ height: `${props.ch10}%` }}></strong>
          </div>
        </div>
      </div>
      <hr/>
      <div className = 'comment'>
          <img className = 'joeImg' src = {'/images/Joe.png'} alt = ''/>
          <p className = 'commentBox'><strong>Joe Appleton</strong> 2 hours ago <br/> Well donde dude</p>
      </div>
      <div className = 'addComment'>
          <img className = 'imgTwo' src = {'/images/Vector.png'} alt = ' '/>
          <textarea className = 'addCommentArea' placeholder='Respond'></textarea>
      </div>
    </div>

  )
}

export default CheckIn