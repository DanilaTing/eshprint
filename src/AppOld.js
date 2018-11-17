import React, { Component } from 'react';
import './Reset.css';
import './stylesheets/css/style.css'
import Main from './components/Main.js';
import MainPage from './components/MainPage.js';
import Calc from './components/Calc.js';
import Workshops from './components/Workshops.js';

class App extends Component {
  constructor(props) {
    super(props)

    this.renderMainPage = this.renderMainPage.bind(this)
    this.renderCalcPage = this.renderCalcPage.bind(this)
    this.renderWorkshopsPage = this.renderWorkshopsPage.bind(this)

    this.openCalcPage = this.openCalcPage.bind(this)
    this.openWorkshopsPage = this.openWorkshopsPage.bind(this)
    this.closeCalcPage = this.closeCalcPage.bind(this)
    this.closeWorkshopsPage = this.closeWorkshopsPage.bind(this)
    this.closeAll = this.closeAll.bind(this)


    this.state = {
      'calcOpen': false,
      'workshopsOpen': false
    }
  }

  openCalcPage() {
    this.setState({
      'calcOpen': true,
      'workshopsOpen': false
    })
  }

  openWorkshopsPage() {
    this.setState({
      'calcOpen': false,
      'workshopsOpen': true
    })
  }

  closeCalcPage() {
    this.setState({
      'calcOpen': false
    })
  }

  closeWorkshopsPage() {
    this.setState({
      'workshopsOpen': false
    })
  }

  closeAll() {
    this.setState({
      'calcOpen': false,
      'workshopsOpen': false
    })
  }

  renderMainPage() {
    return (
      <div>
        <MainPage />
        <Calc open={false} openCalcPage={this.openCalcPage}/>
        <Workshops open={false} openWorkshopsPage={this.openWorkshopsPage}/>
      </div>
    )
  }

  renderCalcPage() {
    return (
      <div>
        <MainPage closeAll={this.closeAll}/>
        <Calc open={true} closeCalcPage={this.closeCalcPage}/>
        <Workshops open={false} openWorkshopsPage={this.openWorkshopsPage}/>
      </div>
    )
  }

  renderWorkshopsPage() {
    return (
      <div>
        <MainPage closeAll={this.closeAll}/>
        <Calc open={true} closeCalcPage={this.closeCalcPage}/>
        <Workshops open={true}/>
      </div>
    )
  }

  render() {
    const actions = {
      openCalcPage: this.openCalcPage,
      closeCalcPage: this.closeCalcPage,
      openWorkshopsPage: this.openWorkshopsPage,
      closeWorkshopsPage: this.closeWorkshopsPage
    }

    const state = {
      calcOpen: this.state.calcOpen,
      workshopsOpen: this.state.workshopsOpen
    }

    return (
      <div>
        <MainPage closeAll={this.closeAll} state={state}/>
        <Calc open={this.state.calcOpen} actions={actions}/>
        <Workshops open={this.state.workshopsOpen} actions={actions}/>
      </div>
    )
  }
}

export default App;
