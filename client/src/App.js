import React from 'react';
import axios from 'axios';
import logo from './logo.svg';
import {Link, Route, Switch, BrowserRouter } from 'react-router-dom'
import './design/css/styles.css';
import './App.css'
import NavComp from './components/NavComp'
import FooterComp from './components/FooterComp'
import MainPageComp from './components/MainPageComp'
import AboutUsComp from './components/AboutUsComp'
import AboutProjectComp from './components/AboutProjectComp'
import DataScheme from './components/DataScheme'
import SimilarProjectsComp from './components/SimilarProjectsComp'
import FindingsComp from './components/FindingsComp'
import TryYourselfComp from './components/TryYourselfComp'

function App() {
  function was_click(){
    axios.get('http://localhost:5000/').then((data)=>{console.log(data)})
  }
  return (

    <BrowserRouter >
      <div class="content">
    <NavComp/>
   
    <Switch>
    <Route path="/home" component={MainPageComp} />  
    <Route path="/about_us" component={AboutUsComp} />  
    <Route path="/DataScheme" component={DataScheme} />  
    <Route path="/about_project" component={AboutProjectComp} />  
    <Route path="/similar_projects" component={SimilarProjectsComp} />  
    <Route path="/findings" component={FindingsComp} />  
    <Route path="/try_yourself" component={TryYourselfComp} />  
    <Route exact path="/" component={MainPageComp} />      

     </Switch>
  {/* <MainPageComp/> */}
  <div class="push"></div>
  </div>
  <FooterComp/>
    </BrowserRouter >

  );
}

export default App;
