// Write your code here
import {Component} from 'react'
import './index.css'

class EvenOddApp extends Component {
  state = {count: 0}

  onClickIncrementCount = () => {
    const randomNumber = Math.ceil(Math.random() * 100)
    this.setState(prevState => ({count: prevState.count + randomNumber}))
  }

  render() {
    const {count} = this.state
    const displayText = count % 2 === 0 ? 'Even' : 'Odd'
    return (
      <div className="even-odd-app-container">
        <div className="count-container">
          <h1 className="count-heading">Count {count}</h1>
          <p className="count-category">Count is {displayText}</p>
          <button
            className="count-button"
            onClick={this.onClickIncrementCount}
            type="button"
          >
            Increment
          </button>
          <p className="count-description">
            *Increase By Random Number Between 0 to 100
          </p>
        </div>
      </div>
    )
  }
}

export default EvenOddApp
