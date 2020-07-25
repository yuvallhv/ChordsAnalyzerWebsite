import React from 'react'
import '../design/css/styles.css';
import {Link, Route, Switch, BrowserRouter } from 'react-router-dom'

const MainPageComp  = (props) =>
{
    return(
        <React.Fragment>
    <div class="header-padding-container container-fluid">

    </div>
    <section class="jumbotron"></section>
    <div class="header-text-container container-fluid">
      <h1 class="header-text">Chords Analyzer</h1>
      <p class="header-text-sub lead">Created by</p>
      <p class="header-text-sub lead">Chaim Hadad & Yuval Lahav</p>
    </div>

    <main role="main">

      <div class="container marketing">
        <div class="row">
          <div class="col-lg-4">
            <img class="circle-image" src={require("../design/images/chord1.png")} alt=""></img>
            <h2>Our Findings</h2>
            <p>Donec sed odio dui. Etiam porta sem malesuada magna mollis euismod. Nullam id dolor id nibh ultricies vehicula ut id elit.</p>
            <p>
              <Link to="/findings">
                <a class="btn btn-secondary" href="OurFindings" role="button">Read more &raquo;</a>
              </Link>
            </p>
          </div>
          <div class="col-lg-4">
            <img class="circle-image" src={require("../design/images/chord2.png")} alt=""/>
            <h2>About the Project</h2>
            <p>
              This project was done as part of Digital Humanities course in Ben Gurion University.<br/>
              Read about the topic, goal and process.
            </p>
            <p>
              <Link to="/about_project">
                <a class="btn btn-secondary" href="AboutTheProject" role="button">Read more &raquo;</a>
              </Link>
            </p>
          </div>
          <div class="col-lg-4">
            <img class="circle-image" src={require("../design/images/chord3.png")} alt=""/>
            <h2>About Us</h2>
            <p>We are Chaim and Yuval.</p>
            <p>
              <Link to="/about_us">
                <a class="btn btn-secondary" href="AboutUs" role="button">Read more &raquo;</a>
              </Link>
            </p>
          </div>
        </div>
      </div>

    </main>
    </React.Fragment>) 
}

export default MainPageComp