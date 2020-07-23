import React from 'react'
import axios from 'axios'
import '../design/css/styles.css';
import {Link, Route, Switch, BrowserRouter } from 'react-router-dom'

const AboutUsComp  = (props) =>
{
  function was_click(){
    axios.get('http://localhost:5000/').then((data)=>{console.log(data)})
  }
    return(
        <React.Fragment>

<img class="text-page-image saxophone-img" src={require("../design/images/Jazz Guitar Drawing edit.png")} alt=""/>

<div class="text-container">

  <h1 class="page-header">About Us</h1>
  <p>
    We are Chaim and Yuval.<br/>
    Both of us pursuing a bachelor's degree in Computer Science in Ben-Gurion University.
  </p>

  <div class="about-us-single-container">
      <img class="about-us-img" src={require("../design/images/ChaimPic.jpg")}alt=""/>
      <h3 class="about-us-name">Chaim Hadad</h3>
  </div>

  <div class="about-us-single-container">
      <img class="about-us-img" src={require("../design/images/YuvalPic.jpg")}  alt=""/>
      <h3 class="about-us-name">Yuval Lahav</h3>
  </div>

  <br/>
  <br/>



</div>
</React.Fragment>


    ) 
}

export default AboutUsComp