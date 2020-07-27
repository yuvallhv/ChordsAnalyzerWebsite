import React, { useState, useEffect } from 'react'
import '../design/css/styles.css';

const FindingsComp = (props) => {
  

    return (
      <React.Fragment>
  
        <div class="text-container">
  
          <h1 class="page-header">Our Findings</h1>

          <p>In this project, we examined the data from two main aspect.</p>

          <br></br>
          <h2>Chords Weights</h2>
          <p>
            By referring to a chord weight, we mean on how many characters of the song’s lyrics the chord is supposed to be played. <br></br>
            As we anticipated, we discovered that there are a few very common chords that take a high percentage of the usage of chords. 
          </p>
          <p>We gathered some interesting distributions from this aspect: </p>

          <h4>Very diverse artist (compare to others) is:</h4>
          <div class="graph-image-container">
            <h5>הראל סקעת</h5> 
            <img class="graph-image" src={require("../design/images/Harel Skat2.png")} alt="Can't display image, something went wrong..." />
            <br></br>
          </div>
          
          <h4>Folk Songs are very monotonic:</h4>
          <div class="graph-image-container">
            <h5>עממי</h5> 
            <img class="graph-image" src={require("../design/images/Ammamy.png")} alt="Can't display image, something went wrong..." />
            <br></br>
          </div>

          <h4>mediocre in their diversity are-</h4>
          
          <div class="graph-image-container">
            <h5>גידי גוב</h5>
            <img class="graph-image" src={require("../design/images/Aviv Geffen.png")} alt="Can't display image, something went wrong..." />
            <br></br>
          </div>

          
          <div class="graph-image-container">
            <h5>אביב גפן</h5>
            <img class="graph-image" src={require("../design/images/Gidi Gov.png")} alt="Can't display image, something went wrong..." />
            <br></br>
          </div>

          <br></br>
          <br></br>
          <h2>Chords Distribution by Groups</h2>
          <p>
            In the music world, there is some division of chords to groups and each group supposed to have a different effect on the song. <br></br>
            After consulting with musicians and music blogs we decided on the following division:
          </p>
          <ul>
            <li><span class="li-header">Major</span> - happy and simple - contains "M", "Ma", "Maj", “ma”, “maj”</li>
            <li><span class="li-header">Minor</span> - sad or serious - contains "m", "min"</li>
            <li><span class="li-header">Diminished </span> - tense and unpleasant - contains "dim"</li>
            <li><span class="li-header">Major Seventh </span> - thoughtful, soft - contains Major symbols and "7"</li>
            <li><span class="li-header">Minor Seventh</span> - moody, or contemplative - contains Minor symbols and "7"</li>
            <li><span class="li-header">Dominant Seventh</span> - strong and restless - contains "7" (without Major or Minor symbols), "alt", "dom"</li>
            <li><span class="li-header">Suspended </span> - bright and nervous - contains "sus"</li>
            <li><span class="li-header">Augmented </span> - anxious and suspenseful - contains "+", "aug"</li>
            <li><span class="li-header">Other </span></li>
          </ul>

          <p>
            However, we were surprised to discover that in Hebrew songs from our data source do not comply so well with this theory. <br></br>
            Most of the songs are using mainly both chords from the Major and Minor groups, with no relation to their genre. <br></br>
            The only genre that we saw some relation to this theory is Salsa:
          </p>
          <div class="graph-image-container">
          <h5>סלסה</h5> 
            <img class="graph-image" src={require("../design/images/Salsa.png")} alt="Can't display image, something went wrong..." />
            <br></br>
          </div>

          <h4>Other interesting genres</h4>
          <div class="graph-image-container">
            <h5>רוק</h5>
            <img class="graph-image" src={require("../design/images/Rock.png")} alt="Can't display image, something went wrong..." />
            <br></br>
          </div>

          
          <div class="graph-image-container">
            <h5>מזרחית</h5> 
            <img class="graph-image" src={require("../design/images/Mizrahit.png")} alt="Can't display image, something went wrong..." />
            <br></br>
          </div>

        </div>
  
      </React.Fragment>
    )
  }
  
  export default FindingsComp

