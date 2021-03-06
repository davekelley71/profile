import React, { Component } from 'react';
import Carousel from './components/Carousel';
import profile from './profile-pic.jpg';
import einstein from './einstein2.jpg';
import iris from './iris.jpg';
import sunlight from './sunlight.jpg';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <aside className="sidebar">
            <button name="about">About</button>
            <button name="personal">Personal</button>
            <button name="contact">Contact</button>
          </aside>
          <img src={profile} className="Profile-pic" alt="profile" />
          <div className="title">
            <h2 className="header__title">
              David Kelley
            </h2>
              <h4 className="subject">
                Front End Developer
              </h4>
            <span className="description">Four months ago I received my scholarship from Google to embark on a new career in web development.
               I am building my skills and tackling new challenges.
            </span>
        </div>
           
          <div className="projects">
            <h2 className="files">Featured Work</h2>
          </div>

      < Carousel />   

    <footer>
      <ul>
        <li className="links"><a href="https://github.com/davekelley71">GitHub</a></li>
        <li className="links"><a href="#">Contact me</a></li>
        <li className="links"><a href="#">Blog</a></li>
      </ul>
    </footer>
  
          
        </header>
          
    
      </div>
    );
  }
}

export default App;
