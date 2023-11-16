import { useState, useEffect } from 'react';
import axios from 'axios';
import Person from './components/Person';
import Filter from './components/Filter';
import PersonForm from './components/PersonForm';
import contactService from './services/contacts';

const App = () => {
  const [persons, setPersons] = useState([]);
  const [newName, setNewName] = useState('');
  const [newNumber, setNewNumber] = useState('');
  const [filter, setFilter] = useState('');

  useEffect(() => {
    contactService.getContacts().then((initialContacts) => {
      setPersons(initialContacts);
    });
  }, []);

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
  const handleDeleteClick = (id) => {
    console.log(id);
    const contactToDelete = persons.find((person) => person.id === id);
    contactService
      .deleteContact(id)
      .then(() => {
        setPersons(persons.filter((person) => person.id !== id));
      })
      .catch((error) => {
        console.error('Error deleting person:', error);
      });
  };

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
      <Person persons={filteredNames} handleDeleteClick={handleDeleteClick} />
    </div>
  );
};

export default App;
