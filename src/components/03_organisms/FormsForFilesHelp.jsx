import React, { Component } from 'react';
import SelectFilesHelp from '../01_atoms/SelectFilesHelp';

export default class FormsForFilesHelp extends Component {
  constructor(props) {
    super(props)
  }

  renderSelects() {
    const { stage, actionSelect, actionDeselect } = this.props
    const { options, selectedOption } = stage
    let selects = []

    options.map((option, i) => {
      const { optionName } = option
      selects.push (
        <SelectFilesHelp
          text={ optionName }
          selectedOption={ selectedOption }
          actionSelect={ actionSelect }
          actionDeselect={ actionDeselect }
          selectedOption= { selectedOption }
          key={ i }
        />
      )
    })

    return selects
  }

  render() {
    return (
      <div>
        <div className="FormsForFilesHelp">
          { this.renderSelects() }
        </div>
        <div className="noticeWraper">
          <p className="notice">Если вы выбираете вариант самостоятельной подготовки файла, сверьтесь с руководстом к печати.</p>
          <a className="tutorialLink">Руководство к печати</a>
        </div>
      </div>
    )
  }
}
