import React from 'react';
import logo from './logo.svg';
import './App.css';



//Componentes funcionales
//Componentes sin estado
//Componente tipo funcion
//

class App extends React.Component{
  state = {
    valor: 1,
    error: true,
    input: '',
  }
  handler = (event) => {
    this.setState({input: event.target.value})
  }
  render(){
    return(
      <div>
        <h1>Repetidor</h1>
        <div>
          <input name= "name" type="text" onChange={this.handler}/>
          <div><p className= "repeater">{this.state.input}</p></div>
        </div>
      </div>
    )
  }
}



export default App;
