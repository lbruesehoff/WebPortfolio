import React, { Component } from 'react';
import './StudioGhibli.css';

class StudioGhibli extends Component {
    render() {
        return (
            <div className="StudioGhibliPrev">
                <img src="./images/StudioGhibli.PNG"/>
            
                <div className="StudioGhibliDesc">
                    <hr/>
                    <h1>Studio Ghibli API</h1>
                    <p>
                    This application takes the Studio Ghibli API and displays Rotten Tomatoes scores, information about the movies, and posters.
                    I wanted to do this project because I really enjoy Studio Ghibli movies and wanted to see all of the Rotten Tomatoes scores at once.
                    This project was created with ReactJS using hooks and API Calls to fetch the data. 
                    </p>
                    <a href="https://nimble-panda-c086d9.netlify.app/" target="_blank"><button>View Project</button></a>
                    
                    <a href="https://github.com/lbruesehoff/StudioGhibliApi" target="_blank"><button>View Code</button></a>
                    <hr/>
                </div>
        </div>
        );
    }
}

export default StudioGhibli;