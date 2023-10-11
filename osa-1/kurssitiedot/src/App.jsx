const course = {
  name: 'Half Stack application development',
  parts: [
    {
      name: 'Fundamentals of React',
      exercises: 10,
    },
    {
      name: 'Using props to pass data',
      exercises: 7,
    },
    {
      name: 'State of a component',
      exercises: 14,
    },
  ],
};
const Header = (props) => {
  console.log(props);
  return (
    <>
      <h1>{props.course}</h1>
    </>
  );
};

const Part = (props) => {
  console.log(props);
  return (
    <>
      <p>
        {props.part.name}
        {props.part.exercises}
      </p>
    </>
  );
};

const Content = (props) => {
  console.log(props);
  return (
    <>
      <Part part={props.parts[0]} />
      <Part part={props.parts[1]} />
      <Part part={props.parts[2]} />
    </>
  );
};

const Total = (props) => {
  console.log(props);
  let sum = 0;
  for (const part of props.course.parts) {
    sum += part.exercises;
  }

  return (
    <>
      <p>Number of exercises {sum}</p>
    </>
  );
};
const App = () => {
  return (
    <>
      <Header course={course.name} />
      <Content parts={course.parts} />
      <Total course = {course}/>
    </>
  );
};

export default App;
