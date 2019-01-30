import React, {Component} from 'react';
import PropTypes from 'prop-types'
import classes from './Person.css';
import Auxiliary from '../../../hoc/Auxiliary';
import withClass from '../../../hoc/WithClass';
import {AuthContext} from '../../../containers/App'; 

class Person extends Component {

    componentDidMount() {
        console.log('[Person.js] Inside componentDidMount');
        if(this.props.position === 0){
            this.inputElement.focus();
        }
    }

    render(){
        return(
            <Auxiliary>
                <AuthContext.Consumer>
                    {auth => auth ? <p>I'm in</p> : <p>I'm not</p>}
                </AuthContext.Consumer>
               
                <p onClick={this.props.click}>I'm {this.props.name} and I'm {this.props.age} year old</p>
                <p>{this.props.children}</p>
                <input 
                    ref = {(inp) => {this.inputElement = inp}}
                    type="text" 
                    onChange={this.props.changed} 
                    value={this.props.name }/>
            </Auxiliary>
        )
    }
}

Person.PropTypes = {
    click: PropTypes.func,
    name: PropTypes.string,
    age: PropTypes.number,
    changed: PropTypes.func 
}

export default withClass(Person, classes.Person);