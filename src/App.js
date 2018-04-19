import React, { Component } from 'react';
import './App.css';
import Datalist from './component/Datalist'

let list = [
  '000001',
  '000002',
  '600000',
  '600001',
  '600002',
  '600100',
]

class App extends Component {
  
  constructor(props){
    super(props);

    this.onChangeCode = this.onChangeCode.bind(this)

    this.state = {
      code: '',
    }
  }

  onChangeCode(code, event){
    let val = code || event.target.value;
    this.setState({
      code: val
    })
  }

  render() {
    let code = this.state.code;

    return (
      <div className="App">

        <div className="demo">
          <div className="demo_content">
            <input type="text" placeholder="input code" value={code} onChange={this.onChangeCode.bind(this, null)} />
            <Datalist
              val={code}
              list={list}
              setVal={this.onChangeCode}
            />
          </div>
        </div>
        <div className="tips">
          Input 000001
        </div>
      </div>
    );
  }
}

export default App;
