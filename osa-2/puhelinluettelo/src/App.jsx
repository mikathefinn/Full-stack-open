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

    // some stops iterating the array when it finds the first match
    const alreadyExists = persons.some((person) => person.name.toLowerCase() === newName.toLocaleLowerCase());
    if (alreadyExists) {
      alert(`The name ${newName} has already been added to the phonebook`);
    } else {
      // If the name doesn't exist, create a new person object and update the state
      const personObj = {
        name: newName,
        number: newNumber,
      };
      //use service to create a new person object in database
      contactService
        .create(personObj)
        .then((returnedPerson) => {
          setPersons(persons.concat(returnedPerson));
        })
        .catch((error) => {
          console.error('Could not create a new contact', error);
        });

      //set the forms back to empty
      setNewName('');
      setNewNumber('');
    }
  };

  //functions for form input changes
  const handleNameChange = (event) => {
    setNewName(event.target.value);
  };
  const handleNumberChange = (event) => {
    setNewNumber(event.target.value);
  };

  //set filter to whatever is in the filter form
  const handleFiltering = (event) => {
    setFilter(event.target.value);
  };
  const filteredNames = persons.filter((person) =>
    person.name.toLowerCase().includes(filter.toLowerCase())
  );

  const handleDeleteClick = (person) => {
    console.log(person.id);
    if(window.confirm(`Delete ${person.name}?`)){
    contactService
      .deleteContact(person.id)
      .then(() => {
        setPersons(persons.filter((p) => p.id !== person.id));
      })
      .catch((error) => {
        console.error('Error deleting person:', error);
      });
    }
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
