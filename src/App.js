import React, { Component } from 'react';
import './App.css';

class App extends Component {
    constructor() {
        super();

        this.state = {
            hour: null,
            minutes: null,
            second: null,
            dateString: null
        };
    }

    componentDidMount() {
        setInterval(() => {
            let today = new Date();
            this.setState({
                hour: `0${today.getHours()}`.slice(-2),
                minutes: `0${today.getMinutes()}`.slice(-2),
                second: `0${today.getSeconds()}`.slice(-2),
                dateString: today.toLocaleDateString()
            });
        }, 1000);
    }

    render() {
        return (
            <div className="App">
                <h1 className="Title">Web Time</h1>
                <hr/>

                <p className="date" id="date">{this.state.dateString || ''}</p>
                <p className="clock" id="clock">{this.state.hour ? `${this.state.hour} : ${this.state.minutes} : ${this.state.second}` : 'Calculating'}</p>

                <a href="https://github.com/ERRrOR404/WebClock"><i className="fab fa-github"></i></a>
                <p className="footer">Copyright {new Date().getFullYear()} ERRrOR, All rights reserved.</p>
            </div>
        )
    }
}

export default App;
