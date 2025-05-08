import './App.css'
import Description from '../Description/Description'
import Options from '../Options/Options'
import Feedback from '../FeedBack/FeedBack'
import { useEffect, useState } from 'react'

function App() {
  const defaultStats = {
    good: 0,
    neutral: 0,
    bad: 0,
  }
  const [feedBack, setFeedBack] = useState(() => {
    const savedData = localStorage.getItem('feedback');
    return savedData ? JSON.parse(savedData) : defaultStats;
  });

  const updateFeedback = feedbackType => {
  setFeedBack(prevState => {
    return {
      ...prevState,
      [feedbackType]: prevState[feedbackType] + 1,
    };
  });
  };
  
  useEffect(() => {
    localStorage.setItem('feedback', JSON.stringify(feedBack));
  }, [feedBack])

  const totalFeedback = feedBack.bad + feedBack.good + feedBack.neutral;
  const positiveFeedback = Math.round((feedBack.good / totalFeedback) * 100);


  const resetFeedBack = () => {
    setFeedBack(defaultStats);
  }



  return (
    <>
      <Description />
      <Options updateFeedback={updateFeedback} resetFeedBack={resetFeedBack} totalFeedback={totalFeedback} />
      <Feedback feedBack={feedBack} totalFeedback={totalFeedback} positiveFeedback={positiveFeedback} />
    </>
  )
}

export default App
