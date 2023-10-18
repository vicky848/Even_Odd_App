// Write your code here
import {Component} from 'react'
import './index.css'

class EvenOddApp extends Component {
  state = {count: 0, message: 'Count is Even'}

  onChangeButton = () => {
    const randomIncrement = Math.floor(Math.random() * 101)
    const {count} = this.state

    const newCount = count + randomIncrement

    let newMessage
    if (newCount % 2 === 0) {
      newMessage = 'Count is Event'
    } else {
      newMessage = 'Count is Odd'
    }

    this.setState({count: newCount, message: newMessage})
  }

  render() {
    const {count, message} = this.state

    return (
      <div className="container">
        <h1 className="heading">Count {count}</h1>

        <p className="message">{message}</p>

        <button
          type="button"
          className="button-action"
          onClick={this.onChangeButton}
        >
          Increment
        </button>
        <p className="description">
          * Increase By Random Number Between 0 to 100
        </p>
      </div>
    )
  }
}
export default EvenOddApp
