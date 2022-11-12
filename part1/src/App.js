const Header = (props) => {
  console.log(props)
  return (<h1>{props.course.name}</h1>)
}
const Part = (props) => {
  return(<p>{props.name} {props.exercises}</p>)
}

const Content = (props) => {
  return <div>
    <Part name={props.parts[0].name} exercises={props.parts[0].exercises}></Part>
    <Part name={props.parts[1].name} exercises={props.parts[1].exercises}></Part>
    <Part name={props.parts[2].name} exercises={props.parts[2].exercises}></Part>
  </div>
}

const Total = (props) => {
  let a, b, c;
  [a, b, c] = props.parts
  return (<p>Number of exercises {a.exercises + b.exercises + c.exercises}</p>)
}


const App = () => {
  const course = {
    name: 'Half Stack application development',
    parts: [
      {
        name: 'Fundamentals of React',
        exercises: 10
      },
      {
        name: 'Using props to pass data',
        exercises: 7
      },
      {
        name: 'State of a component',
        exercises: 14
      }
    ]
  }

  return (
    <div>
      <Header course={course}></Header>
      <Content parts={course.parts}></Content>
      <Total parts={course.parts}></Total>
    </div>
  )
}

export default App