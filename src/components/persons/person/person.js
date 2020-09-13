import React, { Component } from 'react';
import styles from './person.module.css'
import PropTypes from 'prop-types';

class EachPerson extends Component{

   divRef = React.createRef();

   componentDidMount() {
    this.divRef.current.focus();
 }  
   componentDidUpdate() {
      this.divRef.current.focus();
   }   
        
    

    render() {
        return (

            <div className={styles.person} >
                <h2 onClick={this.props.delete}>{this.props.name}</h2>
                <p>My name is {this.props.name} and age is {this.props.age}</p>
                <input type="text" ref={this.divRef} value={this.props.currentName} onChange={this.props.changeName} />
            </div>
        )
    }
}
EachPerson.propTypes = {
    age : PropTypes.number
}
export default EachPerson;