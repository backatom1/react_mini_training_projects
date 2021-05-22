import TestComponent from './TestComponent.js';

import './App.css';
import { Component } from 'react';

export default class App extends Component {

  constructor(props) {
    super(props);
    this.state = {
      display: true
    };

    this.showedText = this.showedText.bind(this);
  }

  showedText() {

    this.setState(({ display }) => ({
      display: !display
    }));
  }

  render() {

    const text = this.state.display ? <TestComponent /> : null;

    return (
      <>
        {text}
        <div className='button-del'>
          <button onClick={this.showedText} >Del text</button>
        </div>
      </>
    );
  }
}
