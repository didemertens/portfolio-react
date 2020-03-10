import React from 'react'
import { Animated } from "react-animated-css"

class Home extends React.Component {
  state = {
    greetings: ['Hello', 'Bonjour', 'Hola', 'Guten Tag', 'Hallo', 'Salve'],
    number: 0
  }

  componentDidMount() {
    setInterval(this.changeGreeting, 2000)
  }

  changeGreeting = () => {
    if (this.state.number < this.state.greetings.length - 1) {
      const number = this.state.number + 1
      this.setState({ number })
    } else {
      this.setState({ number: 0 })
    }
  }

  render() {
    const { greetings, number } = this.state
    return (
      <section className="home-section" id="home">
        <div className="home-header">
          {/* <Animated animationIn="bounce" animationOut="zoomOutDown" animationInDuration={1000} animationOutDuration={1000} isVisible={true}> */}
          <div className="home-greeting">
            <h2>{greetings[number]}</h2>
          </div>
          {/* </Animated> */}
          <h3>I'm Dide</h3>
          <h3>Web Developer</h3>
        </div>
      </section>
    )
  }
}


export default Home