import React, { useState, useEffect } from 'react'
import '../design/css/styles.css';
import {Link, Route, Switch, BrowserRouter } from 'react-router-dom'

const DataScheme  = (props) =>
{
  useEffect(() => {
    window.scrollTo(0, 0)
  });

    return(
        <React.Fragment>
            <div class="text-container">

<h1 class="page-header">Data Schema</h1>
<p>
  The data is organized in json files, as semi-structured data. <br/>
  Each json file represent one artists and his songs.
</p>
<p>This is the schema for a single artist json file:</p>
<br/>


<p class="json-data json-curly-bracket json-curly-bracket-open">{"{"}</p>

<p class="json-data json-key-value">
  <span class="json-data json-key">&emsp; "Artist data":</span>
</p>
<p class="json-data json-curly-bracket json-curly-bracket-open">&emsp;{"{"}</p>

<p class="json-data json-key-value">
  <span class="json-data json-key">&emsp; &emsp; "Artist name":</span>
  <span class="json-data json-value"> <span class="json-string">String</span>,</span>
</p>

<p class="json-data json-key-value">
  <span class="json-data json-key">&emsp; &emsp; "Artist bio":</span>
  <span class="json-data json-value"> Artist Bio Object,</span>
  <span class="json-data json-explain"> (differ according to the date source information)</span>
</p>

<p class="json-data json-key-value">
  <span class="json-data json-key">&emsp; &emsp; "Albums cnt":</span>
  <span class="json-data json-value"> <span class="json-int">Int</span>,</span>
</p>

<p class="json-data json-key-value">
  <span class="json-data json-key">&emsp; &emsp; "Songs cnt":</span>
  <span class="json-data json-value"> <span class="json-int">Int</span>,</span>
</p>

<p class="json-data json-key-value">
  <span class="json-data json-key">&emsp; &emsp; "Average rank"</span>
  <span class="json-data json-value"> <span class="json-float">Float</span></span>
</p>

<p class="json-data json-curly-bracket json-curly-bracket-close">&emsp; },</p>


<p class="json-data json-key-value">
  <span class="json-data json-key">&emsp; "Songs data":</span>
</p>

<p class="json-data json-arr-bracket json-arr-bracket-open">&emsp; [</p>
<p class="json-data json-curly-bracket json-curly-bracket-open">&emsp; &emsp; {"{"}</p>

<p class="json-data json-key-value">
  <span class="json-data json-key">&emsp; &emsp; &emsp; "Song name":</span>
  <span class="json-data json-value"> <span class="json-string">String</span>,</span>
</p>

<p class="json-data json-key-value">
  <span class="json-data json-key">&emsp; &emsp; &emsp; "Ranking":</span>
  <span class="json-data json-value"> <span class="json-float">Float</span>,</span>
</p>

<p class="json-data json-key-value">
  <span class="json-data json-key">&emsp; &emsp; &emsp; "Composer":</span>
  <span class="json-data json-value"> <span class="json-string">String</span>,</span>
</p>

<p class="json-data json-key-value">
  <span class="json-data json-key">&emsp; &emsp; &emsp; "Author":</span>
  <span class="json-data json-value"> <span class="json-string">String</span>,</span>
</p>

<p class="json-data json-key-value">
  <span class="json-data json-key">&emsp; &emsp; &emsp; "Categories":</span>
</p>
<p class="json-data json-arr-bracket json-arr-bracket-open">&emsp; &emsp; &emsp; [</p>
<p class="json-data json-key-value">
  <span class="json-data json-value">&emsp; &emsp; &emsp; &emsp; <span class="json-string">String</span>,</span>
</p>
<p class="json-data json-arr-next">&emsp; &emsp; &emsp; &emsp; ...</p>
<p class="json-data json-arr-bracket json-arr-bracket-close">&emsp; &emsp; &emsp; ],</p>

<p class="json-data json-key-value">
  <span class="json-data json-key">&emsp; &emsp; &emsp; "Collaborators":</span>
  <span class="json-data json-value"> <span class="json-string">String</span>,</span>
</p>

<p class="json-data json-key-value">
  <span class="json-data json-key">&emsp; &emsp; &emsp; "Paragraphs":</span>
</p>
<p class="json-data json-arr-bracket json-arr-bracket-open">&emsp; &emsp; &emsp; [</p>
<p class="json-data json-curly-bracket json-curly-bracket-open">&emsp; &emsp; &emsp; &emsp;{"{"}</p>

<p class="json-data json-key-value">
  <span class="json-data json-key">&emsp; &emsp; &emsp; &emsp; &emsp; "Type":</span>
  <span class="json-data json-value"> <span class="json-string">String</span>, </span>
  <span class="json-data json-explain"> ("unique" / "definition" / "repetitive")</span>
</p>

<p class="json-data json-key-value">
  <span class="json-data json-key">&emsp; &emsp; &emsp; &emsp; &emsp; "Definition name":</span>
  <span class="json-data json-value"> <span class="json-string">String</span>,</span>
  <span class="json-data json-explain"> (optional, only for definition type)</span>
</p>

<p class="json-data json-key-value">
  <span class="json-data json-key">&emsp; &emsp; &emsp; &emsp; &emsp; "Chords lines":</span>
</p>
<p class="json-data json-arr-bracket json-arr-bracket-open">&emsp; &emsp; &emsp; &emsp; &emsp; [</p>
<p class="json-data json-key-value">
  <span class="json-data json-value">&emsp; &emsp; &emsp; &emsp; &emsp; &emsp; <span class="json-string">String</span>,</span>
</p>
<p class="json-data json-arr-next">&emsp; &emsp; &emsp; &emsp; &emsp; &emsp; ...</p>
<p class="json-data json-arr-bracket json-arr-bracket-close">&emsp; &emsp; &emsp; &emsp; &emsp; ]</p>

<p class="json-data json-key-value">
  <span class="json-data json-key">&emsp; &emsp; &emsp; &emsp; &emsp; "Tabs lines":</span>
</p>
<p class="json-data json-arr-bracket json-arr-bracket-open">&emsp; &emsp; &emsp; &emsp; &emsp; [</p>
<p class="json-data json-key-value">
  <span class="json-data json-value">&emsp; &emsp; &emsp; &emsp; &emsp; &emsp; <span class="json-string">String</span>,</span>
</p>
<p class="json-data json-arr-next">&emsp; &emsp; &emsp; &emsp; &emsp; &emsp; ...</p>
<p class="json-data json-arr-bracket json-arr-bracket-close">&emsp; &emsp; &emsp; &emsp; &emsp; ]</p>

<p class="json-data json-key-value">
  <span class="json-data json-key">&emsp; &emsp; &emsp; &emsp; &emsp; "Lyrics lines":</span>
</p>
<p class="json-data json-arr-bracket json-arr-bracket-open">&emsp; &emsp; &emsp; &emsp; &emsp; [</p>
<p class="json-data json-key-value">
  <span class="json-data json-value">&emsp; &emsp; &emsp; &emsp; &emsp; &emsp; <span class="json-string">String</span>,</span>
</p>
<p class="json-data json-arr-next">&emsp; &emsp; &emsp; &emsp; &emsp; &emsp; ...</p>
<p class="json-data json-arr-bracket json-arr-bracket-close">&emsp; &emsp; &emsp; &emsp; &emsp; ]</p>

<p class="json-data json-curly-bracket json-curly-bracket-close">&emsp; &emsp; &emsp; &emsp; },</p>
<p class="json-data json-arr-next">&emsp; &emsp; &emsp; &emsp; ...</p>
<p class="json-data json-arr-bracket json-arr-bracket-close">&emsp; &emsp; &emsp; ],</p>

<p class="json-data json-key-value">
  <span class="json-data json-key">&emsp; &emsp; &emsp; "Definitions":</span>
</p>
<p class="json-data json-curly-bracket json-curly-bracket-open">&emsp; &emsp; &emsp;{"{"}</p>
  <p class="json-data json-key-value">
    <span class="json-data json-key">&emsp; &emsp; &emsp; &emsp; <span class="json-string">String</span></span>
    <span class="json-data json-explain"> (definition name):</span>
    <span class="json-data json-value"> <span class="json-int">Int</span>,</span>
    <span class="json-data json-explain"> (number of definition Paragraph)</span>
  </p>
  <p class="json-data json-arr-next">&emsp; &emsp; &emsp; &emsp; ...</p>
<p class="json-data json-curly-bracket json-curly-bracket-close">&emsp; &emsp; &emsp; },</p>

<p class="json-data json-key-value">
  <span class="json-data json-key">&emsp; &emsp; &emsp; "chords weight":</span>
</p>
<p class="json-data json-curly-bracket json-curly-bracket-open">&emsp; &emsp; &emsp;{"{"}</p>
  <p class="json-data json-key-value">
    <span class="json-data json-key">&emsp; &emsp; &emsp; &emsp; <span class="json-string">String</span></span>
    <span class="json-data json-explain"> (chord name):</span>
    <span class="json-data json-value"> <span class="json-int">Int</span>,</span>
    <span class="json-data json-explain"> (the weight of the chord)</span>
  </p>
  <p class="json-data json-arr-next">&emsp; &emsp; &emsp; &emsp; ...</p>
<p class="json-data json-curly-bracket json-curly-bracket-close">&emsp; &emsp; &emsp; }</p>

<p class="json-data json-curly-bracket json-curly-bracket-close">&emsp; &emsp; },</p>
<p class="json-data json-arr-next">&emsp; &emsp; ...</p>
<p class="json-data json-arr-bracket json-arr-bracket-close">&emsp; ]</p>
<p class="json-data json-curly-bracket json-curly-bracket-close">}</p>


</div>

        </React.Fragment>


    ) 
}

export default DataScheme