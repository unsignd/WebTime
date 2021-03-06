import React from 'react';
import './App.css';

function App() {
    setInterval(() => {
        let today = new Date();
        let hour = `0${today.getHours()}`.slice(-2);
        let minutes = `0${today.getMinutes()}`.slice(-2);
        let second = `0${today.getSeconds()}`.slice(-2);

        document.getElementById('clock').innerText =  `${hour} : ${minutes} : ${second}`;
        document.getElementById('date').innerText = new Date().toLocaleDateString();
    }, 1000);

    return (
        <div className="App">
            <h1 className="Title">Web Time</h1>
            <hr/>

            <p className="date" id="date" />
            <p className="clock" id="clock" />

            <a href="https://github.com/ERRrOR404/WebClock"><i className="fab fa-github"></i></a>
            <p className="footer">Copyright {new Date().getFullYear()} ERRrOR, All rights reserved.</p>
        </div>
  );
}

export default App;
