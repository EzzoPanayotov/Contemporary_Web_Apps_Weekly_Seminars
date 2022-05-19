import React from "react";
import '../CSS/ProgressBar.css'

const ProgressBarComponent = (props) => {
  return (
    <center>
      <h1 className = 'daysCompleted'>{props.days} Days Completed</h1>
      <div className = "progressBar">
        <strong className = "pBar" style={{ height: `${props.ch1}%` }}></strong>
      </div>
      <div className = "progressBar">
        <strong className = "pBar" style={{ height: `${props.ch2}%` }}></strong>
      </div>
      <div className = "progressBar">
        <strong className = "pBar" style={{ height: `${props.ch3}%` }}></strong>
      </div>
      <div className = "progressBar">
        <strong className = "pBar" style={{ height: `${props.ch4}%` }}></strong>
      </div>
      <div className = "progressBar">
        <strong className = "pBar" style={{ height: `${props.ch5}%` }}></strong>
      </div>
      <div className = "progressBar">
        <strong className = "pBar" style={{ height: `${props.ch6}%` }}></strong>
      </div>
      <div className = "progressBar">
        <strong className = "pBar" style={{ height: `${props.ch7}%` }}></strong>
      </div>
      <div className = "progressBar">
        <strong className = "pBar" style={ {height: `${props.ch8}%` }}></strong>
      </div>
      <div className = "progressBar">
        <strong className = "pBar" style={{ height: `${props.ch9}%` }}></strong>
      </div>
      <div className = "progressBar">
        <strong className = "pBar" style={{ height: `${props.ch10}%` }}></strong>
      </div>

      {props.children}
    </center>
  );
};

export default ProgressBarComponent;