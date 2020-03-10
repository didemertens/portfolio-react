import React from 'react'
import { Animated } from "react-animated-css"

class Home extends React.Component {
  state = {
    greetings: ['Hello', 'Hallo', 'Hola', 'Bonjour', 'Guten Tag'],
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
        <Animated animationIn="bounce" animationOut="zoomOutDown" animationInDuration={1000} animationOutDuration={1000} isVisible={true}>
          <h2>{greetings[number]}!</h2>
        </Animated>
        <h3>I'm Dide</h3>
        <h3>Web Developer</h3>
      </section>
    )
  }
}


export default Home