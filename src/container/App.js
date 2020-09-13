import React, { Component } from 'react';
import styles from './App.module.css';
import Persons from '../components/persons/persons';
import Cockpit from '../components/cockpit/cockpit';

class App extends Component {
  
  state = {
    persons : [
        { name: "Kamalesh", age:26, id:"id1" },
        { name: "Seraj", age: 29, id:"id2" },
        { name: "Ankit", age:28, id:"id3" },
    ],
    isToggle : false
  }
  
  toggleHandler = () => {
    this.setState(state => ({
      isToggle: !state.isToggle
    }))
  }

  nameChangeHandler = (event, id) => {
    let findPerson = this.state.persons.findIndex((p)=> {
      return p.id === id
    })
    this.setState({
      ...this.state.persons[findPerson].name = event.target.value
    })
    // console.log(this.state.persons)
    
  }
  deleteHandler = (index) => {
    let persons = [...this.state.persons];
    persons.splice(index, 1);
    this.setState({
      persons
    })
  }

  render() {
    let persons = null;

    if (this.state.isToggle) {
      persons = (
        <Persons 
          persons={this.state.persons} 
          isToggle={this.state.isToggle}
          changeName={this.nameChangeHandler}
          delete={this.deleteHandler}
        />
      )
    }
    
    return (
      <div className={styles.app}>
        <Cockpit toggleBtn={this.toggleHandler} isToggle={this.state.isToggle}/>
        {persons}
      </div>
    );
  }
}

export default App;
