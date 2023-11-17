//persons is filtered array of persons that gets mapped out to 
//create a div for each person, with their name and number

//remove passes _that_person as an argument to a function in App.jsx

const Person = ({ persons, remove }) => {
  return (
    <>

      {persons.map((person) => (
        <div className="contact" key={person.id}>
          <p>
            {person.name} {person.number}
          </p>
          <button onClick={() => remove(person)}>
            Delete contact
          </button>
        </div>
      ))}
    </>
  );
};

export default Person;
