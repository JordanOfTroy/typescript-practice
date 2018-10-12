// Line 2: * is used instead of react, because this is a more explicit version of saying we want everything from React
import * as React from 'react';
import './App.css';

const scaleNames = {
  c: 'Celsius',
  f: 'Fahrenheit'
}

//In TypeScript, interfaces fill the role of naming these types, and are a powerful way of defining contracts within your code as well as contracts with code outside of your project.

interface TemperatureState {
  temperature: string,
  toggle: boolean,
  newtemperature: string

}

interface TemperatureProps {
  scale?: string;
}

// Line 8: We need to use dot notation, due to the initial import on line 2
class App extends React.Component<TemperatureProps, TemperatureState>{
  constructor(props: TemperatureProps) {
    super(props)
    this.state = {
      temperature: '50',
      toggle: false,
      newtemperature: ''
    }
    this.handleChange = this.handleChange.bind(this)
    this.handleButton = this.handleButton.bind(this)
    this.handleButton2 = this.handleButton2.bind(this)
    this.changeTemp = this.changeTemp.bind(this)
  }


  handleChange(e: React.ChangeEvent<HTMLInputElement>) {
    this.setState({ temperature: e.target.value })
    // console.log(this.state.temperature)
  }

  handleButton(){
    if( this.state.toggle === true){
      this.setState({
        toggle: false
      })
    }
  }

  handleButton2(){
    if (this.state.toggle === false){
    this.setState({
      toggle: true
    })}
  }

  changeTemp(){
    if(this.state.toggle === false){
      let math = ((Number(this.state.temperature)-32)*(5/9)).toFixed(2)
      return `${math} Celsius`
    } else {
      return `${this.state.temperature} Fahrenheit`
    }
  }

  public render() {
    const temperature = this.state.temperature
    const scale = this.props.scale
    // const toggle = this.state.toggle
    // console.log(this.props.scale)
    console.log(this.state.toggle)

    return (
      <div>
        <fieldset>
          <legend>Enter temperature in {scaleNames[scale!]}:</legend>
          <input value={temperature} onChange={this.handleChange} type="text" /> <br />
          <button onClick={this.handleButton}>Show Me in Celcius</button> <br />
          <button onClick={this.handleButton2}>Show Me in Fahrenheit</button> <br />

          <p>{this.changeTemp()}</p>
        </fieldset>
      </div>
    );
  }
}

export default App;
