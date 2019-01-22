import React, { Component } from 'react';
//import Radium, {StyleRoot} from 'radium';
import classes from './App.css';
import Persons from '../components/Persons/Persons';
import Cockpit from '../components/Cockpit/Cockpit';
//import ErrorBoundary from '../ErrorBoundary/ErrorBoundary'

class App extends Component {
  constructor(props){
    super(props);
    console.log('[App.js] Inside constructor', props); 
    this.state = {
      persons: [
        {id:'1', name: 'Max', age: 28},
        {id:'2', name: 'Manu', age: 29},
        {id:'3',name: 'Steph', age:26}
      ],
      showPersons: false,
    };
  }

  componentWillMount(){
    console.log('[App.js] Inside componentWillMount');
  }

  componentDidMount(){
    console.log('[App.js] Inside componentDidMount');
  }
  
  // state = {
  //   persons: [
  //     {id:'1', name: 'Max', age: 28},
  //     {id:'2', name: 'Manu', age: 29},
  //     {id:'3',name: 'Steph', age:26}
  //   ],
  //   showPersons: false,
  // }

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


  render() {
    console.log('[App.js] inside render');

    let persons = null;

    if(this.state.showPersons){
      persons = <Persons
        persons={this.state.persons}
        clicked={this.deletePersonHandler}
        changed={this.nameChangedHandler}  />;
    }

    return (
      <div className={classes.App}>
        <Cockpit 
         showTitle = {this.props.title}
         showPersons={this.state.showPersons} 
         persons={this.state.persons}
         clicked={this.togglePersonsHandler}/>
        {persons}
      </div>
    );
  }
}

export default App;
