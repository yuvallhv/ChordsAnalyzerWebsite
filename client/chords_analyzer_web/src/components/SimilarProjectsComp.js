import React from 'react'
import '../design/css/styles.css';
import {Link, Route, Switch, BrowserRouter } from 'react-router-dom'

const SimilarProjectsComp  = (props) =>
{
    return(
        <React.Fragment>
            <img class="text-page-image saxophone-img" src={require("../design/images/piano drawing edit.png")} alt=""/>

            <div class="text-container">

            <h1 class="page-header">Similar Projects</h1>


            </div>

        </React.Fragment>


    ) 
}

export default SimilarProjectsComp