import React, { Component } from 'react';
//import Radium, {StyleRoot} from 'radium';
import classes from './App.css';
import Person from './Person/Person';
import UserInput from './UserInput/UserInput';
import UserOutput from './UserOutput/UserOutput';
import ValidationComponent from './ValidationComponent/ValidationComponent';
import CharComponent from './CharComponent/CharComponent';

class App extends Component {
  state = {
    persons: [
      {id:'1', name: 'Max', age: 28},
      {id:'2', name: 'Manu', age: 29},
      {id:'3',name: 'Steph', age:26}
    ],
    username: 'Lola',
    showPersons: false,
    inputString: ''
  }

  nameChangedHandler = (event, id) => {
    const personIndex = this.state.persons.findIndex(p => {return p.id === id;});
    const person = {...this.state.persons[personIndex]};
    person.name = event.target.value;

    const persons = [...this.state.persons];
    persons[personIndex] = person
    this.setState({
      persons: persons
    });
  }

  deletePersonHandler = (personIndex) => {
    const persons = this.state.persons.slice();
    persons.splice(personIndex, 1);
    this.setState({
      persons: persons
    });
  }

  togglePersonsHandler = () => {
    const doesShow = this.state.showPersons;
    this.setState({
      showPersons: !doesShow
    });
  }

  //Tareas
  userInputHandler = (event) => {
    this.setState({
      username: event.target.value
    });
  }

  paragraphHandler = (event) => {
    let inputString = event.target.value
    this.setState({
      inputString: inputString
    });
  }

  deleteCharacterHandler = (charIndex) => {
    let characters = this.state.inputString.split('');
    characters.splice(charIndex, 1);
    this.setState({
      inputString: characters.join('')
    });
  }

  render() {

    let persons = null;
    let btnClass = '';

    if(this.state.showPersons){
      persons = (
        <div>
          {this.state.persons.map((person, index) => {
            return <Person 
              click={() => this.deletePersonHandler(index)}
              name={person.name} 
              age={person.age}
              key={person.id}
              changed = {(event) => this.nameChangedHandler(event, person.id)}/>
          })}
        </div>
      );

      btnClass = classes.Red;
    }

    let assignedClasses = [];

    if(this.state.persons.length <= 2){
      assignedClasses.push(classes.red);
    }
    if(this.state.persons.length <= 2){
      assignedClasses.push(classes.bold);
    }


    //Tareas
    let characters = (<div>
      {this.state.inputString.split('').map((i, idx) => {
        return <CharComponent 
        click={() => this.deleteCharacterHandler(idx)}
        value={i}/>
      })}
    </div>)

    return (
      <div className={classes.App}>
        <h1>Learn React!</h1>
        <p className={assignedClasses.join(' ')}>This is bananas. B A N A N A S</p>
        <button 
          className = {btnClass}
          onClick={this.togglePersonsHandler}>Toggle Persons</button> 
        {persons}
        <UserInput uname={this.state.username} changed={this.userInputHandler}/>
        <UserOutput username={this.state.username}/>
        <input type="text" onChange={this.paragraphHandler} value={this.state.inputString}/>
        <ValidationComponent length={this.state.inputString.length} />
        {characters}
      </div>
    );
  }
}

export default App;
