import React, { Component } from 'react';
import SelectButton from '../01_atoms/SelectButton';
import SelectCustom from '../01_atoms/SelectCustom';

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
      if (optionName != 'Свой формат') {
        selects.push (
          <SelectButton
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
          <SelectCustom
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
      <div className="forms">
        { this.renderSelects() }
      </div>
    )
  }
}
