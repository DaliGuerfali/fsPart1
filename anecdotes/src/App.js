import { useState } from 'react'



const Button = ({ handleClick, text }) => {
  return (
    <button onClick={handleClick} >{ text }</button>
  );
}

const Header = ({ text }) => {
  return <h1>{ text }</h1>;
}

const MostVotedAnecdote = ({ anecdotes,votes }) => {

  const maxIndex = returnMaxIndex(votes);

  return (
    <>
      <p>{anecdotes[maxIndex]}</p>
      <p>has {votes[maxIndex]} votes</p>
    </>
  );
}

const App = () => {
  const anecdotes = [
    'If it hurts, do it more often.',
    'Adding manpower to a late software project makes it later!',
    'The first 90 percent of the code accounts for the first 10 percent of the development time...The remaining 10 percent of the code accounts for the other 90 percent of the development time.',
    'Any fool can write code that a computer can understand. Good programmers write code that humans can understand.',
    'Premature optimization is the root of all evil.',
    'Debugging is twice as hard as writing the code in the first place. Therefore, if you write the code as cleverly as possible, you are, by definition, not smart enough to debug it.',
    'Programming without an extremely heavy use of console.log is same as if a doctor would refuse to use x-rays or blood tests when diagnosing patients.',
    'The only way to go fast, is to go well.'
  ]
   
  const [selected, setSelected] = useState(0)
  const [votes, setVotes] = useState((new Array(9)).fill(0))

  function handleAnecdote() {
    setSelected(Math.round(Math.random()*(anecdotes.length-1)));
  }

  function handleVote() {
    const newVotes = [...votes];
    newVotes[selected]++;
    setVotes(newVotes);
  }

  return (
    <div>
      <Header text={'Anecdote of the day'}/>
      <p>{anecdotes[selected]}</p>
      <p>has {votes[selected]} votes</p>
      <Button handleClick={handleVote} text={'vote'}/>
      <Button handleClick={handleAnecdote} text={'next anecdote'}/>
      <Header text={'Anecdote with most votes'}/>
      <MostVotedAnecdote anecdotes={anecdotes} votes={votes}/>
    </div>
  )
}

export default App


function returnMaxIndex(arr) {
  let max = arr[0];
  let maxIndex = 0;
  arr.forEach((element, i) => {
    if(max < element) {
      max = element;
      maxIndex = i;
    }
  });

  return maxIndex;
}