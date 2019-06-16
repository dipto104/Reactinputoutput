import logo from './logo.svg';
import './App.css';
import Greet from './Components/Greet'
import Welcome from './Components/Welcome'
import React ,{Component} from 'react'

// function App() {

//   return (
//     <div className="App">
//       <header className="App-header">
//         <img src={logo} className="App-logo" alt="logo" />
//         <p>
//                   Edit <code>src/App.js</code> and save to reload.
//                   Hello world        
//         </p>
//         <a
//           className="App-link"
//           href="https://reactjs.org"
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           Learn React
//         </a>
//       </header>



//     </div>
//   );
// }

// class App extends Component{
//   render(){
//     return(
//         <div className="App">
//           //<Greet/>
//           <Welcome/>
//         </div>

//       );
//   }
// }

import Input from './Components/Input'
import Output from './Components/Output'

class App extends Component{
  constructor(props) {
    super(props);
    this.state = {
      value : '',
        arra : []
    };
    this.onChange = this.onChange.bind(this);
  }

  onChange(event) {
    for(var i=1;i<=3;i++){
    for(var j=1;j<=i;j++){
      this.setState(state =>{
            const arra = state.arra.concat("* ");
            return {
              arra,
            };
        });
    }
    this.setState(state =>{
            const arra = state.arra.concat(<br/>);
            return {
              arra,
            };
        });
  }
    
  }


  // constructor(props) {
  //   super(props);
  //   this.state = {
  //     value: ''
  //   };
  //   this.onChange = this.onChange.bind(this);
  // }

  // onChange(event) {
  //   this.setState({
  //     value: event.target.value,
  //   });
  // }
  //return React.createElement('div',null,React.createElement('h1',null,arra))
    render() {
    return (
      



       <div className="App">
      <Input class="form-control" inputvalue={this.state.value} type="number" onChange={this.onChange} />
      <h1><Output dataSource={this.state.arra} /></h1>
      </div>
    );
  }

  
}

export default App;
