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

                <h4 class="similar-projects-header">
                    Statistical characteristics of tonal harmony:<br />
                    a corpus study of Beethoven’s string quartets
                </h4>
                <p>
                    Created by Fabian C. Moss, Markus Neuwirth, Daniel Harasim and Martin Rohrmeier <br />
                    Federal Institute of Technology Lausanne (EPFL) researchers
                </p>
                <p>This project analyzed every note and chord of Beethoven’s string quartets to provide a statistical answer as to what makes Ludwig Van so unique.</p>
                <a class="similar-projects-article-link" href="https://journals.plos.org/plosone/article?id=10.1371/journal.pone.0217242">To the article</a>
                <br />
                <hr />
                <br />

                <h4 class="similar-projects-header">Music co-intelligence and co-creativity</h4>
                <p>
                    Created by Algorithmic Musicology – a research team in Digital Humanities. <br />
                    CRIStAL computer science department of the Université de Lille with strong links to the MIS computer science lab of the Université de Picardie Jules-Verne, in Amiens.
                </p>
                <p>High-level analysis of music scores, they model patterns, melodies, harmony (chords, chord progressions, cadences), rhythms, texture, aiming to model music structure</p>
                <a class="similar-projects-article-link" href="http://www.algomus.fr/">To the project</a>
                <br />
                <hr />
                <br />

                <h4 class="similar-projects-header">Sentimental analysis in songs</h4>
                <p>
                    Created by Yaniv Bin and Shaked Liberman <br />
                    This project was also part of Digital Humanities course by guidance of Dr. Yael Netzer At Ben Gurion University
                </p>
                <p>
                    The project aimed to recognize semantical analysis in songs of famous artists throughout their careers.
                </p>
                <a class="similar-projects-article-link" href="https://lieberms.wixsite.com/sentimental-analysis">To the project</a>
                <br />

            </div>

        </React.Fragment>

    ) 
}

export default SimilarProjectsComp