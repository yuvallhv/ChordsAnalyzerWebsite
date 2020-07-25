import React from 'react'
import '../design/css/styles.css';
import { Link, Route, Switch, BrowserRouter } from 'react-router-dom'

const AboutProjectComp = (props) => {
  return (
    <React.Fragment>
      <img class="text-page-image bird-img" src={require("../design/images/bird.png")} alt="sdfsdfsdf" />

      <div class="text-container">

        <h1 class="page-header">About the project</h1>
        <p>
          This project was done as part of Digital Humanities course in Ben Gurion University.<br />
    We chose to investigate songs through the aspect of chord since this is an interesting and unique way to ask questions about songs.
    </p>
        <br />
        <hr />
        <br />
        <br />

        <h2>About the Topic</h2>
        <p>We believe the best way to express the chords importance is to cites what people have to say about them, we found the following interesting sayings:</p>
        <div class="quotations-container">
          <p>“Music is about expressing feelings to others. Chords help us understand or make others understanding about feelings.”</p>
          <p>"You make a habit and take the feel of the right chords then you will realize the importance of chords.”</p>
          <p>“Chords allow flavors of music.”</p>
        </div>
        <p>From these (and many more) we can understand how important chords are and why they deserve their own project.</p>
        <br />
        <hr />
        <br />
        <br />

        <h2>Inspiration</h2>
        <p>
          The following YouTube video is of a comedy rock band named “Axis of Awesome” that claims that all the greatest songs hits use the same 4 chords.
        </p>
        <iframe width="420" height="315"
          src="https://www.youtube.com/watch?v=5pidokakU4I">
        </iframe>
        <br />
        <hr />
        <br />
        <br />

        <h2>Project's Goal</h2>
        <p>
          First, we wanted to check if the variety and repetition of chords differ from artists to artist or by songs genres.<br />
          After establishing that there is difference we wanted to create a visual way to present that information. </p>
        <br />
        <hr />
        <br />
        <br />

        <h2>Project Process</h2>
        <p>Our work on this project is divided to several steps.</p>
        <br />

        <h3>Step 1: Data Collection</h3>
        <p>
          The first challenge was to find data to work with and decide how it should be saved.<br />
    We aimed to get semi-structured data as json files.
   </p>
        <ul>
          <li><span class="li-header">Data source</span> - we found a popular website called <a class="footer-link" href="https://www.tab4u.com/">Tab4u</a> that holds an impressive amount of songs with their chords, words and some information about the artists.</li>
          <li><span class="li-header">Data scraping</span> - we created a web scraper in Python using Selenium library that collected for us the data we needed.</li>
          <li><span class="li-header">Initial Data schema</span> - we scraped data as json files, each one represents an artist. <br />
      Our main focus was chords but we didn’t want to lose any data and since it wasn’t expensive in terms of space, we created a data schema which holds most of the information about the songs including the chords, lyrics, tabs and information about the artist.</li>
        </ul>
        <br />

        <h3>Step 2: Data Processing</h3>
        <p>The data processing had several goals.</p>
        <ul>
          <li><span class="li-header">Clean the data</span> - to make the scraping process more efficient and fast, we had to scrape some of the data “as is” from the website html.</li>
          <li><span class="li-header">Get general information</span> - for the analysis of the data we needed to go over all the data and get general information. <br />
      For example: all the possible categories for songs.</li>
          <li><span class="li-header">Fix mistakes</span> - since the data on the website is not perfect and the scraping process also is prone for errors, we tried to fix some of the major mistakes we found. <br />
      For example: fixing out of place chorus names.</li>
        </ul>
        <p>
          <Link to="/DataScheme">
          <a class="btn btn-secondary" href="DataSchema" role="button">To view the final data schema &raquo;</a>
          </Link>
          </p>
        <br />

        <h3>Step 3: Data Analysis</h3>
        <p>
          To enable flexibility and speed with the way we analyze the data, we decided to use a database.<br />
    Since we chose to save the data as json files the natural choice was MongoDB database and using Mongoose to query the data.
  </p>
        <br />

        <h3>Step 4: Results visualization</h3>
        <p>
          To present the project we created a website hosted on Heroku cloud application platform.<br />
    This required us to use (and learn) different web technologies such as HTML, CSS and React.<br />
    Using a web server enabled us to integrate MongoDB queries instead of showing static results.
  </p>
        <br />
        <hr />
        <br />
        <br />

        <h2>Technologies Summary</h2>
        <p>We used various technologies through the project.</p>
        <ul>
          <li><span class="li-header">Data Collection</span> - Python, Selenium</li>
          <li><span class="li-header">Data Processing</span> - Python </li>
          <li><span class="li-header">Data Analysis</span> - MongoDB, Mongoose</li>
          <li><span class="li-header">Results visualization</span> - HTML, CSS, Node.js, React</li>
        </ul>
        <br />

      </div>

    </React.Fragment>


  )
}

export default AboutProjectComp