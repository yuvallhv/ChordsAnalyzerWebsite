import React, { useState, useEffect } from 'react'
import axios from 'axios'
import '../design/css/styles.css';
import { Bar } from 'react-chartjs-2';
import { Link, Route, Switch, BrowserRouter } from 'react-router-dom'

// var CanvasJSReact = require('./canvasjs.react');
// var CanvasJS = CanvasJSReact.CanvasJS;
// var CanvasJSChart = CanvasJSReact.CanvasJSChart;
// const ChordsAalyzerData = require('../BL/GetChordsAnalyzerData.js')


const FindingsComp = (props) => {
  const [isCategory, setIsCategory] = useState(true)
  const [data, setData] = useState([])
  const [artistUrl, setArtistUrl] = useState("")
  const [chords_weight, setChordsWeight] = useState([])  
  const [showUrl, setShowUrl] = useState(false)
  const [distributionOption, setDistributionOption] = useState("")

  let chords = chords_weight != undefined ? chords_weight.slice(0, 30).map((elem) => { return elem.chord }) : []
  let weight = chords_weight.slice(0, 30).map((elem) => { return elem.value })
  let state = {
    labels: chords,
    datasets: [
      {
        label: 'Chords weight',
        backgroundColor: 'rgba(75,192,192,1)',
        borderColor: 'rgba(0,0,0,1)',
        borderWidth: 2,
        data: weight
      }
    ]
  }


  useEffect(() => {
    async function getDataFromServer() {
      let serverAddress = window.location.hostname == "localhost" ? "http://localhost:5000/" : 'https://chords-analyzer-mini-proj.herokuapp.com/'
      let chords_weight = await axios.get(serverAddress + 'getInfoOfAllSongs')
      chords_weight = chords_weight.data
      setChordsWeight(chords_weight.result)
    }
    getDataFromServer()
  }, [])


  async function toogleCategoryOrArtist(e) {
    let serverAddress = window.location.hostname == "localhost" ? "http://localhost:5000/" : 'https://chords-analyzer-mini-proj.herokuapp.com/'
    let curr_data = []
    setDistributionOption(e.target.value)

    if (e.target.value == "category") {
      curr_data = await axios.get(serverAddress + 'getCategories')
    }
    else {
      if (e.target.value == "all_artists") {
        curr_data = await axios.get(serverAddress + 'getArtists')
      }
      else {
        curr_data = await axios.get(serverAddress + 'getFamousArtists')
      }
    }

    setData(curr_data.data.list_elements)
  }


  async function handleClick(chosenValue) {
    let serverAddress = window.location.hostname == "localhost" ? "http://localhost:5000/" : 'https://chords-analyzer-mini-proj.herokuapp.com/'
    let artist_url = await axios.get(serverAddress + 'getUrls')
    let chords_weight = []

    if (distributionOption == "category") {
      setShowUrl(false)
      chords_weight = await axios.post(serverAddress + 'getInfoOfSpecificCategory', { value: chosenValue })
    }
    else {
      setShowUrl(true)
        chords_weight = await axios.post(serverAddress + 'getInfoOfSpecificArtist', { value: chosenValue }) 
    }

    chords_weight = chords_weight.data
    setChordsWeight(chords_weight.result)
    setArtistUrl(chords_weight.artist_url)
  }


  const Url = () => (
    <div id="url" className="search-url">
      <a class="data-source-link" href={artistUrl}>To data source for this artist - Tab4U</a>
    </div>
  )


  console.log(data)
  let jsx_code = data.map((elem) => {
    return (
      <option value={elem} >
        {elem}
      </option>
    )
  })


  return (
    <React.Fragment>

      <div class="text-container">

      <div class="parameters-header-container container-fluid">
        <h1 class="page-header parameters-header">Create a Chords distribution Graph</h1>
      </div>


        <div class="parameters-container container-fluid">
          <h4>Choose the distribution parameters:</h4>

          <fieldset class="graph-parameters" id="group1" onChange={(e) => toogleCategoryOrArtist(e)}>
            {/* <div class="form-check form-options">
              <input class="form-check-input graph-parameter-checkbox" type="radio" value="category" name="group1" />Genres<br />
              <input class="form-check-input graph-parameter-checkbox" type="radio" value="artist" name="group1" />All artists<br />
              <input class="form-check-input graph-parameter-checkbox" type="radio" value="artist" name="group1" />Famous artists<br />
            </div> */}
            <div class="form-check form-check-inline">
              <input class="form-check-input graph-parameter-checkbox" type="radio" value="category" name="group1" />Genres<br />
            </div>
            <div class="form-check form-check-inline">
              <input class="form-check-input graph-parameter-checkbox" type="radio" value="famous_artists" name="group1" />Famous artists<br />
            </div>
            <div class="form-check form-check-inline">
              <input class="form-check-input graph-parameter-checkbox" type="radio" value="all_artists" name="group1" />All artists<br />
            </div>
          </fieldset>

          <br/>
          <h4>Choose specifics:</h4>

          <select class="graph-parameters form-control" name="categories_list" id="categories_list" hidden={false} onChange={(e) => handleClick(e.target.value)}>
            <option selected hidden >Select</option>
            {jsx_code}
          </select><br />

          <div>
            { showUrl? <Url /> : null }
          </div>

        </div>

        <Bar
          data={state}
          options={{
            title: {
              display: true,
              text: '',
              fontSize: 20
            },
            legend: {
              display: false,
              position: 'right'
            }
          }} />

      </div>

    </React.Fragment>
  )
}

export default FindingsComp