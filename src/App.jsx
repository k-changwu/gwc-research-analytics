import Quiz from "./Quiz";
import { jsQuiz } from "./constants";

function App() {
  return (
    <Quiz questions = {jsQuiz.questions} />
  );
}

export default App;
