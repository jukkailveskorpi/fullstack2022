import { useState } from "react";

const Statistics = (props) => {
   if (props.good + props.bad + props.neutral === 0) {
    return (
      <div>
        No feedback given yet!
      </div>
    )
  } 

  const all = (props.good + props.bad + props.neutral);
  const average = ((props.good + props.bad * -1 + props.neutral * 0) / (all));
  const positive = (all ? (props.good * 100) /all : 0) + " %";

  return (
    <div>
<div>
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
</div>
</div>
)

  
  /* (
    <div>
    <div>
    {props.good} 
    </div>
     <div>
     {props.bad} 
     </div>
      <div>
      {props.neutral} 
      </div>
      </div>
  ) */
}

const App =()=> {

  const [good, setGood] = useState(0)
  const [bad, setBad] = useState(0)
  const [neutral, setNeutral] = useState(0) 



  return (
    <div>
    <h1>Give feedback</h1>
    <div>
      <button onClick={() => setGood(good+1)}>Good</button>
      <button onClick={() => setBad(bad+1)}>Bad</button>
      <button onClick={() => setNeutral(neutral+1)}>Neutral</button>
    </div>

    <h1>Statistics</h1>
    <div>
    <Statistics good = {good} bad = {bad} neutral = {neutral} />
    </div>
  </div>
  )
}

export default App;



 

 
