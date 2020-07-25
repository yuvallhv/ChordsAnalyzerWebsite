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
  //  const [category,setCategory] = useState("bla")
  const [chords_weight, setChordsWeight] = useState([])

  let chords = chords_weight != undefined ? chords_weight.slice(0, 30).map((elem) => { return elem.chord }) : []
  let weight = chords_weight.slice(0, 30).map((elem) => { return elem.value })
  console.log(chords_weight.result)
  console.log(chords)
  console.log(weight)
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
      console.log("im here")
      let chords_weight = await axios.get('http://localhost:5000/getInfoOfAllSongs')
      chords_weight = chords_weight.data
      setChordsWeight(chords_weight.result)
      // await setData(curr_data.data.list_elements)
      // console.log(data)
    }
    getDataFromServer()
  }, [])


  async function toogleCategoryOrArtist(e) {
    let curr_data = []
    console.log(e.target.value)
    if (e.target.value === "category") {
      setIsCategory(true)
      curr_data = await axios.get('http://localhost:5000/getCategories')
    }
    else {
      setIsCategory(false)
      curr_data = await axios.get('http://localhost:5000/getArtists')
    }
    setData(curr_data.data.list_elements)
  }


  async function handleClick(category) {
    let chords_weight = []
    if (isCategory) {
      chords_weight = await axios.post('http://localhost:5000/getInfoOfSpecificCategory', { value: category })
    }
    else {
      chords_weight = await axios.post('http://localhost:5000/getInfoOfSpecificArtist', { value: category })
    }
    chords_weight = chords_weight.data
    console.log(chords_weight)
    setChordsWeight(chords_weight.result)
  }


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
              <input class="form-check-input graph-parameter-checkbox" type="radio" value="category" name="group1" />genres<br />
            </div>
            <div class="form-check form-check-inline">
              <input class="form-check-input graph-parameter-checkbox" type="radio" value="artist" name="group1" />all artists<br />
            </div>

            <div class="form-check form-check-inline">
              <input class="form-check-input graph-parameter-checkbox" type="radio" value="artist" name="group1" />known artists<br />
            </div>
          </fieldset>

          <br/>
          <h4>Choose specifics:</h4>

          <select class="graph-parameters form-control" name="categories_list" id="categories_list" hidden={false} onChange={(e) => handleClick(e.target.value)}>
            <option selected hidden >Select</option>

            

            {jsx_code}
          </select><br />
          {/* <input type ="button" value="Get info" onClick={()=>handleClick()}/> */}
          {/* {category} */}

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