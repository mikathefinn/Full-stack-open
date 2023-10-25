const Person = ({ persons }) => {
    return (
      <div>
        {persons.map((person) => (
          <p key={person.name}>{person.name}</p>
          // HAS TO BE MAPPED TO PRING IT OUT
        ))}
      </div>
    );
  };
export default Person;
