import { useState } from 'react';
import './App.css';

const App =()=> {
  const [persons, setPersons] = useState([
    { name: 'Arto Hellas' },
    { name: 'Kuu Kuu' }
  ])
  const [newName, setNewName] = useState('');

  return (
    <div>
      <h2>Phonebook</h2>
      <form>
        <div>
          name: <input />
        </div>
        <div>
          <button type="submit">add</button>
        </div>
      </form>
      <h2>Numbers</h2>
      <ul>
        {persons.map(person => <li>{person.name}</li>)}
      </ul>
      
    </div>
  );
}

export default App;
