import React from 'react'
import HorizontalBar from '../Components/HorizontalBar'
import ProgressBarComponent from '../Components/ProgressBarComponent'
import Tile from '../Components/Tile'
import Home from '../Components/Home'
import CheckIn from '../Components/CheckIn'
import Clock from '../Components/Clock'


let ch1 = Math.floor(Math.random() * 100)
let ch2 = Math.floor(Math.random() * 100)
let ch3 = Math.floor(Math.random() * 100)
let ch4 = Math.floor(Math.random() * 100)
let ch5 = Math.floor(Math.random() * 100)
let ch6 = Math.floor(Math.random() * 100)
let ch7 = Math.floor(Math.random() * 100)
let ch8 = Math.floor(Math.random() * 100)
let ch9 = Math.floor(Math.random() * 100)
let ch10 = Math.floor(Math.random() * 100)

let image =  <img src = {'./images/owenWilson.png'} alt = ' ' width = {100} height = {100}
style = {{borderRadius: 100}}/>


function Index() {
  return (
      <div>
        <Tile>
            <Home name = 'Owen' surname = 'Wilson' image = {image}/>
        </Tile>
        <Tile >
            <ProgressBarComponent days = '10' ch1 = {ch1} ch2 = {ch2} ch3 = {ch3} ch4 = {ch4} ch5 = {ch5}
            ch6 = {ch6} ch7 = {ch7} ch8 = {ch8} ch9 = {ch9} ch10 = {ch10}/>
            <HorizontalBar/>
        </Tile>

        <Tile>
            <Clock time={new Date().toLocaleTimeString()}/>
        </Tile>

        <Tile>
            <CheckIn/>
        </Tile>
      </div>
  )
}

export default Index