import React, { Component } from 'react';
import Snake from './Snake';
import Stats from './Stats';
import '../assets/stylesheets/app.css';

export default class World extends Component {
  constructor(props) {
    super(props);
    this.handleKeyUp = this.handleKeyUp.bind(this);
  }

  componentDidMount() {
    this.setState({
      snakeLength: 1,
      mice: 0,
      arrowKey: null,
      xPos: 0,
      yPos: 0
    });

    document.addEventListener('keyup', this.handleKeyUp, false);
  }

  componentWillUnmount() {
    document.removeEventListener('keyup', this.handleKeyUp, false);
  }

  handleKeyUp(e) {
    const key = e.key;
    this.setState({ arrowKey: key });

    if (key === 'ArrowUp') {
      this.setState((prevState) => {
        const newYPos = prevState.yPos + 1;
        return { yPos: newYPos };
      });
    } else if (key === 'ArrowDown') {
      this.setState((prevState) => {
        const newYPos = prevState.yPos - 1;
        return { yPos: newYPos };
      });
    } else if (key === 'ArrowLeft') {
      this.setState((prevState) => {
        const newXPos = prevState.xPos - 1;
        return { xPos: newXPos };
      });
    } else if (key === 'ArrowRight') {
      this.setState((prevState) => {
        const newXPos = prevState.xPos + 1;
        return { xPos: newXPos };
      });
    }
  }

  render() {
    return (
      <div>
        <Snake
          xPos={0}
          yPos={0}
        />
        <Stats {...this.state} />
      </div>
    );
  }
}
