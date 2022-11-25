import React, { useState } from 'react';
import Person from './components/Person';
import './App.css';

const App =(props)=> {
 const [persons, setPersons] = useState('')
/* ([
  { name: 'Arto Hellas', number: '040-123456' },
  { name: 'Ada Lovelace', number: '39-44-5323523' },
  { name: 'Dan Abramov', number: '12-43-234345' },
  { name: 'Mary Poppendieck', number: '39-23-6423122' }
]) */
 const [newPerson, setNewPerson] = useState ('')
 const [newNumber, setNewNumber] = useState ('')
 const [filter, setFilter] = useState("");
 //const [filteredPersons, setFilteredPersons] = useState(null);

// const checkPerson = () => persons.some(a => a.name === newPerson)
// const checkPerson = persons.find(( {name} ) => name === newPerson) 

 const addPerson = (event) => {
  event.preventDefault()

 if (persons.find(( {name} ) => name === newPerson)) {
  alert(`${newPerson} already exists`)
  setNewPerson('')
  setNewNumber('')
  }
  else { 
 // if(checkPerson(newPerson)) {
   // if (window.confirm(`${newPerson} already exists`)) } {
  /* if (checkPerson(newPerson)) {
    alert(`${newPerson} already exists`)
    setNewPerson('')
  } */
  const personObject = {
    name: newPerson,
    number: newNumber,
    id: persons.length + 1
  }
  setPersons(persons.concat(personObject))
  setNewPerson('')
  setNewNumber('')
 }
 }

 const handleFilterChange =(event)=> {
  setFilter(event.target.value);
  //const filtered = persons.filter((person) => 
  //person.name.toLowerCase().includes(event.target.value.toLowerCase())
  //);
  //setFilteredPersons(filtered)
 }

 const personsToShow = filter ===""
  ? persons
  : persons.filter(person =>
      person.name.toLowerCase().includes(filter.toLowerCase())) 
      const row_names =()=> personsToShow.map(person => 
        <p key={person.name}>{person.name} {person.number}</p>
        )
    

 const handleNewPerson = (event) => {
  setNewPerson(event.target.value)
 }

 const handleNewNumber = (event) => {
  setNewNumber(event.target.value)
 }

return (
<div>
    <h1>Phonebook</h1>
    <div>
    Filter shown with  <input value={filter} onChange={handleFilterChange}/>
   
    </div>
    <form onSubmit={addPerson}>
     <div> name : <input value={newPerson}
                  onChange={handleNewPerson}
       />
      </div>
      <div>
       <h2>number </h2><input 
        value={newNumber}
        onChange={handleNewNumber}
      /> </div>
      <div>
      <button type="submit">save</button>
      </div>
    </form>
  </div>
)
}

export default App;

/* <ul>
      {persons.map(person => 
         <Person key={person.id} person={person} />
         )}  
    </ul> */  

/*import React from "react";

const InputField = ({ htmlFor, label, type, value, onChange }) => (
  <div>
    <label className="label" htmlFor={htmlFor}>
      {label}
    </label>
    <input
      type={type}
      className="input"
      id={htmlFor}
      value={value}
      onChange={onChange}
    />
  </div>
);

export default InputField; */


/* const [ newFilter, setNewFilter ] = useState('')

const handleFilterChange = (event) => {
  setNewFilter(event.target.value)
}

const personsToShow = newFilter ?
  persons.filter(person => person.name.toLowerCase().includes(newFilter)) :
  persons

return (
  <div>
    filter shown with <input type="text" value={newFilter} onChange={handleFilterChange} />
    </div> */