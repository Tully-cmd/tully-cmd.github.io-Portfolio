import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="App-header">
          {/* <img src={logo} className="App-logo" alt="logo" /> */}
          <h1>Tully Martin Developer</h1>
        </div>

        <div>
        <h2>Melville's Marginalia</h2>
           {/* <p className="App-intro">
             To get started, edit <code>src/App.js</code> and save to reload.
           </p> */}
           <p>Technologies used: React, JavaScript, HTML, CSS.</p>
           <p>Skills used: Teamwork, Agile, Scrum, Planning/Requirements gathering.</p>
           <a href="https://sdp.boisestate.edu/projects/s23-melvillators/">Website</a>
           <br></br>
           <a href="https://github.com/cs481-ekh/s23-melvillators">Repository</a>
        </div>

        <div>
        <h2>JavaScript Website Presentation</h2>
           <p>Technologies used: JavaScript, HTML, CSS.</p>
           <p>Skills used: Verbal presentation, Repository Management/Deployment, Version control (GIT).</p>
           <a href="http://csweb.boisestate.edu/~jbuffenb/classes/354/teams/finches/">Website</a>
           <p> Username: finches Password: fUf9</p>
           <a href="https://github.com/Tully-cmd/CS354LanguageWebsite">Repository</a>
        </div>
        
        <div>
        <h2>Ethical Hacking CS332 Labs</h2>
           <p>Technologies used: NMAP, Nessus, Whois, Metasploit, John the Ripper.</p>
           <p>Skills used: Good technical documentation, Problem solving.</p>
           <p> Repositories: </p>
           <ul>
              <li><a href="https://github.com/Tully-cmd/CS332Lab8">Lab 8</a></li>
              <li><a href="https://github.com/Tully-cmd/CS332Lab7">Lab 7</a></li>
              <li><a href="https://github.com/Tully-cmd/CS332Midterm">Midterm</a></li>
              <li><a href="https://github.com/Tully-cmd/CS332Lab6">Lab 6</a></li>
              <li><a href="https://github.com/Tully-cmd/CS332Lab5">Lab 5</a></li>
              <li><a href="https://github.com/Tully-cmd/CS332Lab4">Lab 4</a></li>
              <li><a href="https://github.com/Tully-cmd/CS332Lab3">Lab 3</a></li>
              <li><a href="https://github.com/Tully-cmd/CS332Lab2">Lab 2</a></li>
              <li><a href="https://github.com/Tully-cmd/CS332Lab1">Lab 1</a></li>
           </ul>
        </div>

        <div>
        <h2>Leetcode Successful Problem Attempts</h2>
           <p>Programming Languages used: Java, C, C++, PHP, JavaScript, C#, Python.</p>
           <p>Skills used: Algorithms, Data structures.</p>
           <a href="https://github.com/Tully-cmd/Leetcode">Repository</a>
        </div>

        <div>
        <h2>Banking Application Assignment</h2>
           <p>The purpose of this assignment was to port Java application to an unfamiliar language.</p>
           <p>Programming Language: GO</p>
           <p>Skills used: Adapting to unfamiliar technology.</p>
           <a href="https://github.com/Tully-cmd/CS354LA4">Repository</a>
        </div>

      </div>
    );
  }
}

export default App;
