import React, { Component } from 'react';
import FormsForFormat from '../03_organisms/FormsForFormat'
import FormsForPaper from '../03_organisms/FormsForPaper'
import FormsForCut from '../03_organisms/FormsForCut'
import TextButton from '../01_atoms/TextButton'

export default class Forms extends Component {
  constructor(props) {
    super(props)
  }

  renderForms() {
    const { actions, stages, currentStage, currentStageIndex } = this.props

    if (currentStage == 'формат') {
      const { setFormatSelected, setFormatDeselected, setStageToPaper } = actions
      const stage = stages[0]
      const { isNextButtonActive } = stage
      return(
        <section>
          <FormsForFormat
            actionSelect={ setFormatSelected }
            actionDeselect={ setFormatDeselected }
            stage={ stage }
          />
          <TextButton
            action={ setStageToPaper }
            active= { isNextButtonActive }
          />
        </section>
      )
    } else if (currentStage == 'бумага') {
      const { setPaperSelected, setPaperDeselected, setStageToCut } = actions
      const stage = stages[1]
      const { isNextButtonActive } = stage
      return(
        <section>
          <FormsForPaper
            actionSelect={ setPaperSelected }
            actionDeselect={ setPaperDeselected }
            stage={ stage }
          />
          <TextButton
            action={ setStageToCut }
            active= { isNextButtonActive }
          />
        </section>
      )
    } else if (currentStage == 'резка') {
      const { setCutSelected, setCutDeselected, setStageToCut } = actions
      const stage = stages[2]
      const { isNextButtonActive } = stage
      return(
        <section>
          <FormsForCut
            actionSelect={ setCutSelected }
            actionDeselect={ setCutDeselected }
            stage={ stage }
          />
          <TextButton
            action={ setStageToCut }
            active= { isNextButtonActive }
          />
        </section>
      )
    }
  }

  render() {
    return (
      this.renderForms()
    )
  }
}
