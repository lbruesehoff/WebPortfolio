import React, { Component } from 'react';
import './GitHubSearch.css';

class GitHubSearch extends Component {
    render() {
        return (
            <div className="GitHubPreview">
            
                <img className='GitHubMobile' src="./images/GitHubSearch.JPG"/>
                <div className="GitHubDesc">
                    <hr/>
                    <h1>GitHub User Search App</h1>
                    <p>
                        This application takes the GitHub users API and displays information related to that user.
                        Users can search any GitHub user in the search bar and get back the username, date joined,
                        bio, repos, followers, following, and any links related to the profile.
                        This application is responsive and has a light and dark theme that can be toggled on or off.
                        This was built using HTML, CSS, and Javascript.
                    </p>
                    <a href="https://lbruesehoff.github.io/GitHubSearch/" target="_blank"><button>View Project</button></a>
                    <a href="https://github.com/lbruesehoff/GitHubSearch" target="_blank"><button>View Code</button></a>
                    <hr/>
                </div>

            <img className="GitHubImg" src="./images/GitHubSearch.JPG"/>
        </div>
        );
    }
}

export default GitHubSearch;