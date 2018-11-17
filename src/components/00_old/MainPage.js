import React, { Component } from 'react';

class MainPage extends Component {
  constructor(props) {
    super(props)
  }

  render() {
    return (
      <div className='infoPage'>
        {this.props.state.calcOpen &&
          <div className="toClose" onClick={this.props.closeAll}></div>
        }
        {this.props.state.workshopsOpen &&
          <div className="toClose" onClick={this.props.closeAll}></div>
        }
        <div className='logoWrapper'>
          <figure className='logo'/>
        </div>

        <div className='mainBlock'>
          <p>Печатная ризо-мастерская студии ESH Gruppa. С ризографом можно быстро и экономно печатать яркие принты.</p>
          <p>У нас можно рассчитать стоимость печати  на ризографе. Еще мы проводим воркшопы и читаем лекции о ризографе и печати.</p>
        </div>

        <div className='contactsWraper'>
          <div className='social'>
            <a href='mail_to: print@esh.rocks' target='_blank'>print@esh.rocks</a><br/>
            <a href='https://instagram.com/eshprint' target='_blank'>insta: @eshptint</a><br/>
            <a href='https://instagram.com/eshprint' target='_blank'>fb: /eshprint</a>
          </div>

          <a className='location'>Галерея-мастерская «ГРАУНД Ходынка» м. Октябрьское поле ул. Ирины Левченко, д. 2</a>
        </div>
      </div>
    )
  }
}

export default MainPage;
