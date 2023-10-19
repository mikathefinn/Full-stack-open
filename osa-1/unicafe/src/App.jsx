import { useState } from 'react';
const Header = (props) => {
  return <h1>{props.text}</h1>;
};
const Button = (props) => {
  return <button onClick={props.handleClick}>{props.text}</button>;
};
const Result = (props) => {
  return (
    <p>
      {props.text}
      {props.result}
    </p>
  );
};
const App = () => {
  // tallenna napit omaan tilaansa
  const [good, setGood] = useState(0);
  const [neutral, setNeutral] = useState(0);
  const [bad, setBad] = useState(0);
  const total = good + bad + neutral;
  const average = (good - bad) / total;
  const positive = (good/total)*100

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

      <Header text="statistics" />
      <Result text="good: " result={good} />
      <Result text="bad: " result={bad} />
      <Result text="neutral: " result={neutral} />
      <Result text="total: " result={total} />
      <Result text="average: " result={average} /> 
      <Result text="positive: " result={positive + ' %'} /> 
    </div>
  );
};

export default App;
