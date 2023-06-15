// Write your code here
import {Component} from 'react'
import './index.css'

class LightDarkMode extends Component {
  state = {isBackground: false}

  onLightDarkMode = () => {
    this.setState(prevState => ({isBackground: !prevState.isBackground}))
  }

  getMode = () => {
    const {isBackground} = this.state

    return isBackground ? (
      <div className="dark-continer">
        <div className="light-card-container">
          <h1 className="light-heading">Click To Change Mode</h1>
          <button
            type="button"
            onClick={this.onLightDarkMode}
            className="light-button"
          >
            Dark Mode
          </button>
        </div>
      </div>
    ) : (
      <div className="dark-continer">
        <div className="card-container">
          <h1 className="dark-heading">Click To Change Mode</h1>
          <button
            type="button"
            onClick={this.onLightDarkMode}
            className="dark-button"
          >
            Light Mode
          </button>
        </div>
      </div>
    )
  }

  render() {
    const mode = this.getMode()
    return mode
  }
}
export default LightDarkMode
