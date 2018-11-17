import React, { Component } from 'react';

class Workshops extends Component {
  constructor(props) {
    super(props)

    this.renderWorkshopsOpen = this.renderWorkshopsOpen.bind(this)
    this.renderWorkshopsClosed = this.renderWorkshopsClosed.bind(this)

    this.state = {
      'workshopsOpen': this.props.open
    }
  }

  componentWillReceiveProps(nextProps) {
    this.setState({
      'workshopsOpen': nextProps.open > this.props.open
    });
  }

  renderWorkshopsClosed() {
    return (
      <div className='workshopPage' onClick={this.props.actions.openWorkshopsPage}>
        <div className='blockHead' id="toOpen">
          <h1>ВОРКШОПЫ</h1>
        </div>
      </div>
    )
  }

  renderWorkshopsOpen() {
    return (
      <div className='workshopPage' id='open'>
        <div className='blockHead' id="toClose" onClick={this.props.actions.closeWorkshopsPage}>
          <h1>ВОРКШОПЫ</h1>
        </div>
      </div>
    )
  }

  render() {
    if (this.state.workshopsOpen == false) {
      return(
        this.renderWorkshopsClosed()
      )
    } else {
      return(
        this.renderWorkshopsOpen()
      )
    }
  }
}

export default Workshops;
