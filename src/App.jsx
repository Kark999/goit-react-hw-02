// import { useState } from "react";
import Description from "./components/Description/Description";
import Options from "./components/Options/Options";
import Feedback from "./components/Feedback/Feedback";
import "./App.css";

// const feedbackType = { good: 0, neutral: 0, bad: 0 };

function App() {
  const updateFeedback = (feedbackType) => {
    console.log("feedbackType: ", feedbackType);
  };

  return (
    <div>
      <Description />
      <Options updateFeedback={updateFeedback} />
      <Feedback />
    </div>
  );
}

export default App;
