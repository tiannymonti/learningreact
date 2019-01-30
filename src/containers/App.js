import React, { PureComponent } from 'react';
//import Radium, {StyleRoot} from 'radium';
import classes from './App.css';
import Persons from '../components/Persons/Persons';
import Cockpit from '../components/Cockpit/Cockpit';
import withClass from '../hoc/WithClass';
import Auxiliary from '../hoc/Auxiliary';
//import ErrorBoundary from '../ErrorBoundary/ErrorBoundary'

export const AuthContext = React.createContext(false);

class App extends PureComponent {
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
      toggleClicked: 0,
      authenticated: false
    };
  }

  componentWillMount(){
    console.log('[App.js] Inside componentWillMount');
  }

  componentDidMount(){
    console.log('[App.js] Inside componentDidMount');
  }

  static getDerivedStateFromProps(nextProps, prevState){
    console.log("UPDATE Appjs Use this instead of componentWillUpdate", nextProps, prevState);
  }

  getSnapshotBeforeUpdate(){
    console.log("Before update Appjs. You can save before the dom changes");
  }

  // shouldComponentUpdate(nextProps, nextState){
  //   console.log('Should update');
  //   return nextState.persons !== this.state.persons ||
  //   nextState.showPersons !== this.state.showPersons;
  // }
  
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

  
  loginHandler = () => {
    this.setState({authenticated : true})
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
    this.setState((prevState, props) => {
      return {
        showPersons: !doesShow,
        toggleClicked: prevState.toggleClicked +1
      }
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
      <Auxiliary>
        <button onClick={() => {this.setState({showPersons: true})}}>Show persons</button>
        <Cockpit 
         showTitle = {this.props.title}
         showPersons={this.state.showPersons} 
         persons={this.state.persons}
         login = {this.loginHandler}
         clicked={this.togglePersonsHandler}/>
         <AuthContext.Provider value={this.state.authenticated}>
          {persons}
        </AuthContext.Provider>
      </Auxiliary>
    );
  }
}

export default withClass(App, classes.App);
