import { useState } from 'react';
import Person from './components/Person';

const App = () => {
  const [persons, setPersons] = useState([{ name: 'Arto Hellas' }]);
  const [newName, setNewName] = useState('');

  const addPerson = (event) => {
    event.preventDefault();

    const alreadyExists = persons.some((person) => person.name === newName);
    console.log(alreadyExists);

    if (alreadyExists) {
      alert(`The name ${newName} already exists`);
    } else {
      const personObj = {
        name: newName,
      };
      setPersons(persons.concat(personObj));
      setNewName('');
    }
  };

  const handleNameChange = (event) => {
    console.log(event.target.value);
    setNewName(event.target.value);
  };

  return (
    <div>
      <h2>Phonebook</h2>
      <form onSubmit={addPerson}>
        <div>
          name: <input value={newName} onChange={handleNameChange} />
        </div>
        <div>
          <button type="submit">add</button>
        </div>
      </form>
      <h2>Numbers</h2>
      <Person persons={persons} />
    </div>
  );
};

export default App;
