import { useState } from 'react';
import Person from './components/Person';
import Filter from './components/Filter';
import './App.css';

const App =(props)=> {
 const [persons, setPersons] = useState(props.persons)
 const [newPerson, setNewPerson] = useState ('')
 const [newNumber, setNewNumber] = useState ('')
 const [filter, setFilter] = useState("");
 const [filteredPersons, setFilteredPersons] = useState(null);

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

 const handleFilter =(event)=> {
  setFilter(event.target.value);
  const filtered = persons.filter((person) => 
  person.name.toLowerCase().includes(event.target.value.toLowerCase())
  );
  setFilteredPersons(filtered)
 }

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
    <p>Filter shown with  <input type="text" value={filter} onChange={handleFilter}/></p>
    <ul>
   
       
    <Filter filter={filter} />
 
    </ul>
    </div>
    <ul>
      {persons.map(person => 
         <Person key={person.id} person={person} />
         )}  
    </ul>  
    <form onSubmit={addPerson}>
     <div> name <input 
        value={newPerson}
        onChange={handleNewPerson}
      /> </div>
      <div>
       number <input 
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