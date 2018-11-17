import React, { Component } from 'react';

class Main extends Component {
  constructor(props) {
    super(props)

    this.openMainPage = this.openMainPage.bind(this)
    this.renderMainPage = this.renderMainPage.bind(this)

    this.openCalcPage = this.openCalcPage.bind(this)
    this.renderCalcPage = this.renderCalcPage.bind(this)

    this.openWorkshopsPage = this.openWorkshopsPage.bind(this)
    this.renderWorkshopsPage = this.renderWorkshopsPage.bind(this)

    this.state = {
      'mainOpen': true,
      'calcOpen': false,
      'workshopsOpen': false
    }
  }

  openMainPage() {
    this.setState({
      'mainOpen': true,
      'calcOpen': false,
      'workshopsOpen': false
    })
  }

  openCalcPage() {
    this.setState({
      'mainOpen': false,
      'calcOpen': true,
      'workshopsOpen': false
    })
  }

  openWorkshopsPage() {
    this.setState({
      'mainOpen': false,
      'calcOpen': false,
      'workshopsOpen': true
    })
  }

  renderMainPage() {
    return (
      <div></div>
    )
  }

  renderCalcPage() {
    return (
      <div>
        <div className='calcPage' id='open'>
          <h1>КАЛЬКУЛЯТОР</h1>
        </div>

        <div className='workshopPage' onClick={this.openWorkshopsPage}>
          <h1>ВОРКШОПЫ</h1>
        </div>
      </div>
    )
  }

  renderWorkshopsPage() {
    return (
      <div>
        <div className='infoPage'>
          <div className='headerLogo'>
            <figure className='logo' onClick={this.openMainPage}/>
            <a>Печатная ризо-мастерская студии ESH Gruppa</a>
          </div>

          <div className='mainBlock'>
            <div className='part'>
              <h2>С ризографом можно быстро и экономно печатать яркие принты</h2>
              <a>Подробнее о ризографе</a>
            </div>

            <div className='part'>
              <h2>У нас можно рассчитать стоимость печати на ризографе</h2>
              <a>Открыть калькулятор</a>
            </div>

            <div className='part'>
              <h2>Еще мы проводим воркшопы и читаем лекции о ризографе и печати</h2>
              <a>Смотреть воркшопы</a>
            </div>
          </div>

          <div className='contactsWraper'>
            <div className='contacts'>
              <div>
                <a href='https://www.vk.com' target='_blank'>print@esh.rocks</a>
                <a>insta: @eshptint</a>
                <a>fb: /eshprint</a>
              </div>

              <div>
                <div>
                  <a>Studio</a>
                  <figure className='eshLogo'/>
                </div>
                <div>
                  <a>Esh Print Shop</a>
                  <figure className='buyIcon'/>
                </div>
              </div>

              <div>
                <a>
                Галерея-мастерская «ГРАУНД Ходынка»<br/>м. Октябрьское поле<br/>ул. Ирины Левченко, д. 2
                </a>
              </div>
            </div>
          </div>
        </div>

        <div className='calcPage' id='open' onClick={this.openCalcPage}>
          <h1>КАЛЬКУЛЯТОР</h1>
        </div>

        <div className='workshopPage' id='open'>
          <h1>ВОРКШОПЫ</h1>
        </div>
      </div>
    )
  }

  render() {
    if (this.state.mainOpen == true) {
      return (
        this.renderMainPage()
      )
    }

    if (this.state.calcOpen == true) {
      return (
        this.renderCalcPage()
      )
    }

    if (this.state.workshopsOpen == true) {
      return (
        this.renderWorkshopsPage()
      )
    }
  }
}

export default Main;
