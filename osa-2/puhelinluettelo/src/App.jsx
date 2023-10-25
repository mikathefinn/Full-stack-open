import { useState } from 'react';
import Person from './components/Person';
import Filter from './components/Filter';
import PersonForm from './components/PersonForm'
const App = () => {
  const [persons, setPersons] = useState([
    { name: 'Arto Hellas', number: '040-123456' },
    { name: 'Ada Lovelace', number: '39-44-5323523' },
    { name: 'Dan Abramov', number: '12-43-234345' },
    { name: 'Mary Poppendieck', number: '39-23-6423122' },
  ]);
  const [newName, setNewName] = useState('');
  const [newNumber, setNewNumber] = useState('');
  const [filter, setFilter] = useState('');

  const addPerson = (event) => {
    event.preventDefault();

    const alreadyExists = persons.some((person) => person.name === newName);
    console.log(alreadyExists);

    if (alreadyExists) {
      alert(`The name ${newName} has already been added to the phonebook`);
    } else {
      const personObj = {
        name: newName,
        number: newNumber,
      };
      setPersons(persons.concat(personObj));
      setNewName('');
      setNewNumber('');
    }
  };

  const handleNameChange = (event) => {
    console.log(event.target.value);
    setNewName(event.target.value);
  };
  const handleNumberChange = (event) => {
    setNewNumber(event.target.value);
  };
  const handleFiltering = (event) => {
    setFilter(event.target.value);
  };
  const filteredNames = persons.filter((person) =>
    person.name.toLowerCase().includes(filter.toLowerCase())
  );
  console.log(filteredNames);

  return (
    <div>
      <h2>Phonebook</h2>
      <Filter filter={filter} handleFiltering={handleFiltering} />

      <h2>Add a new</h2>
      <PersonForm
        addPerson={addPerson}
        newName={newName}
        handleNameChange={handleNameChange}
        newNumber={newNumber}
        handleNumberChange={handleNumberChange}
      />

      <h2>Numbers</h2>
      <Person persons={filteredNames} />
    </div>
  );
};

export default App;
