// Write your code here

import {Component} from 'react'
import './index.css'
import Message from '../Message/index'
import Login from '../Login/index'
import Logout from '../Logout/index'

class Home extends Component {
  state = {isLoggedIn: 0}

  changeLoggedstatus = () => {
    this.setState(currentState => ({isLoggedIn: !currentState.isLoggedIn}))
  }

  render() {
    const {isLoggedIn} = this.state
    return (
      <div className="bg-container">
        <Message isLoggedIn={isLoggedIn} />
        <button
          className="button"
          onClick={this.changeLoggedstatus}
          type="button"
        >
          {isLoggedIn ? <Logout /> : <Login />}
        </button>
      </div>
    )
  }
}

export default Home
