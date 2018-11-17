import React, { Component } from 'react';
import Presets from '../03_organisms/Presets';
import Forms from '../03_organisms/Forms';
import ProgressBar from '../03_organisms/ProgressBar';
import Checkout from '../03_organisms/Checkout';
import TextButton from '../01_atoms/TextButton';

export default class CalcPage extends Component {
  constructor(props) {
    super(props)

    this.openCalculator = this.openCalculator.bind(this)

    this.setStageFromProgressBar = this.setStageFromProgressBar.bind(this)

    this.renderPresetsOrForms = this.renderPresetsOrForms.bind(this)

    this.setFormatSelected = this.setFormatSelected.bind(this)
    this.setFormatDeselected = this.setFormatDeselected.bind(this)
    this.setStageToPaper = this.setStageToPaper.bind(this)

    this.setPaperSelected = this.setPaperSelected.bind(this)
    this.setPaperDeselected = this.setPaperDeselected.bind(this)
    this.setStageToCut = this.setStageToCut.bind(this)

    this.setCutSelected = this.setCutSelected.bind(this)
    this.setCutDeselected = this.setCutDeselected.bind(this)

    this.state = {
      currentStage: 'пресеты',
      currentStageIndex: '',
      stages: [
        {
          stageName: 'формат',
          selectedOption: '',
          isNextButtonActive: false,
          options: [
            {
              optionName: 'A3 (420 х 297 мм)'
            }, {
              optionName: 'A4 (297 х 210 мм)'
            }, {
              optionName: 'A5 (420 х 297 мм)'
            }, {
              optionName: 'A6 (420 х 297 мм)'
            }, {
              optionName: 'Свой формат'
            }
          ]
        }, {
          stageName: 'бумага',
          selectedOption: '',
          isNextButtonActive: false,
          options: [
            {
              optionName: 'Писчая'
            }, {
              optionName: 'Munken'
            }, {
              optionName: 'Riso Paper'
            }, {
              optionName: 'Other Paper'
            }, {
              optionName: 'Свой формат'
            }
          ]
        }, {
          stageName: 'резка',
          selectedOption: '',
          isNextButtonActive: true,
          options: [
            {
              optionName: 'Обрезать поля'
            }, {
              optionName: 'Не обрезать поля'
            }
          ]
        }, {
          stageName: 'цвета',
          selectedOption: '',
          isNextButtonActive: false,
          options: [
            {
              optionName: 'Красный'
            }, {
              optionName: 'Синий'
            }, {
              optionName: 'Черный'
            }, {
              optionName: 'Желтый'
            }
          ]
        }, {
          stageName: 'тираж',
          selectedOption: '',
          isNextButtonActive: false,
          options: [
            {
              optionName: 'Тираж'
            }
          ]
        }, {
          stageName: 'цветопробы',
          selectedOption: '',
          isNextButtonActive: false,
          options: [
            {
              optionName: 'Нужны'
            }, {
              optionName: 'Не нужны'
            }
          ]
        }
      ],
      order: {
        format: '',
        paper: '',
        cut: '',
        colors: '',
        amount: '',
        testing: ''
      }
    }
  }

  openCalculator() {
    this.setState({
      currentStage: 'формат',
      currentStageIndex: 0
    })
  }

  setStageFromProgressBar(stage, i) {
    this.setState({
      currentStage: stage,
      currentStageIndex: i
    })
  }

  setFormatSelected(text) {
    const stages = this.state.stages;
    stages[0].selectedOption = text;
    stages[0].isNextButtonActive = true;
    const order = this.state.order;
    order.format = text

    this.setState({
      stages,
      order
    });
  }

  setFormatDeselected() {
    const stages = this.state.stages;
    stages[0].selectedOption = '';
    stages[0].isNextButtonActive = false;
    const order = this.state.order;
    order.format = ''

    this.setState({
      stages,
      order
    });
  }

  setStageToPaper() {
    this.setState({
      currentStage: 'бумага',
      currentStageIndex: 1
    })
  }

  setPaperSelected(text) {
    const stages = this.state.stages;
    stages[1].selectedOption = text;
    stages[1].isNextButtonActive = true;
    const order = this.state.order;
    order.paper = text

    this.setState({
      stages,
      order
    });
  }

  setPaperDeselected() {
    const stages = this.state.stages;
    stages[1].selectedOption = '';
    stages[1].isNextButtonActive = false;
    const order = this.state.order;
    order.paper = ''

    this.setState({
      stages,
      order
    });
  }

  setStageToCut() {
    this.setState({
      currentStage: 'резка',
      currentStageIndex: 2
    })
  }

  setCutSelected(text) {
    const stages = this.state.stages;
    stages[2].selectedOption = text;
    stages[2].isNextButtonActive = true;
    const order = this.state.order;
    order.cut = text

    this.setState({
      stages,
      order
    });
  }

  setCutDeselected() {
    const stages = this.state.stages;
    stages[2].selectedOption = '';
    stages[2].isNextButtonActive = false;
    const order = this.state.order;
    order.cut = ''

    this.setState({
      stages,
      order
    });
  }

  renderPresetsOrForms() {
    const { currentStage, currentStageIndex, stages } = this.state

    let actions = {
      setFormatSelected: this.setFormatSelected,
      setFormatDeselected: this.setFormatDeselected,
      setStageToPaper: this.setStageToPaper,

      setPaperSelected: this.setPaperSelected,
      setPaperDeselected: this.setPaperDeselected,
      setStageToCut: this.setStageToCut,

      setCutSelected: this.setCutSelected,
      setCutDeselected: this.setCutDeselected,
    }

    if (currentStage == 'пресеты') {
      return(
        <Presets openCalculator={ this.openCalculator }/>
      )
    } else {
      return(
        <section>
          <ProgressBar
            stages={ stages }
            currentStage={ currentStage }
            currentStageIndex={ currentStageIndex }
            setStageFromProgressBar={ this.setStageFromProgressBar }
          />
          <Forms
            stages={ stages }
            currentStage={ currentStage }
            currentStageIndex={ currentStageIndex }
            actions={ actions }
          />
          <Checkout/>
        </section>
      )
    }
  }

  renderCalc() {
    const { open } = this.props
    const { currentStage } = this.state

    if (open == true) {
      return (
        <div className='calcPage' id='open'>
          <div className='blockHead' id="toClose" onClick={ this.props.triggerCalc }>
            <h1>КАЛЬКУЛЯТОР</h1>
          </div>
          { this.renderPresetsOrForms() }
        </div>
      )
    } else {
      return (
        <div className='calcPage'>
          <div className='blockHead' id="toOpen" onClick={ this.props.triggerCalc }>
            <h1>КАЛЬКУЛЯТОР</h1>
          </div>
        </div>
      )
    }
  }

  render() {
    return(
      this.renderCalc()
    )
  }
}
