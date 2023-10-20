import { useState } from 'react';
const Header = (props) => {
  return <h1>{props.text}</h1>;
};
const Button = (props) => {
  return <button onClick={props.handleClick}>{props.text}</button>;
};
const StatisticLine = ({ text, result }) => {
  return (
    <p>
      {text}
      {result}
    </p>
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
      <StatisticLine text="good: " result={good} />
      <StatisticLine text="bad: " result={bad} />
      <StatisticLine text="neutral: " result={neutral} />
      <StatisticLine text="total: " result={total} />
      <StatisticLine text="average: " result={average} />
      <StatisticLine text="positive: " result={positive + ' %'} />
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
    </div>
  );
};

export default App;
