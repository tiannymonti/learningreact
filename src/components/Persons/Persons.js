import React, {PureComponent} from 'react'

import Person from './Person/Person';

class Persons extends PureComponent{
    constructor(props){
        super(props);
        console.log('[Persons.js] Inside constructor', props); 
    }
  
    componentWillMount(){
      console.log('[Persons.js] Inside componentWillMount');
    }
  
    componentDidMount(){
      console.log('[Persons.js] Inside componentDidMount');
    }

    // shouldComponentUpdate(nextProps, nextState){
    //   console.log("should component update -> persons.js");
    //   return nextProps.persons !== this.props.persons ||
    //   nextProps.changed !== this.props.changed ||
    //   nextProps.clicked !== this.props.clicked;
    // }

    render(){
        console.log('[Persons.js] Inside render');
        return this.props.persons.map((person, index) => {
            return <Person 
              click={() => this.props.clicked(index)}
              name={person.name} 
              position = {index}
              age={person.age}
              key={person.id}
              changed = {(event) => this.props.changed(event, person.id)}/>
          });
    }
}

export default Persons;