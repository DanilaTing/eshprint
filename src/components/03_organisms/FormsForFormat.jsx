import React, { Component } from 'react';
import SelectFormat from '../01_atoms/SelectFormat';
import SelectFormatCustom from '../01_atoms/SelectFormatCustom';

export default class FormsForFormat extends Component {
  constructor(props) {
    super(props)
  }

  renderSelects() {
    const { stage, actionSelect, actionDeselect } = this.props
    const { options, selectedOption } = stage
    let selects = []

    options.map((option, i) => {
      const { optionName } = option
      if (optionName != 'Свой формат') {
        selects.push (
          <SelectFormat
            text={ optionName }
            selectedOption={ selectedOption }
            actionSelect={ actionSelect }
            actionDeselect={ actionDeselect }
            selectedOption= { selectedOption }
            key={ i }
          />
        )
      } else {
        selects.push (
          <SelectFormatCustom
            text={ optionName }
            selectedOption={ selectedOption }
            actionSelect={ actionSelect }
            actionDeselect={ actionDeselect }
            selectedOption= { selectedOption }
            key={ i }
          />
        )
      }
    })

    return selects
  }

  render() {
    return (
      <div>
        <div className="FormsForFormat">
          { this.renderSelects() }
        </div>
        <div className="noticeWraper">
          <p className="notice">Максимальный формат нашего ризографа — А3. Хотите напечатать что-то меньше этого формата? Советуем сэкономить и разместить несколько работ на одном листе.</p>
          <a className="tutorialLink">Подробнее в руководстве к печати</a>
        </div>
      </div>
    )
  }
}
