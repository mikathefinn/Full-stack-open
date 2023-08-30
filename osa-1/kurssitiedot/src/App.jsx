const App = () => {
  const course = 'Half Stack application development';
  const parts = [
    {
      name: 'Fundamentals of React',
      exercises: 10,
    },
    {
      name: 'Using props to pass data ',
      exercises: 7,
    },
    {
      name: 'State of a component',
      exercises: 14,
    },
  ];
  const Header = () => {
    return (
      <>
        <h1>{course}</h1>
      </>
    );
  };
  //
  const Part = ({ part }) => {
    console.log(part);
    return (
      <>
        <p>
          {part.name} {part.exercises}
        </p>
      </>
    );
  };
  const Content = () => {
    return (
      <>
        <Part part={parts[0]} />
        <Part part={parts[1]} />
        <Part part={parts[2]} />
      </>
    );
  };

  const Total = () => {
    return (
      <>
        <p>
          Number of exercises{' '}
          {parts[0].exercises + parts[1].exercises + parts[2].exercises}
        </p>
      </>
    );
  };

  return (
    <div>
      <Header />
      <Content />
      <Total />
    </div>
  );
};

export default App;
