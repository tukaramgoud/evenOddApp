// Write your code here
import {Component} from 'react'
import './index.css'

class EvenOddApp extends Component {
  state = {number: 0}

  incrementButton = () => {
    const newNumber = Math.round(Math.random() * 100)
    this.setState({number: newNumber})
  }

  render() {
    const {number} = this.state
    const isEven = number % 2 === 0 ? 'Even' : 'Odd'
    return (
      <div className="background-container">
        <h1 className="count-main-heading">Count {number}</h1>
        <p className="count-sub-container">Count is {isEven}</p>
        <button type="button" className="button" onClick={this.incrementButton}>
          Increment
        </button>
        <p className="note-para">*Increase by random number Between 0 to 100</p>
      </div>
    )
  }
}

export default EvenOddApp
