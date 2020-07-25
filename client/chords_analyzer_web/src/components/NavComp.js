import React from 'react'
import '../design/css/styles.css';
import {Link, Route, Switch, BrowserRouter } from 'react-router-dom'

const NavComp  = (props) =>
{
    return(

    <header>
      <nav class="navbar navbar-expand-md navbar-dark fixed-top bg-dark">
        <div class="collapse navbar-collapse" id="navbarCollapse">
          <ul class="navbar-nav mr-auto">
            <li class="nav-item active">
                <Link to="/home">
              <a class="nav-link" href=".">Home <span class="sr-only">(current)</span></a>
              </Link>
            </li>

            <li class="nav-item">
            <Link to="/about_project">
              <a class="nav-link" href="AboutTheProject">About the project</a>
              </Link>
            </li>

            <li class="nav-item">
            <Link to="/findings">
              <a class="nav-link" href="OurFindings">Our findings</a>
              </Link>
            </li>

            <li class="nav-item">
            <Link to="/DataScheme">
              <a class="nav-link" href="DataSchema">Our data schema</a>
              </Link>
            </li>

            <li class="nav-item">
            <Link to="/similar_projects">
              <a class="nav-link" href="SimilarProjects">Similar Projects</a>
              </Link>
            </li>

            <li class="nav-item">
            <Link to="/about_us">
              <a class="nav-link" href="AboutUs">About us</a>
              </Link>
            </li>

          </ul>
        </div>
      </nav>
      <Switch>

      </Switch>
    </header>

    ) 
}

export default NavComp