import React, { Component } from 'react';
import './App.css';
import Person from './Person/Person.js';

class App extends Component {
  constructor(){
    super();
    this.state = {
      persons: [
        {name: 'Redwan', age: 18},
        {name: 'Manu', age: 29},
        {name: 'jawad', age: 24},
      ],
      showall: false,
      hideUserOne: true,
      hideUserTwo: true,
      hideUserThree: true,
    }
  }

  switchNameHandler = (newName) =>{
    this.setState({
      persons: [
        {name: 'Redwan', age: 18},
        {name: 'Manu', age: 29},
        {name: newName, age: 24},
      ]
    })
  }

  nameChangedHandler = (event) =>{
    this.setState({
      persons: [
        {name: 'Redwan', age: 18},
        {name: event.target.value, age: 29},
        {name: 'jawad', age: 24},
      ]
    })
  }

  show = () =>{
    const switchShowall = this.state.showall;
    this.setState({
      showall: !switchShowall,
    })
  }

  render() {

    const style = {
      backgroundColor: 'red',
      font: 'inherit',
      color: 'white',
      border: '1px solid blue',
      padding: '8px',
    }

    let people = null;
    if(this.state.showall === true){
      people = (
        <div>
          <Person click={this.switchNameHandler.bind(this, 'dawaj')} name={this.state.persons[0].name} age={this.state.persons[0].age}/>
          <Person changed={this.nameChangedHandler} name={this.state.persons[1].name} age={this.state.persons[1].age}/>
          <Person name={this.state.persons[2].name} age={this.state.persons[2].age}/>
        </div>
      );
    }

    return (
      <div className="App">

      {/* what is .bind........... learn more about it */}

        <button style={style} onClick={this.show}>Show All</button>
        {people}
      </div>
    );
  }
}

export default App;


// userOne = () =>{
//   const deltOne = this.state.hideUserOne;
//   this.setState({
//     hideUserOne: ! deltOne,
//   })
// }
//
// userTwo = () =>{
//   const deltTwo = this.state.hideUserTwo;
//   this.setState({
//     hideUserTwo: ! deltTwo,
//   })
// }
//
// userThree = () =>{
//   const deltThree = this.state.hideUserThree;
//   this.setState({
//     hideUserThree: !deltThree,
//   })
// }

//////////////////////////////////

// { this.state.hideUserOne === true ?
//   <div>
//     <Person click={this.switchNameHandler.bind(this, 'dawaj')} name={this.state.persons[0].name} age={this.state.persons[0].age}/>
//     <button onClick={this.userOne}>Delete Redwan</button>
//   </div> : null
// }
//
//
// { this.state.hideUserTwo === true ?
//   <div>
//     <Person changed={this.nameChangedHandler} name={this.state.persons[1].name} age={this.state.persons[1].age}/>
//     <button onClick={this.userTwo}>Delete Manu</button>
//   </div> : null
// }
//
// {this.state.hideUserThree === true ?
//   <div>
//     <Person name={this.state.persons[2].name} age={this.state.persons[2].age}/>
//     <button onClick={this.userThree}>Delete Jawad</button>
//   </div> : null
// }
