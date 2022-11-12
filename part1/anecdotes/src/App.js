import { useState } from 'react'
const AnecdoteButton = (props) => {
  return (
    <button onClick={props.onClick}>
      Next Anecdote
    </button>
  )
}

const VoteButton = (props) => {
  return (
    <button onClick={props.onClick}>Vote</button>
  )
}

const DisplayMostVotes = (props) => {
  const mostVotesHeader = "Anecdote with most votes"
  if (props.mostVoted >= 0) {
    return (
      <div>
        <h2>{mostVotesHeader}</h2>
        <p>{props.anecdotes[props.mostVoted]}</p>
        <p>has {props.votes[props.mostVoted]} votes</p>
      </div>
    )
  }
}

const DisplayVotes = (props) => {
    if (props.selected in props.votes) {
      return (<p>has {props.votes[props.selected]} votes</p>)
    } else {
      return (<p>has 0 votes</p>)
    }
}
const App = () => {
  const anecdotes = [
    'If it hurts, do it more often.',
    'Adding manpower to a late software project makes it later!',
    'The first 90 percent of the code accounts for the first 10 percent of the development time...The remaining 10 percent of the code accounts for the other 90 percent of the development time.',
    'Any fool can write code that a computer can understand. Good programmers write code that humans can understand.',
    'Premature optimization is the root of all evil.',
    'Debugging is twice as hard as writing the code in the first place. Therefore, if you write the code as cleverly as possible, you are, by definition, not smart enough to debug it.',
    'Programming without an extremely heavy use of console.log is same as if a doctor would refuse to use x-rays or blood tests when diagnosing patients.'
  ]
  const anecdoteHeader = "Anecdote of the day"
  
  const [selected, setSelected] = useState(0)
  const [votes, setVotes] = useState({})
  const [mostVoted, setMostVoted] = useState(-1)
  // define onclick function to generate random number
  const handleSelected = () => {
    let rand_selected = Math.floor(Math.random() * anecdotes.length)
    setSelected(rand_selected)
  }

  const handleVotes = () => {
    let copy = {...votes}
    if (!(selected in votes)) {
      copy[selected] = 0
    }
    copy[selected] += 1
    let new_most = Object.keys(copy).reduce((a, b) => copy[a] > copy[b] ? a : b)
    setVotes(copy)
    setMostVoted(new_most)
  }
  return (
    <div>
      <h2>{anecdoteHeader}</h2>
      {anecdotes[selected]}
      <DisplayVotes selected ={selected} votes={votes}></DisplayVotes>
      <div>
        <VoteButton onClick={handleVotes}></VoteButton>
        <AnecdoteButton onClick={handleSelected}></AnecdoteButton>
      </div>
        <DisplayMostVotes anecdotes={anecdotes} mostVoted={mostVoted} votes={votes}></DisplayMostVotes>
    </div>
  )
}

export default App