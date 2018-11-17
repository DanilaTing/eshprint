import React, { Component } from 'react';
import './Reset.css';
import './stylesheets/css/style.css'
import MainPage from './components/04_layouts/MainPage';
import CalcPage from './components/04_layouts/CalcPage';
import WorkshopsPage from './components/04_layouts/WorkshopsPage';

class App extends Component {
  constructor(props) {
    super(props)
    this.triggerCalc = this.triggerCalc.bind(this)
    this.triggerWorkshops = this.triggerWorkshops.bind(this)

    this.state = {
      'mainOpen': true,
      'calcOpen': false,
      'workshopsOpen': false
    }
  }

  triggerCalc() {
    this.setState({
      'calcOpen': !this.state.calcOpen
    })
  }

  triggerWorkshops() {
    this.setState({
      'workshopsOpen': !this.state.workshopsOpen
    })
  }

  renderCurrentPage() {
    const { mainOpen, calcOpen, workshopsOpen } = this.state

    return(
      <div>
        <MainPage/>
        { calcOpen ? (
          <CalcPage open={ true } triggerCalc={ this.triggerCalc }/>
        ) : (
          <CalcPage open={ false } triggerCalc={ this.triggerCalc }/>
        )}

        { workshopsOpen ? (
          <WorkshopsPage open={ true } triggerWorkshops={ this.triggerWorkshops }/>
        ) : (
          <WorkshopsPage open={ false } triggerWorkshops={ this.triggerWorkshops }/>
        )}
      </div>
    )
  }

  render() {
    return(
      this.renderCurrentPage()
    )
  }
}

export default App;
