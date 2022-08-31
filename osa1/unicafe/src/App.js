import { useState } from "react";

const Button =({ handleClick, text })=> (
  <button onClick={handleClick}>
    {text}
  </button>
)

const StatisticLine =({ text, value })=> {
  return (
    <table>
      <tbody>
        <tr>
          <td>{text}</td>
          <td>{value}</td>
        </tr>
      </tbody>
    </table>
  )
  }

const Statistics = ({ good, bad, neutral }) => {
   if (good + bad + neutral === 0) {
    return (
      <div>
        No feedback given yet!
      </div>
    )
  } 

  const all = (good + bad + neutral);
  const average = ((good + bad * -1 + neutral * 0) / (all));
  const positive = (all ? (good * 100) /all : 0) + " %";

  return (
    <div>
      <StatisticLine text="Good " value={good} />
      <StatisticLine text="Bad " value={bad} />
      <StatisticLine text="Neutral " value={neutral} />
      <StatisticLine text="All " value={all} />
      <StatisticLine text="Average " value={average} />
      <StatisticLine text="Positive " value={positive} />
    </div>
)
}

const App =()=> {

  const [good, setGood] = useState(0)
  const [bad, setBad] = useState(0)
  const [neutral, setNeutral] = useState(0) 

  return (
    <div>
    <h1>Give feedback</h1>
    <div>
      <Button handleClick={() => setGood(good+1)} text='Good' />
      <Button handleClick={() => setBad(bad+1)} text='Bad' />
      <Button handleClick={() => setNeutral(neutral+1)} text='Neutral' /> 
    </div>
    <h1>Statistics</h1>
    <div>
    <Statistics good = {good} bad = {bad} neutral = {neutral} />
    </div>
  </div>
  )
}

export default App;



 /* <div>
Good: {props.good} 
</div>
<div>
Bad: {props.bad} 
</div>
<div>
Neutral: {props.neutral} 
</div>

<div>
all: {all} 
</div>
<div>
Average: {average} 
</div>
<div>
Positive: {positive} 
</div> */
