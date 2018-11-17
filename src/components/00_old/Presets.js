import React, { Component } from 'react';

class Presets extends Component {
  constructor(props) {
    super(props)
  }

  render() {
    return (
      <div className="presetsWraper">
        <div className="presets">
          <div className="preset" onClick={this.props.openCalculator}>
            <figure className="presetIcon"></figure>
            <div className="presetName">
              <h2>Постеры</h2>
              <figure className="moreAboutPreset"></figure>
            </div>
          </div>
          <div className="preset">
            <figure className="presetIcon"></figure>
            <div className="presetName">
              <h2>Открытки</h2>
              <figure className="moreAboutPreset"></figure>
            </div>
          </div>
          <div className="preset">
            <figure className="presetIcon"></figure>
            <div className="presetName">
              <h2>Многостраничники</h2>
              <figure className="moreAboutPreset"></figure>
            </div>
          </div>
        </div>

        <p className="extraProject">Если вы считаете, что у ваш заказ не вписывается ни в одну из категорий, напишите нам или оставьте комментарии после примерного рассчета стоимости в калькуляторе</p>
      </div>
    )
  }
}

export default Presets;
