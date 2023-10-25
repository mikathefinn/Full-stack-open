const Person = ({ persons }) => {
    return (
      <div>
        {persons.map((person, index) => (
          <p key={index}>{person.name} {person.number}</p>
          // HAS TO BE MAPPED TO PRING IT OUT
        ))}
      </div>
    );
  };
export default Person;
