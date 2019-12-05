import React, { Component } from 'react';

import './App.css';

class App extends Component{
  constructor(){
    super()
    this.state=({
      year:2019,
      month:"Apr",
      day:1,
      week:1,
      hour:12,
      Minute:1,
      second:1,
      Zodiacs:'Aries, Taurus, Gemini, Cancer, Leo, Virgo, Libra, Scorpio, Sagittarius, Capricorn, Aquarius, Pisces'.split(','),
      allMonths:["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Spt","Oct","Nov","Dec"],

    })
  }
  componentDidMount() {
    setInterval(() =>{
      let time= new Date()
      this.setState({
        year: this.state.Zodiacs[time.getUTCFullYear()%12],
        allMonths:this.state.allMonths[time.getUTCMonth()],
        month: time.getMonth()+1,
        day: time.getTime(),
        week: time.getDay(),
        hour: time.getHours(),
        Minute:time.getMinutes(),
        second: time.getSeconds()

      })
    },1000)
  }
  List = length => Array.from({length}).map((v, k) => k).map(x=>x+1);
  addZero = num => {
    if (num >= 10) 
    return num
    return '0'+num
  }

  render(){
    return(
      <div className='App'>
        <header className="App-header">
          <div className="msg">
              <div className="year">
    <span>{this.state.year}</span>
              </div>
          </div>
          <div className="allMonths">
            {`${this.state.allMonths}`}
          </div>
          <div className="box">
            {this.List(12).map((x, index) => {
              return (
                <div className={`month item ${index===(this.state.month-1) ? "active" : " "}`} 
                style={{transform: `rotate(${index*30-30*(this.state.month-1)}deg)`}} key={index}>
                  {`${x} month`}
                 </div> 
              )
            })}


            {this.List(30).map((x, index)=>{
              return(
                <div className={`day item ${index===(this.state.day-1) ? "active" : ""}`} 
                style={{transform: `rotate(${index*12-12*(this.state.day-1)}deg)`}}>
                    {`${x} day`}
                </div>
              )
            })}


            {this.List(7).map((x, index) => {
              return (
                <div className={`week item ${index===(this.state.week-1) ? "active" : ""}`}
                 key={index} style={{transform: `rotate(${index*(360/21)-(360/21)*(this.state.week-1)}deg)`}} >
                  {`${x} week`}
                </div>
              )
            })}


            {this.List(60).map((x, index) =>{
              return(
                <div className={`hour item ${index===(this.state.hour-1) ? "active" : ""}`} 
                style={{transform: `rotate(${index*(360/24)-(360/24)*(this.state.hour-1)}deg)`}}
                key={index} >
                  {`${x} hour`}
                </div>
              )
            })}


            {this.List(60).map((x, index) =>{
              return(
                <div className={`Minute item ${index===(this.state.Minute-1) ? "active" : ""}`}
                key={index} style={{transform: `rotate(${index*(360/60)-(360/60)*(this.state.Minute-1)}deg)`}}
                >
                  {`${x} minutes`}
                </div>
              )
            })}


            {this.List(60).map((x, index) =>{
              return(
                <div className={`second item ${index===(this.state.second-1) ? "active" : " " }`}>
                  {`${x} seconds`}
                </div>
              )
            })}


          {this.List(60).map((x,index) =>{
            return(
              <div className={`second item ${index===(this.state.second-1) ? "active" : " " }`} style={{transform: `rotate(${index*(360/60)-(360/60)*(this.state.second-1)}deg)`}}>
                  {`${x} sec`}
              </div>
            )
          })}


          </div>
        </header>
      </div>
    )
  }

}
export default App;
