import React, { Component } from 'react';
import SelectTestingColors from '../01_atoms/SelectTestingColors';

export default class FormsForTestingColors extends Component {
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
          <SelectTestingColors
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
          <SelectTestingColors
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
        <div className="FormsForTestingColors">
          { this.renderSelects() }
        </div>
        <div className="noticeWraper">
          <p className="notice">Вы можете порезать напечатанный тираж самостоятельно, либо доверить резку нам.<br/><br/> Не размещайте значимые объекты близко к краям макета, поскольку они могут пострадать при резке. Если вы располагаете несколько экземпляров одного файла на листе А3, метки реза и вылеты 4 мм. выставлять необходимо каждому.</p>
          <a className="tutorialLink">Подробнее в руководстве к печати</a>
        </div>
      </div>
    )
  }
}
