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
  const [reviews, setReviews] = useState({ good: 0, neutral: 0, bad: 0 });

  const handleGoodClick = () => {
    console.log('good clicked, value before', reviews);
    setReviews({ ...reviews, good: reviews.good + 1 });
    const updatedGood = good + 1;
    setGood(updatedGood);
    console.log('updated good', updatedGood);
  };
  const handleBadClick = () => {
    console.log('bad clicked, value before', reviews);
    setReviews({ ...reviews, bad: reviews.bad + 1 });
    const updatedBad = bad + 1;
    setBad(updatedBad);
    console.log('updated bad', updatedBad);
  };
  const handleNeutralClick = () => {
    console.log('good clicked, value before', reviews);
    setReviews({ ...reviews, neutral: reviews.neutral + 1 });
    const updatedNeutral = neutral + 1;
    setNeutral(updatedNeutral);
    console.log('updated neutral', updatedNeutral);
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
    </div>
  );
};

export default App;
