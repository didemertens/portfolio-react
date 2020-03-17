import React from 'react'
import { IoIosArrowDropdown } from "react-icons/io"

class Home extends React.Component {
  state = {
    greetings: ['Hello', 'Salut', 'Hola', 'Tere', 'Hallo', 'Ciao', 'Halløj', 'Terve', 'Hei', 'Goeie', 'Hej'],
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

  handleClick = () => {
    this.nextComponent.scrollIntoView({ behavior: "smooth" })
  }

  render() {
    const { greetings, number } = this.state
    return (
      <>
        <section className="home-section" id="home">
          <div className="home-greeting">
            <h2>{greetings[number]}</h2>
          </div>
          <div className="home-header">
            <div className="home-greeting-mirror">
              <h2>{greetings[number]}</h2>
            </div>
            <div className="home-header-dark">
              <h3>Dide Mertens</h3>
            </div>
            <h4>Web Developer</h4>
            <IoIosArrowDropdown onClick={this.handleClick} className="home-arrow" />
          </div>
        </section>
        <div ref={(ref) => this.nextComponent = ref}></div>
      </>
    )
  }
}


export default Home