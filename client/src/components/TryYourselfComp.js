import React, { useState, useEffect } from 'react'
import axios from 'axios'
import '../design/css/styles.css';
import { Bar } from 'react-chartjs-2';
import { Link, Route, Switch, BrowserRouter } from 'react-router-dom'

// import ReactDOM from 'react-dom';
// import { DropDownList } from '@progress/kendo-react-dropdowns';
// import { filterBy } from '@progress/kendo-data-query';;

// var CanvasJSReact = require('./canvasjs.react');
// var CanvasJS = CanvasJSReact.CanvasJS;
// var CanvasJSChart = CanvasJSReact.CanvasJSChart;
// const ChordsAalyzerData = require('../BL/GetChordsAnalyzerData.js')


const TryYourselfComp = (props) => {
  const [isCategory, setIsCategory] = useState(true)
  const [data, setData] = useState([])
  const [artistUrl, setArtistUrl] = useState("")
  const [parameterName, setParameterName] = useState("")
  const [chords_weight, setChordsWeight] = useState([]) 
  const [chords_weight_by_group, setChordsWeightByGroup] = useState([])  
  const [showUrl, setShowUrl] = useState(false)
  const [distributionOption, setDistributionOption] = useState("")

  let chords = chords_weight != undefined ? chords_weight.slice(0, 30).map((elem) => { return elem.chord }) : []
  let weight = chords_weight.slice(0, 30).map((elem) => { return elem.value })
  let state_chords_weight = {
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

  let chords_groups = chords_weight_by_group != undefined ? chords_weight_by_group.slice(0, 30).map((elem) => { return elem.chord }) : []
  let groups_weight = chords_weight_by_group.slice(0, 30).map((elem) => { return elem.value })
  let state_chords_groups_weights = {
    labels: chords_groups,
    datasets: [
      {
        label: 'Chords groups weight',
        backgroundColor: 'rgba(75,192,192,1)',
        borderColor: 'rgba(0,0,0,1)',
        borderWidth: 2,
        data: groups_weight
      }
    ]
  }


  useEffect(() => {
    async function getDataFromServer() {
      let serverAddress = window.location.hostname == "localhost" ? "http://localhost:5000/" : 'https://chords-analyzer-mini-proj.herokuapp.com/'
      
      let chords_weight = await axios.get(serverAddress + 'getInfoOfAllSongs')
      let chords_weight_by_group = await axios.get(serverAddress + 'getInfoOfAllSongsByGroups')

      chords_weight_by_group = chords_weight_by_group.data
      chords_weight = chords_weight.data

      setChordsWeight(chords_weight.result)
      setChordsWeightByGroup(chords_weight_by_group.result)
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
    let chords_weight_by_group = []

    if (distributionOption == "category") {
      setShowUrl(false)
      setParameterName("for genre: " + chosenValue)
      chords_weight = await axios.post(serverAddress + 'getInfoOfSpecificCategory', { value: chosenValue })
      chords_weight_by_group = await axios.post(serverAddress + 'getInfoOfSpecificCategoryByGroups', { value: chosenValue })
    }
    else {
      setShowUrl(true)
      setParameterName("for artist: " + chosenValue)
      chords_weight = await axios.post(serverAddress + 'getInfoOfSpecificArtist', { value: chosenValue })
      chords_weight_by_group = await axios.post(serverAddress + 'getInfoOfSpecificArtistByGroups', { value: chosenValue }) 
    }

    chords_weight = chords_weight.data
    chords_weight_by_group = chords_weight_by_group.data

    setChordsWeight(chords_weight.result)
    setChordsWeightByGroup(chords_weight_by_group.result)
    setArtistUrl(chords_weight.artist_url)
  }


  const Url = () => (
    <div id="url" className="search-url">
      <a class="data-source-link" href={artistUrl}>To data source for this artist - Tab4U</a>
    </div>
  )

  
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

        <div class="chords-graphs-container">

          <br></br>
          <h3>Chords distribution by groups {parameterName}</h3>
          <Bar
            data={state_chords_groups_weights}
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

          <br></br>
          <br></br>
          <h3>Chords distribution by weight {parameterName}</h3>
          <Bar
            data={state_chords_weight}
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

      </div>

    </React.Fragment>
  )
}

export default TryYourselfComp