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
    this.setStageToColors = this.setStageToColors.bind(this)

    this.setColorsSelected = this.setColorsSelected.bind(this)
    this.setColorsDeselected = this.setColorsDeselected.bind(this)
    this.setStageToAmount = this.setStageToAmount.bind(this)

    this.setAmountSelected = this.setAmountSelected.bind(this)
    this.setAmountDeselected = this.setAmountDeselected.bind(this)
    this.setStageToFiles = this.setStageToFiles.bind(this)

    this.setFilesSelected = this.setFilesSelected.bind(this)
    this.setFilesDeselected = this.setFilesDeselected.bind(this)
    this.setStageToTesting = this.setStageToTesting.bind(this)

    this.setTestingColorsSelected = this.setTestingColorsSelected.bind(this)
    this.setTestingColorsDeselected = this.setTestingColorsDeselected.bind(this)

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
              optionName: 'Своя бумага'
            }, {
              optionName: 'Munken 90 GSM',
              textureImage: 'texture1',
              colors: [
                {
                  name: 'Pink',
                  hex: '#FF6CFF'
                }, {
                  name: 'Yellow',
                  hex: '#F4FF6C'
                }
              ]
            }, {
              optionName: 'Munken 120 GSM'
            }, {
              optionName: 'Munken 160 GSM'
            }, {
              optionName: 'Munken 180 GSM'
            }, {
              optionName: 'Paper Paper 90 GSM'
            }, {
              optionName: 'Paper Paper 100 GSM'
            }, {
              optionName: 'Paper Paper 120 GSM'
            }, {
              optionName: 'Paper Paper 160 GSM'
            }, {
              optionName: 'Some Paper 90 GSM'
            }, {
              optionName: 'Some Paper 100 GSM'
            }, {
              optionName: 'Some Paper 120 GSM'
            }, {
              optionName: 'Some Paper 160 GSM'
            }, {
              optionName: 'Random Paper 90 GSM'
            }, {
              optionName: 'Random Paper 100 GSM'
            }, {
              optionName: 'Random Paper 120 GSM'
            }, {
              optionName: 'Random Paper 200 GSM'
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
          selectedOptions: [],
          isNextButtonActive: false,
          options: [
            {
              optionName: 'Красный',
              color: 'red'
            }, {
              optionName: 'Синий',
              color: 'blue'
            }, {
              optionName: 'Черный',
              color: 'black'
            }, {
              optionName: 'Желтый',
              color: 'yellow'
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
          stageName: 'подготовка файлов',
          selectedOption: '',
          isNextButtonActive: false,
          options: [
            {
              optionName: 'Цветоделение и треппинг'
            }, {
              optionName: 'Цветокоррекция'
            }, {
              optionName: 'Я подготовлю файлы самостоятельно'
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
        colors: [],
        amount: '',
        fileshelp: '',
        testingColors: ''
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

  setStageToColors() {
    this.setState({
      currentStage: 'цвета',
      currentStageIndex: 3
    })
  }

  setColorsSelected(text) {
    const stages = this.state.stages;
    stages[3].selectedOptions.push(text);
    if (stages[3].selectedOptions != '') {
      stages[3].isNextButtonActive = true;
    } else {
      stages[3].isNextButtonActive = false;
    }
    const order = this.state.order;
    order.colors.push(text);

    this.setState({
      stages,
      order
    });
  }

  setColorsDeselected(text) {
    const stages = this.state.stages;
    const selOpts = stages[3].selectedOptions;
    const index = selOpts.indexOf(text);
    if (index !== -1) {
      selOpts.splice(index, 1);
    }
    if (stages[3].selectedOptions != '') {
      stages[3].isNextButtonActive = true;
    } else {
      stages[3].isNextButtonActive = false;
    }
    const order = this.state.order;
    const orderColors = order.colors
    const index2 = orderColors.indexOf(text);
    if (index2 !== -1) {
      orderColors.splice(index2, 1);
    }

    this.setState({
      stages,
      order
    });
  }

  setStageToAmount() {
    this.setState({
      currentStage: 'тираж',
      currentStageIndex: 4
    })
  }

  setAmountSelected(text) {
    const stages = this.state.stages;
    stages[4].selectedOption = text;
    stages[4].isNextButtonActive = true;
    const order = this.state.order;
    order.amount = text

    this.setState({
      stages,
      order
    });
  }

  setAmountDeselected() {
    const stages = this.state.stages;
    stages[4].selectedOption = '';
    stages[4].isNextButtonActive = false;
    const order = this.state.order;
    order.amount = ''

    this.setState({
      stages,
      order
    });
  }

  setStageToFiles() {
    this.setState({
      currentStage: 'подготовка файлов',
      currentStageIndex: 5
    })
  }

  setFilesSelected(text) {
    const stages = this.state.stages;
    stages[5].selectedOption = text;
    stages[5].isNextButtonActive = true;
    const order = this.state.order;
    order.fileshelp = text

    this.setState({
      stages,
      order
    });
  }

  setFilesDeselected() {
    const stages = this.state.stages;
    stages[5].selectedOption = '';
    stages[5].isNextButtonActive = false;
    const order = this.state.order;
    order.fileshelp = ''

    this.setState({
      stages,
      order
    });
  }

  setStageToTesting() {
    this.setState({
      currentStage: 'цветопробы',
      currentStageIndex: 6
    })
  }

  setTestingColorsSelected(text) {
    const stages = this.state.stages;
    stages[6].selectedOption = text;
    stages[6].isNextButtonActive = true;
    const order = this.state.order;
    order.testingColors = text

    this.setState({
      stages,
      order
    });
  }

  setTestingColorsDeselected() {
    const stages = this.state.stages;
    stages[6].selectedOption = '';
    stages[6].isNextButtonActive = false;
    const order = this.state.order;
    order.testingColors = ''

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
      setStageToColors: this.setStageToColors,

      setColorsSelected: this.setColorsSelected,
      setColorsDeselected: this.setColorsDeselected,
      setStageToAmount: this.setStageToAmount,

      setAmountSelected: this.setAmountSelected,
      setAmountDeselected: this.setAmountDeselected,
      setStageToFiles: this.setStageToFiles,

      setFilesSelected: this.setFilesSelected,
      setFilesDeselected: this.setFilesDeselected,
      setStageToTesting: this.setStageToTesting,

      setTestingColorsSelected: this.setTestingColorsSelected,
      setTestingColorsDeselected: this.setTestingColorsDeselected,
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
