import React, {Component} from 'react';

class App extends Component {

  constructor(props) {
    super(props);
    this.state = {
      hora: '00:00:00'
    }
  }

  componentDidMount() {

    setInterval(() => {
      this.setState({hora: new Date().toLocaleTimeString()})
    }, 1000)

  }

  /*
   componentDidUpdate() {
    alert('Atualizou!')
  } 
  */

  render() {
    return (
      <div>
        <h1>Meu Projeto</h1>
        <h2>{this.state.hora}</h2>
      </div>
    )
  }
}

export default App