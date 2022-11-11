import { useState } from 'react'
const Header = (props) => <h1>{props.header}</h1>
const Section = (props) => <h2>{props.section}</h2>
const Button = (props) => <button onClick={props.onClick}>{props.text}</button>
const StatisticsLine = (props) => {
  return <tr>
    <td>{props.text}</td> 
    <td>{props.value} {props.symbol}</td>
  </tr>
}

const Statistics = (props) => {
  if (props.values.total == 0) {
    return <div>No feedback given</div>
  }
  return(
    <table>
      <tbody>
        <StatisticsLine text={props.titles.good} value={props.values.good}></StatisticsLine>
        <StatisticsLine text={props.titles.neutral} value={props.values.neutral}></StatisticsLine>
        <StatisticsLine text={props.titles.bad} value={props.values.bad}></StatisticsLine>
        <StatisticsLine text={props.titles.total} value ={props.values.total}></StatisticsLine>
        <StatisticsLine text={props.titles.average} value={props.values.average}></StatisticsLine>
        <StatisticsLine text={props.titles.positive} value={props.values.positive} symbol="%"></StatisticsLine>
      </tbody>
    </table>
  )
}

const App = () => {
  const header = "Unicafe Feedback"
  const statTitle = "Statistics"
  const goodTitle = "Good"
  const badTitle = "Bad"
  const neutralTitle = "Neutral"
  const averageTitle = "Average"
  const positiveTitle = "Positive"
  const totalTitle = "All"
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0);
  const [bad, setBad] = useState(0)
  const [average, setAverage] = useState(0)
  const [positive, setPositive] = useState(0)
  const [total, setTotal] = useState(0)

  const handleAvgGood = () =>  setAverage((good + 1) + (bad *  -1)/(total + 1))
  const handleAvgNeutral = () => setAverage((good + (bad * -1))/ (total + 1))
  const handleAvgBad = () => setAverage((good + ((bad + 1) *  -1))/(total + 1))
  const handleTotal = () => setTotal(total + 1)
  const handlePosNonGood = () => setPositive(good/(total + 1) * 100)
  const handlePosGood = () => setPositive((good + 1)/(total + 1) * 100)

  const handleGood = () => {
    setGood(good + 1)
    setAverage()
    handleAvgGood()
    handlePosGood()
    handleTotal()
  }

  const handleBad  = () => {
    setBad(bad + 1)
    handleAvgBad()
    handlePosNonGood()
    handleTotal()
  }
  
  const handleNeutral = () => {
    setNeutral(neutral + 1)
    handleAvgNeutral()
    handlePosNonGood()
    handleTotal()
  }

  
  const titles = {
    good: goodTitle,
    bad: badTitle,
    neutral: neutralTitle,
    positive: positiveTitle,
    average: averageTitle,
    total: totalTitle
  }
  const values = {
    good: good,
    bad: bad,
    neutral: neutral,
    total: total,
    average: average,
    positive: positive,
  }

  return (
    <div>
      <Header header={header}></Header>
      <div> 
        <Button onClick={handleGood} text={goodTitle}></Button>
        <Button onClick={handleNeutral} text={neutralTitle}></Button>
        <Button onClick={handleBad} text={badTitle}></Button>

      </div>
      <Section section={statTitle}></Section>
      <Statistics values={values} titles={titles}></Statistics>
    </div>
  )
}


export default App