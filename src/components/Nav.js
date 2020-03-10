import React from 'react'
import { slide as Menu } from 'react-burger-menu'

class Nav extends React.Component {
  state = {
    menuOpen: false
  }

  handleStateChange = (state) => {
    this.setState({ menuOpen: state.isOpen })
  }

  closeMenu = () => {
    this.setState({ menuOpen: false })
  }

  render() {
    return (
      <section className="nav-section">
        <Menu
          isOpen={this.state.menuOpen}
          onStateChange={(state) => this.handleStateChange(state)}
          width={`100vw`}
        >
          <a id="home" className="menu-item" href="#home" onClick={() => this.closeMenu()}>Home</a>
          <a id="about" className="menu-item" href="#about" onClick={() => this.closeMenu()}>About</a>
          <a id="contact" className="menu-item" href="#projects" onClick={() => this.closeMenu()}>Projects</a>
        </Menu>
      </section>
    )
  }
}

export default Nav