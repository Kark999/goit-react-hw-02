import React, { useState } from 'react';
import Description from './components/Description/Description';
import Options from './components/Options/Options';
import Feedback from './components/Feedback/Feedback';
import './App.css';

const setupFeedback = {
  good: 0,
  neutral: 0,
  bad: 0,
};

function App() {
  const [feedback, setFeedback] = useState(setupFeedback);

  const updateFeedback = feedbackType => {
    setFeedback({ ...feedback, [feedbackType]: feedback[feedbackType] + 1 });
  };

  return (
    <div>
      <Description />
      <Options updateFeedback={updateFeedback} />
      <Feedback feedback={feedback} />
    </div>
  );
}

export default App;
