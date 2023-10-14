import React, { Component } from 'react'

class Task5 extends Component {
    constructor(props) {
      super(props)
    
      this.state = {
         Age: 0, month:0, year:0, day:0
      }
    }
    calculatingAge = (params) => {
        if (!this.state.month || !this.state.day || !this.state.year) {
            alert("Please Enter you Full DOB!! ")
            return;
        }
        let today = new Date(),CalculatedAge=today.getFullYear() - this.state.year -(today.getMonth() + 1 < this.state.month);
        this.setState({
            Age: CalculatedAge
        })
    }
    DOBInput = (event) => {
        let DateRaw=event.target.value.split("-");
        this.setState({
            month: DateRaw[1]*1,
            year: DateRaw[0]*1,
            day: DateRaw[2]*1
        })
    }
  render() {
    return (
        <div className="container d-flex justify-content-center">
            <div className="row mt-5 shadow">
                <div className="col-12 pt-3">
                    <h2 className='fw-bold mt-1'>Age Calculator</h2>
                </div>
                <div className="col-12 mt-3">
                    <p className='fw-bold'>Enter your date of birth</p>
                </div>
                <div className="col-12 mt-1 d-flex justify-content-center">
                    <div className="form-group">
                        <input type="date" className="form-control" style={{width: 300}} onChange={this.DOBInput} />
                    </div>
                </div>
                <div className="col-12 mt-3">
                    <button className='btn btn-primary' onClick={this.calculatingAge}>Calculate Age</button>
                </div>
                <div className="col-12 mt-4 fs-3 fw-bold pb-4">
                    Your are {this.state.Age} Years old
                </div>
            </div>
        </div>
    )
  }
}

export default Task5