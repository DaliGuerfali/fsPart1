import { useState } from 'react'

const Header = ({ text }) => {
  return (
    <h1>{ text }</h1>
  );
}

const Button = ({text, handleClick}) => {
  return (
    <button onClick={handleClick}>{text}</button>
  );
}

const StatisticsLine = ({text, value}) => {
  return (
    <tr>
      <td>{text}</td>
      <td>{value}</td>
    </tr>
    );
}

const Statistics = ({good, neutral, bad}) => {
  const all = good+neutral+bad;
  if(all === 0) {
    return <p>No feedback given</p>;
  } else {
    return (
    <table>
      <tbody>
      <StatisticsLine text={'good'} value={good} />
      <StatisticsLine text={'neutral'} value={neutral} />
      <StatisticsLine text={'bad'} value={bad} /> 
      <StatisticsLine text={'all'} value={all} /> 
      <StatisticsLine text={'average'} value={all > 0 ? (good-bad)/all : 0} />
      <StatisticsLine text={'positive'} value={(all > 0 ? (good/all)*100: 0) + ' %'} />
      </tbody>
    </table>
  );
}
}


const App = () => {
  // save clicks of each button to its own state
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)

  function handleGoodClick() {
    setGood(good + 1);
  }
  
  function handleNeutralClick() {
    setNeutral(neutral + 1);
  }
  
  function handleBadClick() {
    setBad(bad + 1);
  }

  return (
    <div>
      <Header text={'give feedback'} />
      <Button text={'good'} handleClick={handleGoodClick} />
      <Button text={'neutral'} handleClick={handleNeutralClick} />
      <Button text={'bad'} handleClick={handleBadClick } />
      <Header text={'statistics'} />
      <Statistics good={good} neutral={neutral} bad={bad}/>
    </div>
  )
}

export default App
