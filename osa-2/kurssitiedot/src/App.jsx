const Header = ({ name }) => {
  return <h1>{name}</h1>;
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
const sum = parts.reduce((total, part) => total+part.exercises, 0)
// total = accumulator, part = currentValua
// 0 is the initial value for the accumulator
  return <p>total number of exercises is {sum}</p>;
};

const Course = ({ course }) => {
  console.log(course);
  return (
    <div>
      <Header name={course.name} />

      {course.parts.map((part) => (
        <Part key={part.id} part={part} />
      ))}
      <Total parts={course.parts} />
    </div>
  );
};

const App = () => {
  const course = {
    name: 'Half Stack application development',
    id: 1,
    parts: [
      {
        name: 'Fundamentals of React',
        exercises: 10,
        id: 1,
      },
      {
        name: 'Using props to pass data',
        exercises: 7,
        id: 2,
      },
      {
        name: 'State of a component',
        exercises: 14,
        id: 3,
      },
    ],
  };

  return (
    <div>
      <Course course={course} />
    </div>
  );
};

export default App;
