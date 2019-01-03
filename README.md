### Rendering Content Conditionally 
1st: setup the state with any data, and a Boolean varable set it to false 

ex: 
constructor(){
  super();
  this.state = {
    people: [
      {name: 'Redwan', age: 18},
      {name: 'Manu', age: 29},
      {name: 'jawad', age: 24},
    ],
    showall: false
  }
}
