import { useState } from 'react';
const Header = (props) => {
  return <h1>{props.text}</h1>;
};
const Button = (props) => {
  return <button onClick={props.handleClick}>{props.text}</button>;
};
const StatisticLine = ({ text, result }) => {
  return (
    <tr>
      <td>{text}</td>
      <td>{result}</td>
    </tr>
  );
};
const Statistics = ({ good, bad, neutral, total, average, positive }) => {
  if (total === 0)
    return (
      <div>
        <Header text="No feedback given" />
      </div>
    );
  return (
    <>
      <Header text="statistics" />
      {/* Also possible, <Result text='good' result={props.good} */}
      <table>
        <tbody>
          <StatisticLine text="good" result={good} />
          <StatisticLine text="bad" result={bad} />
          <StatisticLine text="neutral" result={neutral} />
          <StatisticLine text="total" result={total} />
          <StatisticLine text="average" result={average} />
          <StatisticLine text="positive" result={positive + ' %'} />
        </tbody>
      </table>
    </>
  );
};

const App = () => {
  const [good, setGood] = useState(0);
  const [neutral, setNeutral] = useState(0);
  const [bad, setBad] = useState(0);

  const total = good + bad + neutral;
  const average = (good - bad) / total;
  const positive = (good / total) * 100;

  const handleGoodClick = () => {
    console.log('good clicked, value before', good);
    setGood(good + 1);
  };
  const handleBadClick = () => {
    console.log('bad clicked, value before', bad);
    setBad(bad + 1);
  };
  const handleNeutralClick = () => {
    console.log('good clicked, value before', neutral);
    setNeutral(neutral + 1);
  };

  const anecdotes = [
    'If it hurts, do it more often.',
    'Adding manpower to a late software project makes it later!',
    'The first 90 percent of the code accounts for the first 90 percent of the development time...The remaining 10 percent of the code accounts for the other 90 percent of the development time.',
    'Any fool can write code that a computer can understand. Good programmers write code that humans can understand.',
    'Premature optimization is the root of all evil.',
    'Debugging is twice as hard as writing the code in the first place. Therefore, if you write the code as cleverly as possible, you are, by definition, not smart enough to debug it.',
    'Programming without an extremely heavy use of console.log is same as if a doctor would refuse to use x-rays or blood tests when dianosing patients.',
    'The only way to go fast, is to go well.',
  ];

  const [selected, setSelected] = useState(0);
  const randomAnecdote = () => {
    setSelected(Math.floor(Math.random() * anecdotes.length));
  };

  return (
    <div>
      <Header text="give feedback" />
      <Button handleClick={handleGoodClick} text="good" />
      <Button handleClick={handleBadClick} text="bad" />
      <Button handleClick={handleNeutralClick} text="neutral" />

      <Statistics
        good={good}
        bad={bad}
        neutral={neutral}
        total={total}
        average={average}
        positive={positive}
      />

      <div>
        <Button handleClick={randomAnecdote} text="Click me" />
        {anecdotes[selected]}
      </div>
    </div>
  );
};

export default App;
