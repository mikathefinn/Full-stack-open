import { useState, useEffect } from 'react';
import axios from 'axios';
import Person from './components/Person';
import Filter from './components/Filter';
import PersonForm from './components/PersonForm';
import Notification from './components/Notification';
import contactService from './services/contacts';
import './index.css';

const App = () => {
  const [persons, setPersons] = useState([]);
  const [newName, setNewName] = useState('');
  const [newNumber, setNewNumber] = useState('');
  const [filter, setFilter] = useState('');
  const [notification, setNotification] = useState('');

  useEffect(() => {
    contactService.getContacts().then((initialContacts) => {
      setPersons(initialContacts);
    });
  }, []);

 

  const addPerson = (event) => {
    event.preventDefault();

    const alreadyExists = persons.find(
      (person) => person.name.toLowerCase() === newName.toLocaleLowerCase()
    );
    if (alreadyExists) {
      // if alreeadyExists, check if the number exists
      if (alreadyExists.number !== newNumber) {
        // If not the same number, should it be updated?
        if (
          window.confirm(
            `Update the number for ${alreadyExists.name} to ${newNumber}`
          )
        ) {
          // use service to update JUST the number
          contactService
            .update(alreadyExists.id, { ...alreadyExists, number: newNumber })
            .then((updatedPerson) => {
              setPersons(
                persons.map((person) =>
                  person.id === updatedPerson.id ? updatedPerson : person
                )
              );
              setNotification(updatedPerson.name + "'s number was updated succesfully");
            })
            .catch((error) => {
              console.error('Could not update', error);
              setNotification(alreadyExists.name + ' was already removed from the server')
              setPersons(persons.filter(p=>p.id!==person.id))
            });
        }
      } else {
        //Number is the same, name is the same
        alert(`${newName} is already in the phonebook with the same number`);
      }
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
          // added(returnedPerson.name);
          setNotification(returnedPerson.name + ' was added succsfully')
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
    if (window.confirm(`Delete ${person.name}?`)) {
      contactService
        .deleteContact(person.id)
        .then(() => {
          setPersons(persons.filter((p) => p.id !== person.id));
          setNotification(person.name + ' was deleted succesfully!');
        })
        .catch((error) => {
          console.error('Error deleting person:', error);
        });
    }
  };

  return (
    <div>
      <h2>Phonebook</h2>
      <Notification message={notification} />
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
      <Person persons={filteredNames} remove={handleDeleteClick} />
    </div>
  );
};

export default App;
