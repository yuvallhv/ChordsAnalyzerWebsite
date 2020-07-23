import React,{useState,useEffect} from 'react'
import axios from 'axios'
import '../design/css/styles.css';
import {Bar} from 'react-chartjs-2';

import {Link, Route, Switch, BrowserRouter } from 'react-router-dom'
// var CanvasJSReact = require('./canvasjs.react');
// var CanvasJS = CanvasJSReact.CanvasJS;
// var CanvasJSChart = CanvasJSReact.CanvasJSChart;
// const ChordsAalyzerData = require('../BL/GetChordsAnalyzerData.js')
const FindingsComp  = (props) =>
{
 const [isCategory,setIsCategory] = useState(true)
 const [data, setData] = useState([])
//  const [category,setCategory] = useState("bla")
 const [chords_weight,setChordsWeight] =  useState([])

  let chords = chords_weight != undefined ?  chords_weight.slice(0,30).map((elem)=>{return elem.chord}) : []
  let weight = chords_weight.slice(0,30).map((elem)=>{return elem.value})
  console.log(chords_weight.result)
  console.log(chords)
  console.log(weight)
let state = {
  labels:chords,
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


  

 useEffect(()=>{
    async function getDataFromServer(){
      console.log("im here")
      let chords_weight =await axios.get('http://localhost:5000/getInfoOfAllSongs')
          chords_weight = chords_weight.data
    setChordsWeight(chords_weight.result)
      // await setData(curr_data.data.list_elements)
      // console.log(data)


    }
    getDataFromServer()
 },[])
 async function toogleCategoryOrArtist(e){
   let curr_data=[]
   console.log(e.target.value)
   if(e.target.value ==="category"){
      setIsCategory(true)
      curr_data =await axios.get('http://localhost:5000/getCategories')
   }
   else{
      setIsCategory(false)
      curr_data =await axios.get('http://localhost:5000/getArtists')

   }
         setData(curr_data.data.list_elements)

 }
  async function handleClick(category){
    let chords_weight =[]
    if(isCategory){
      chords_weight =await axios.post('http://localhost:5000/getInfoOfSpecificCategory',{value:category})
    }
    else{
      chords_weight =await axios.post('http://localhost:5000/getInfoOfSpecificArtist',{value:category})
    }
    chords_weight = chords_weight.data
    console.log(chords_weight)
    setChordsWeight(chords_weight.result)
  }
  let jsx_code  = data.map((elem)=>{return(
      <option value={elem} >
        {elem}
      </option>
  )
  }) 
  
    return(
        <React.Fragment>
        <h2>Choose your info</h2>
        <fieldset id="group1" onChange={(e)=>toogleCategoryOrArtist(e)}>
            BY GENRES:<input type="radio" value="category" name="group1" /><br/>
            BY ARTIST:<input type="radio" value="artist" name="group1" /><br/>
        </fieldset>
        <select name="categories_list" id="categories_list" hidden={false} onChange={(e)=>handleClick(e.target.value)}>
        <option  selected hidden >Choose here</option>
         {jsx_code}
        </select><br/>
        {/* <input type ="button" value="Get info" onClick={()=>handleClick()}/> */}
        {/* {category} */}


<Bar 
          data={state}
          options={{
            title:{
              display:true,
              text:'Chords weight graph',
              fontSize:20
            },
            legend:{
              display:false,
              position:'right'
            }
          }}
        />

        </React.Fragment>


    ) 
}

export default FindingsComp