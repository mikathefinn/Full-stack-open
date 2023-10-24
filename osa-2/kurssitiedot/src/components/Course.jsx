const Header = () => {
    return <h1>Web development curriculum</h1>;
  };
  const Header2 = ({ name }) => {
    return <h2>{name}</h2>;
  };
  
  const Part = ({ part }) => {
    return (
      <p>
        {part.name} {part.exercises}
      </p>
    );
  };
  
  const Total = ({ parts }) => {
    console.log({ parts });
  
    // let sum = 0;
  
    // for (const part of parts) {
    //   sum += part.exercises;
    // }
    const sum = parts.reduce((total, part) => total + part.exercises, 0);
    // total = accumulator, part = currentValua
    // 0 is the initial value for the accumulator
    return <p>total number of exercises is {sum}</p>;
  };
  
  const Course = ({ course }) => {
    console.log(course);
    return (
      <div>
        <Header />
        <Header2 name={course[0].name} />
  
        {course[0].parts.map((part) => (
          <Part key={part.id} part={part} />
        ))}
        <Total parts={course[0].parts} />
  
        <Header2 name={course[1].name} />
        {course[1].parts.map((part) => (
          <Part key={part.id} part={part} />
        ))}
        <Total parts={course[1].parts} />
      </div>
    );
  };

  export default Course