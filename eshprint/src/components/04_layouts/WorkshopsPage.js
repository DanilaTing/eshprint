import React, { Component } from 'react';

export default class WorkshopsPage extends Component {
  constructor(props) {
    super(props)
  }

  renderWorkshops() {
    const { open, triggerWorkshops } = this.props

    if (open == true) {
      return (
        <div className='workshopPage' id='open'>
          <div className='blockHead' id="toClose" onClick={ triggerWorkshops }>
            <h1>ВОРКШОПЫ</h1>
          </div>
        </div>
      )
    } else {
      return (
        <div className='workshopPage' onClick={ triggerWorkshops }>
          <div className='blockHead' id="toOpen">
            <h1>ВОРКШОПЫ</h1>
          </div>
        </div>
      )
    }
  }

  render() {
    return(
      this.renderWorkshops()
    )
  }
}
