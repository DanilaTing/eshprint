import React, { Component } from 'react';
import SelectPaper from '../02_molecules/SelectPaper';
import SelectPaperCustom from '../01_atoms/SelectPaperCustom';

export default class FormsForPaper extends Component {
  constructor(props) {
    super(props)
  }

  renderSelects() {
    const { stage, actionSelect, actionDeselect } = this.props
    const { options, selectedOption } = stage
    let selects = []

    options.map((option, i) => {
      const { optionName } = option
      if (optionName != 'Своя бумага') {
        selects.push (
          <SelectPaper
            option={ option }
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
          <SelectPaperCustom
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
        <div className="FormsForPaper">
          { this.renderSelects() }
        </div>
        <div className="noticeWraper">
          <p className="notice">Вы можете выбрать бумагу из [этого] списка, а также принести свою. Главное, чтобы она отвечала этим параметрам:</p>
          <a className="tutorialLink">Подробнее в руководстве к печати</a>
        </div>
      </div>
    )
  }
}
