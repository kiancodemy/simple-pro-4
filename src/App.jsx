import { useState } from "react";
import Qustions from "./qustions";
import data from "./data";
const App = () => {
  const [questions, setquestions] = useState(data);
  const [a, seta] = useState(0);
  const change = (id) => {
    seta(id);
  };

  return (
    <main>
      <Qustions c={change} a={a} question={questions} />
    </main>
  );
};
export default App;
