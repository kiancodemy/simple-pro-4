import Single from "./single";

const Qustions = ({ question, c, a }) => {
  const change = question.map((q) => {
    return <Single a={a} c={c} key={q.id} {...q}></Single>;
  });

  return <section className="container">{change}</section>;
};
export default Qustions;
