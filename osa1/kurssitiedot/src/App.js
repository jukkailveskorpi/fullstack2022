const App=()=> {

  const Header =(props)=> {
  return (
    <div>
     <h1> {props.course} </h1>
    </div>
   )
  }

  const Part =(props)=> {
    return(
     <p>{props.part}</p>
    )
  }

  const Content =(props)=> {
    return(
      <div>
      <Part part = {props.content} />
      <Part part = {props.content2} />
      <Part part = {props.content3} />
      </div>
    )
  }

  const Total =(props)=> {
    return (
      <p>Number of exercises {props.total}</p>
    )
  }

  const course = 'Half Stack application development'
  const part1 = {
    name: 'Fundamentals of React ',
    exercises: 10
  }
  const part2 = {
    name: 'Using props to pass data ',
    exercises: 7
  }
  const part3 = {
    name: 'State of a component ',
    exercises: 14
  }

  return (
  <div>
    <Header course={course} />
    <Content content={part1.name + part1.exercises} content2={part2.name + part2.exercises} content3={part3.name + part3.exercises} />
    <Total total={part1.exercises + part2.exercises + part3.exercises} />
  </div>
  )
}

export default App;
