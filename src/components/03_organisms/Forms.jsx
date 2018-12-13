import React, { Component } from 'react';
import FormsForFormat from '../03_organisms/FormsForFormat'
import FormsForPaper from '../03_organisms/FormsForPaper'
import FormsForCut from '../03_organisms/FormsForCut'
import FormsForColors from '../03_organisms/FormsForColors'
import FormsForAmount from '../03_organisms/FormsForAmount'
import FormsForFilesHelp from '../03_organisms/FormsForFilesHelp'
import FormsForTestingColors from '../03_organisms/FormsForTestingColors'
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
      const { setCutSelected, setCutDeselected, setStageToColors } = actions
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
            action={ setStageToColors }
            active= { isNextButtonActive }
          />
        </section>
      )
    } else if (currentStage == 'цвета') {
      const { setColorsSelected, setColorsDeselected, setStageToAmount } = actions
      const stage = stages[3]
      const { isNextButtonActive } = stage
      return(
        <section>
          <FormsForColors
            actionSelect={ setColorsSelected }
            actionDeselect={ setColorsDeselected }
            stage={ stage }
          />
          <TextButton
            action={ setStageToAmount }
            active= { isNextButtonActive }
          />
        </section>
      )
    } else if (currentStage == 'тираж') {
      const { setAmountSelected, setAmountDeselected, setStageToFiles } = actions
      const stage = stages[4]
      const { isNextButtonActive } = stage
      return(
        <section>
          <FormsForAmount
            actionSelect={ setAmountSelected }
            actionDeselect={ setAmountDeselected }
            stage={ stage }
          />
          <TextButton
            action={ setStageToFiles }
            active= { isNextButtonActive }
          />
        </section>
      )
    } else if (currentStage == 'подготовка файлов') {
      const { setFilesSelected, setFilesDeselected, setStageToTesting } = actions
      const stage = stages[5]
      const { isNextButtonActive } = stage
      return(
        <section>
          <FormsForFilesHelp
            actionSelect={ setFilesSelected }
            actionDeselect={ setFilesDeselected }
            stage={ stage }
          />
          <TextButton
            action={ setStageToTesting }
            active= { isNextButtonActive }
          />
        </section>
      )
    } else if (currentStage == 'цветопробы') {
      const { setTestingColorsSelected, setTestingColorsDeselected, setStageToTesting } = actions
      const stage = stages[6]
      const { isNextButtonActive } = stage
      return(
        <section>
          <FormsForTestingColors
            actionSelect={ setTestingColorsSelected }
            actionDeselect={ setTestingColorsDeselected }
            stage={ stage }
          />
          <TextButton
            action={ setStageToTesting }
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
