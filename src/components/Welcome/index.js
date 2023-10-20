// Write your code here
import {Component} from 'react'
import './index.css'

class Welcome extends Component {
  state = {subscribe: true}

  onSubscribe = () => {
    this.setState(prevState => ({subscribe: !prevState.subscribe}))
  }

  render() {
    const {subscribe} = this.state
    return (
      <div className="bg-cont">
        <div className="content-cont">
          <h1 className="main-head">Welcome</h1>
          <p className="main-para">Thank you! Happey Learning</p>
          {subscribe && (
            <button type="button" className="btn" onClick={this.onSubscribe}>
              Subscribe
            </button>
          )}
          {!subscribe && (
            <button type="button" className="btn" onClick={this.onSubscribe}>
              Subscribed
            </button>
          )}
        </div>
      </div>
    )
  }
}

export default Welcome
