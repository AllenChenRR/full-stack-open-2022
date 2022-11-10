// Requirements:  Feedback types, and total number for each feedback

import { useState } from 'react'
const Header = (props) => <h1>{props.header}</h1>
const Section = (props) => <h2>{props.section}</h2>
const Button = (props) => <button onClick={props.onClick}>{props.text}</button>
const Display = (props) => <p>{props.text}: {props.number}</p>

const App = () => {
  const header = "Unicafe Feedback"
  const statTitle = "Statistics"
  const goodTitle = "Good"
  const badTitle = "Bad"
  const neutralTitle = "Neutral"
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0);
  const [bad, setBad] = useState(0)

  const handleGood = () => setGood(good + 1)
  const handleBad  = () => setBad(bad + 1)
  const handleNeutral = () => setNeutral(neutral + 1)


  return (
    <div>
      <Header header={header}></Header>
      <div> 
        <Button onClick={handleGood} text={goodTitle}></Button>
        <Button onClick={handleBad} text={badTitle}></Button>
        <Button onClick={handleNeutral} text={neutralTitle}></Button>
      </div>
      <Section section={statTitle}></Section>
      <Display text={goodTitle} number={good}></Display>
      <Display text={badTitle} number={bad}></Display>
      <Display text={neutralTitle} number={neutral}></Display>
    </div>
  )
}


export default App