import './App.css';

function App() {

    setInterval(function() {
        let today = new Date();
        let year = today.getFullYear(); // 년도
        let month = today.getMonth() + 1;
        let date = today.getDate();  // 날짜
        let hour = today.getHours();
        let minutes = today.getMinutes();
        let second = today.getSeconds();

        if(month.toString().length === 1)
            month = "0" + month.toString();
        if(date.toString().length === 1)
            date = "0" + date.toString();
        if(hour.toString().length === 1)
            hour = "0" + hour.toString();
        if(minutes.toString().length === 1)
            minutes = "0" + minutes.toString();
        if(second.toString().length === 1)
            second = "0" + second.toString();

        document.getElementById('clock').innerText = hour + " : " + minutes + " : " + second;
        document.getElementById('date').innerText = year + "." + month + "." + date;
    }, 100);

  return (
    <div className="App">
      <body className="App-header">
        <div>
            <h1 className="Title">Web Time</h1>
            <hr/>
        </div>
        <div style={{width: 1000, height: 500}}>
            <p className="date" id="date"></p>
            <p className="clock" id="clock"></p>
        </div>
        <p className="footer">Copyright 2021 ERRrOR, All rights reserved.</p>
      </body>
    </div>
  );
}

export default App;
