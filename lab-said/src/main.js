import './styles/main.scss';
import React from 'react';
import ReactDom from 'react-dom';
import faker from 'faker';
import cowsay from 'cowsay-browser';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      cows:[],
      current:'',
      content: cowsay.say({text: 'click the button or select a cow!'}),
    };
    this.handleClick = this.handleClick.bind(this);
  }

  componentWillMount(){
    cowsay.list((err, cows) =>{
      let current=cows[0];
      this.setState({ cows: cows, current:current});
    }
);

  }

  handleClick(e) {
    let current=e.target.value;
    let text = faker.hacker.phrase();
    this.setState({current,
      content: cowsay.say({text,f: current})});
  }



  render(){
    return (
      <div>
        <Navebar />
        <select onChange={this.handleClick}>
        {this.state.cows.map((cow, i)=> {
          return <option key={i} value={cow}>{cow}</option>;
        }
      )}</select>
        <button onClick={this.handleClick}> click here! </button>
        <pre>
          <code>
            {this.state.content}
          </code>
        </pre>
      </div>
    );
  }
}

class Navebar extends React.Component {
  render() {
    return (
      <header calassName="app-header">
        <h1> Generate Cool Cowsay Lorem </h1>
      </header>
    );
  }
}

ReactDom.render(<App />, document.getElementById('root'));
