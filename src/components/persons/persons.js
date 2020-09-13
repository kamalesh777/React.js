import React, { Component } from 'react';
import Person from './person/person'


const persons = (props) => props.persons.map((person, index) => {
    return <Person 
            name={person.name}
            age={person.age}
            key={index}
            changeName={(event) => props.changeName(event, person.id)}
            currentName={person.name}
            delete={()=>props.delete(index)}
            
        />
    
})

export default persons;