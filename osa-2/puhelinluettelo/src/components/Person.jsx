const Person = ({ persons, handleDeleteClick }) => {
  return (
    <>
      {persons.map((person) => (
        <div className="contact" key={person.id}>
          <p>
            {person.name} {person.number}
          </p>
          <button onClick={() => handleDeleteClick(person)}>
            Delete contact
          </button>
        </div>
      ))}
    </>
  );
};

export default Person;
