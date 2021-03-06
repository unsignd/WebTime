import React, { Component } from 'react';
import './App.css';

class App extends Component {
    constructor() {
        super();

        this.state = {
            timeString: null,
            dateString: null
        };
    }

    componentDidMount() {
        setInterval(() => {
            let today = new Date();
            this.setState({
                timeString: today.toLocaleTimeString(undefined, {
                    hour12: false,
                    hour: '2-digit',
                    minute: '2-digit',
                    second: '2-digit'
                }),
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
                <p className="clock" id="clock">{this.state.dateString ? this.state.timeString : 'Calculating'}</p>

                <a href="https://github.com/ERRrOR404/WebClock"><i className="fab fa-github"></i></a>
                <p className="footer">Copyright {new Date().getFullYear()} ERRrOR, All rights reserved.</p>
            </div>
        )
    }
}

export default App;
