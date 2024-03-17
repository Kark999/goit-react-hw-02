import { useEffect, useState } from 'react';
import Description from './components/Description/Description';
import Options from './components/Options/Options';
import Feedback from './components/Feedback/Feedback';
import Notification from './components/Notification/Notification';
import './App.css';

const setupFeedback = {
  good: 0,
  neutral: 0,
  bad: 0,
};

function App() {
  const [feedback, setFeedback] = useState(() => {
    const stringifiedFeedback = localStorage.getItem('feedbackValues');
    const parsedFeedback = JSON.parse(stringifiedFeedback) ?? setupFeedback;
    return parsedFeedback;
  });

  const handleResetFeedback = () => {
    setFeedback(setupFeedback);
  };

  const updateFeedback = feedbackType => {
    setFeedback({ ...feedback, [feedbackType]: feedback[feedbackType] + 1 });
  };

  const totalFeedback = Object.values(feedback).reduce((a, b) => a + b, 0);

  const positiveFeedback = Math.round(
    ((feedback.good + feedback.neutral) / totalFeedback) * 100
  );

  useEffect(() => {
    localStorage.setItem('feedbackValues', JSON.stringify(feedback));
  }, [feedback]);

  return (
    <div>
      <Description />
      <Options
        totalFeedback={totalFeedback}
        updateFeedback={updateFeedback}
        handleResetFeedback={handleResetFeedback}
      />
      {totalFeedback > 0 ? (
        <>
          <Feedback
            feedback={feedback}
            total={totalFeedback}
            positiveFeedback={positiveFeedback}
          />
        </>
      ) : (
        <>
          <Notification />
        </>
      )}
    </div>
  );
}

export default App;
